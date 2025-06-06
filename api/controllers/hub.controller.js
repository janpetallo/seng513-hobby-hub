import Hub from '../models/hub.model.js';
import User from "../models/user.model.js";
import Post from "../models/post.model.js";

export const getAllHubs = async (req, res) => {
    try {
        // Fetch all hubs from the database
        const hubs = await Hub.find();
        res.status(200).json(hubs);
    } catch (error) {
        res.status(500).send("Error fetching hubs");
        console.error(error);
    }
};


export const getHub = async (req, res) => {
    try {
        // Extract the hub ID from the request parameters
        const { hubName } = req.params;

        // Find the hub by ID
        const hub = await Hub.findOne({ hubName: hubName });

        // Check if the hub exists
        if (!hub) {
            return res.status(404).send("Hub not found");
        }

        // If the hub exists, send it as a response
        res.status(200).json(hub);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send("Error fetching hub");
    }
};


export const createHub = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to post on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to create a hub on this account! You can create hubs on your own account!");
        }

        // Create a new object without the userId field
        const hubData = { ...req.body };
        delete hubData.userID;

        // Creating the new hub based on the request sent
        const newHub = new Hub(hubData);
        // send new hub to the database
        await newHub.save();

        // Add the hub's ID to the user's hubs array
        currentUser.hubs.push(newHub._id);
        await currentUser.save();

        res.status(201).send("Created new Hub successfully!");

    } catch (error) {
        res.status(500).send("Error with creating a Hub");
        console.log(error);
    }
};


export const checkValidHubName = async (req, res) => {
    try {
        // Get the hub name from the request body
        const { hubName, userID } = req.body;

        // get the current user
        const currentUser = await User.findById(userID);

        // identity verification required to post on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to create a hub on this account! You can create hubs on your own account!");
        }

        // Check if the hub name already exists in the database
        const existingHub = await Hub.findOne({ hubName: hubName });

        if (existingHub) {
            return res.status(400).send("Error: Hub name already exists.");
        }

        // If the hub name doesn't exist, return success
        res.status(200).send("Hub name is valid.");

    } catch (error) {
        res.status(500).send("Error with validating a Hub Name");
        console.log(error);
    }
};


export const addMemberToHub = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to allow folloing on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to follow hubs on this account! You can only follow hubs from your own account!");
        }

        // Extract the hub name and member ID from the request body
        const { hubName, userID } = req.body;

        // Find the hub by name
        const hub = await Hub.findOne({ hubName: hubName });


        // Check if the hub exists
        if (!hub) {
            return res.status(404).send("Hub not found");
        }

        // Check if the user ID already exists in the members array
        if (hub.members.includes(userID)) {
            return res.status(400).send("User is already a member of this hub");
        }

        // Add the user ID to the members array
        hub.members.push(userID);

        // Save the updated hub
        await hub.save();

        // add the hub only to the user's hub array if it isn't already in it
        if(!currentUser.hubs.includes(hub._id)) {
            currentUser.hubs.push(hub._id);
        }

        await currentUser.save();


        res.status(200).send("User added to hub successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding user to hub");
    }
};


export const removeMemberFromHub = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // Extract the hub name and member ID from the request body
        const { hubName, userID } = req.body;

        // Find the hub by name
        const hub = await Hub.findOne({ hubName: hubName });


        // identity verification required to allow unfollowing on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to unfollow a hub on this account! You can only unfollow hubs from your own account!");
        }


        // Check if the hub exists
        if (!hub) {
            return res.status(404).send("Hub not found");
        }

        // Check if the member ID exists in the members array
        if (!hub.members.includes(userID)) {
            return res.status(400).send("User is not a member of this hub");
        }

        // Remove the member ID from the members array
        hub.members = hub.members.filter(member => member.toString() !== userID);

        // Save the updated hub
        await hub.save();

        // remove the hub only to the user's hub array if it is already in it
        if(currentUser.hubs.includes(hub._id)) {
            currentUser.hubs = currentUser.hubs.filter(hubId => hubId.toString() !== hub._id.toString());
        }

        await currentUser.save();

        res.status(200).send("User removed from hub successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error removing user from hub");
    }
};


export const removePostFromHub = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to interact with posts on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to delete Posts from the hub on this account! You can only delete posts from your own account!");
        }

        // Extract the hub name and post ID from the request body
        const { hubName, postID } = req.body;

        // Find the hub by name
        const hub = await Hub.findOne({ hubName: hubName });

        // Check if the hub exists
        if (!hub) {
            return res.status(404).send("Hub not found");
        }

        // check if the current user is the moderator. If not return with an error as they aren't allowed to delete posts
        if(hub.moderators[0].toString() !== currentUser._id.toString()) {
            console.log(hub.moderators[0]);
            console.log(currentUser._id);
            return res.status(403).send("Error you are not authorized to delete Posts from the hub as you are not an authorized moderator!");
        }

        // Check if the post ID exists in the posts array
        if (!hub.posts.includes(postID)) {
            return res.status(400).send("Post does not exist in this hub");
        }

        // Remove the post ID from the posts array
        hub.posts = hub.posts.filter(post => post.toString() !== postID);

        // Save the updated hub
        await hub.save();


        // Find the post using the post ID
        const post = await Post.findById(postID);

        // Check if the post exists
        if (!post) {
            console.error("Post not found");
            return;
        }

        // Get the username associated with the post
        const username = post.userName;

        // Find the user using the username
        const user = await User.findOne({ username });

        // Check if the user exists
        if (!user) {
            console.error("User not found");
            return;
        }

        // Remove the post ID from the user's posts array
        user.posts = user.posts.filter(userPost => userPost.toString() !== postID);

        // Save the updated user document
        await user.save();


        // Remove the post from the ForumPost collection - aka wipe it from hobby hub
        await Post.findByIdAndDelete(postID);



        res.status(200).send("Post removed from hub successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error removing post from hub");
    }
};
