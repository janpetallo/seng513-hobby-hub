// function to create a new post
import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
    try {
        // creating the new post based on the request sent
        const newPost = new Post({
            // take the user parameters from the request body
            ...req.body,
            // update img
        })
        // send new post to the database
        await newPost.save();
        res.status(201).send("Created new Post successfully!");

    } catch (error) {
        res.status(500).send("Error with creating a Post");
    }
};