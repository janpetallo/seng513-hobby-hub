import express from "express";
import {
    createPost,
    disLikePost,
    getAllPosts, getDownVotes, getUpVotes,
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


// route to the getUpVotes function. No token verification required
router.get("/getUpVotes", getUpVotes);
// route to the getDownVotes function. No token verification required
router.get("/getDownVotes", getDownVotes);



// route to the likePost function.
router.post("/likePost/:postId", verifyToken, likePost);
// route to the unlikePost function.
router.post("/unlikePost", verifyToken, unlikePost);
// route to the dislikePost function.
router.post("/disLikePost", verifyToken, disLikePost);
// route to the undislikePost function.
router.post("/undisLikePost", verifyToken, undisLikePost);


export default router;