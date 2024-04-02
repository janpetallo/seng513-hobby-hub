// function to create a new post
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const createPost = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to post on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to Post on this account! You can Post on your own account!");
        }

        // creating the new post based on the request sent
        const newPost = new Post({
            // take the user parameters from the request body
            ...req.body,
        })
        // send new post to the database
        await newPost.save();
        res.status(201).send("Created new Post successfully!");

    } catch (error) {
        res.status(500).send("Error with creating a Post");
        console.log(error);
    }
};