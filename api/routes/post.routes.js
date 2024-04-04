import express from "express";
import {
    createPost,
    disLikePost,
    getAllPosts,
    likePost,
    undisLikePost,
    unlikePost
} from "../controllers/post.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

// routing the url request for posts to the post controller

// route to the createPost function. Token verified before hand
router.post("/createPost", verifyToken, createPost);
// route to the getAllPosts function. No token verification required
router.get("/getAllPosts", getAllPosts);
// route to the likePost function.
router.post("/likePost/:postId", verifyToken, likePost);
// route to the unlikePost function.
router.post("/unlikePost/:postId", verifyToken, unlikePost);
// route to the dislikePost function.
router.post("/disLikePost/:postId", verifyToken, disLikePost);
// route to the undislikePost function.
router.post("/undisLikePost/:postId", verifyToken, undisLikePost);


export default router;