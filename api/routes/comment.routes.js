import express from "express";
import {createComment, getAllComments} from "../controllers/comment.controller.js";
import {verifyToken} from "../middleware/jwt.js";


const router = express.Router();

// routing the url request for comments to the comments controller

// route to the create Comment function. Token verified before hand
router.post("/createComment", verifyToken, createComment);
// route to the getAllPosts function. No token verification required
router.get("/getAllComments", getAllComments);


export default router;