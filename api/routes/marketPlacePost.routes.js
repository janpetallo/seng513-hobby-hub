import express from "express";
import {
    createMarketPlacePost,
    getAllMarketPlacePosts,
    getMarketPostsByIds
} from "../controllers/marketPlacePost.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

// routing the url request for marketplace posts to the marketplace controller

// route to the createMarketPlacePost function. Token verified beforehand
router.post("/createMarketPlacePost", verifyToken, createMarketPlacePost);
// route to the getAllMarketPlacePosts function. No token verification required
router.get("/getAllMarketPlacePosts", getAllMarketPlacePosts);
// route to the getMarketPostsByIds function.
router.get("/getMarketPostsByIds", verifyToken, getMarketPostsByIds);

export default router;