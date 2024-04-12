import express from "express";
import {createMarketPlacePost} from "../controllers/marketPlacePost.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

// routing the url request for marketplace posts to the marketplace controller

// route to the createMarketPlacePost function. Token verified beforehand
router.post("/createMarketPlacePost", verifyToken, createMarketPlacePost);


export default router;