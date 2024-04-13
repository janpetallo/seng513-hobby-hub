import express from "express";
import {
    createPost, deletePostById,
    disLikePost,
    getAllPosts, getPostsByIds,
    likePost,
    undisLikePost,
    unlikePost
} from "../controllers/post.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

// routing the url request for posts to the post controller

// route to the createPost function. Token verified before hand
router.post("/createPost", createPost);
// route to the getAllPosts function. No token verification required
router.get("/getAllPosts", getAllPosts);
// route to the getPostsByIds function.
router.get("/getPostsByIds", getPostsByIds);
// route to the likePost function.
router.post("/likePost/:postId", likePost);
// route to the unlikePost function.
router.post("/unlikePost/:postId", unlikePost);
// route to the dislikePost function.
router.post("/disLikePost/:postId", disLikePost);
// route to the undislikePost function.
router.post("/undisLikePost/:postId", undisLikePost);
// Route to delete a post by its ID. Token verified beforehand
router.delete("/deletePost/:postId", deletePostById);

export default router;