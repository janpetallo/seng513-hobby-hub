import express from "express";
import {createPost, getAllPosts} from "../controllers/post.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

// routing the url request for posts to the post controller

// route to the createPost function. Token verified before hand
router.post("/createPost", verifyToken, createPost);
// route to the getAllPosts function. No token verification required
router.get("/getAllPosts", getAllPosts);


export default router;