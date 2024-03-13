import express from "express";
import {tempfunction} from "../controllers/marketPlacePost.controller.js";

const router = express.Router();

// routing the url request for marketplace posts to the marketplace controller

// temp function
router.get("/temp", tempfunction);


export default router;