import express from "express";
import {
    createComment,
    dislikeComment,
    getAllComments,
    likeComment, undislikeComment,
    unlikeComment
} from "../controllers/comment.controller.js";
import {verifyToken} from "../middleware/jwt.js";
import {deletePostById, disLikePost, likePost, undisLikePost, unlikePost} from "../controllers/post.controller.js";


const router = express.Router();

// routing the url request for comments to the comments controller

// route to the create Comment function. Token verified before hand
router.post("/createComment", verifyToken, createComment);
// route to the getAllPosts function. No token verification required
router.get("/getAllComments", getAllComments);

router.post("/likeComment/:commentId", verifyToken, likeComment);
// route to the unlikePost function.
router.post("/unlikeComment/:commentId", verifyToken, unlikeComment);
// // route to the dislikePost function.
router.post("/dislikeComment/:commentId", verifyToken, dislikeComment);
// // route to the undislikePost function.
router.post("/undislikeComment/:commentId", verifyToken, undislikeComment);
// // Route to delete a post by its ID. Token verified beforehand
// router.delete("/deletePost/:postId", verifyToken, deletePostById);


export default router;