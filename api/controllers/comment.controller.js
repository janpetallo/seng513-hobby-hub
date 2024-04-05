import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";

export const createComment = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // get the current post
        const currentPost = await Post.findById(req.body.postID);

        // identity verification required to post on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to Comment on this account! You can only Comment on your own account!");
        }

        // Create a new object without the userID and postID field
        const commentData = { ...req.body };
        delete commentData.userID;
        delete commentData.postID;

        // Creating the new comment based on the request sent
        const newComment = new Comment(commentData);
        // send new comment to the database
        await newComment.save();

        // Add the comment's ID to the post's comment array
        currentPost.comments.push(newComment._id);
        await currentPost.save();

        res.status(201).send("Created new Comment successfully!");

    } catch (error) {
        res.status(500).send("Error with creating a Comment");
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

        // Add the user's ID to usersLiked array if not already present
        if (!post.usersLiked.includes(currentUser._id)) {
            post.usersLiked.push(currentUser._id);
        }

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

        // Remove the user's ID from usersLiked array
        const index = post.usersLiked.indexOf(currentUser._id);
        if (index !== -1) {
            post.usersLiked.splice(index, 1);
        }

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

        // Add the user's ID to usersDisliked array if not already present
        if (!post.usersDisliked.includes(currentUser._id)) {
            post.usersDisliked.push(currentUser._id);
        }


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

        // Remove the user's ID from usersDisliked array
        const index = post.usersDisliked.indexOf(currentUser._id);
        if (index > -1) {
            post.usersDisliked.splice(index, 1);
        }

        // Save the updated post
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error disliking the post");
    }
};