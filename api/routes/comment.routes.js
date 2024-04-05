import express from "express";
import {createComment} from "../controllers/comment.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

// routing the url request for comments to the comments controller

// route to the create Comment function. Token verified before hand
router.post("/createComment", verifyToken, createComment);


export default router;