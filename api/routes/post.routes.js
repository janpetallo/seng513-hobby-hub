import express from "express";
import {tempfunction} from "../controllers/post.controller.js";

const router = express.Router();

// routing the url request for posts to the post controller

// temp function
router.get("/temp", tempfunction);


export default router;