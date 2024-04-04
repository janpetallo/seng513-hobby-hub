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

        // Add the post's ID to the user's posts array
        currentUser.posts.push(newPost._id);
        await currentUser.save();

        res.status(201).send("Created new Post successfully!");

    } catch (error) {
        res.status(500).send("Error with creating a Post");
        console.log(error);
    }
};


export const getAllPosts = async (req, res) => {
    try {
        // Fetch all posts from MongoDB
        const allPosts = await Post.find();
        // Send the fetched posts as response
        res.status(200).json(allPosts);
    } catch (error) {
        res.status(500).send("Error Fetching all Posts");
        console.log(error);
    }
};


export const likePost = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to interact with posts on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to interact with Posts on this account! You can Post on your own account!");
        }


        const postId = req.params.postId;

        // Find the post by ID
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).send("Post not found");
        }

        // Increment the upvote count
        post.upvote++;

        // Save the updated post
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error liking the post");
    }
};


export const unlikePost = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to interact with posts on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to interact with Posts on this account! You can Post on your own account!");
        }


        const postId = req.params.postId;

        // Find the post by ID
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).send("Post not found");
        }

        // decrement the upvote count
        post.upvote--;

        // Save the updated post
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error unliking the post");
    }
};


export const disLikePost = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to interact with posts on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to interact with Posts on this account! You can Post on your own account!");
        }


        const postId = req.params.postId;

        // Find the post by ID
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).send("Post not found");
        }

        // increment the downvote count
        post.downvote++;

        // Save the updated post
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error disliking the post");
    }
};


export const undisLikePost = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to interact with posts on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to interact with Posts on this account! You can Post on your own account!");
        }


        const postId = req.params.postId;

        // Find the post by ID
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).send("Post not found");
        }

        // increment the downvote count
        post.downvote--;

        // Save the updated post
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error disliking the post");
    }
};