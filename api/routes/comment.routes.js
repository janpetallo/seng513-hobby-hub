import express from "express";
import {tempfunction} from "../controllers/comment.controller.js";

const router = express.Router();

// routing the url request for comments to the comments controller

// temp function
router.get("/temp", tempfunction);


export default router;