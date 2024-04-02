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

        // Create a new object without the userId field
        const postData = { ...req.body };
        delete postData.userID;

        // Creating the new post based on the request sent
        const newPost = new Post(postData);
        // send new post to the database
        await newPost.save();
        res.status(201).send("Created new Post successfully!");

    } catch (error) {
        res.status(500).send("Error with creating a Post");
        console.log(error);
    }
};