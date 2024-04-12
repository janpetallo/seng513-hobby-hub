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


export const getAllComments = async (req, res) => {
    try {
        // Fetch all posts from MongoDB
        const allComments = await Comment.find();
        // Send the fetched posts as response
        res.status(200).json(allComments);
    } catch (error) {
        res.status(500).send("Error Fetching all Comments");
        console.log(error);
    }
};


export const likeComment = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to interact with posts on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to write comments on this account! You can comment once you have logged in!");
        }


        const commentId = req.params.commentId;

        // Find the post by ID
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).send("Comment not found");
        }

        // Increment the upvote count
        comment.upvote++;

        // Add the user's ID to usersLiked array if not already present
        if (!comment.usersLiked.includes(currentUser._id)) {
            comment.usersLiked.push(currentUser._id);
        }

        // Save the updated post
        await comment.save();


        res.status(200).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error liking the Comment");
    }
};


export const unlikeComment = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to interact with posts on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to interact with Comments on this account! You can Comment once you are logged in!");
        }


        const commentId = req.params.commentId;

        // Find the post by ID
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).send("Post not found");
        }

        // decrement the upvote count
        comment.upvote--;

        // Remove the user's ID from usersLiked array
        const index = comment.usersLiked.indexOf(currentUser._id);
        if (index !== -1) {
            comment.usersLiked.splice(index, 1);
        }

        // Save the updated post
        await comment.save();

        res.status(200).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error unliking the Comment");
    }
};


export const dislikeComment = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to interact with posts on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to interact with Comments on this account! You can Comment once you are logged in!");
        }


        const commentId = req.params.commentId;

        // Find the post by ID
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).send("Comment not found");
        }

        // increment the downvote count
        comment.downvote++;

        // Add the user's ID to usersDisliked array if not already present
        if (!comment.usersDisliked.includes(currentUser._id)) {
            comment.usersDisliked.push(currentUser._id);
        }


        // Save the updated post
        await comment.save();

        res.status(200).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error disliking the comment");
    }
};


export const undislikeComment = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to interact with posts on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to interact with Comments on this account! You can Comment once you are logged in!");
        }


        const commentId = req.params.commentId;

        // Find the post by ID
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).send("Comment not found");
        }

        // increment the downvote count
        comment.downvote--;

        // Remove the user's ID from usersDisliked array
        const index = comment.usersDisliked.indexOf(currentUser._id);
        if (index > -1) {
            comment.usersDisliked.splice(index, 1);
        }

        // Save the updated post
        await comment.save();

        res.status(200).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error disliking the comment");
    }
};