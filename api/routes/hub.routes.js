import express from "express";
import {checkValidHubName, createHub, getAllHubs} from "../controllers/hub.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

// routing the url request for hubs to the hub controller

// route to the getAllHubs function
router.get("/getAllHubs", getAllHubs);
// route to the createHub function. Token verified before hand
router.post("/createHub", verifyToken, createHub);
// route to the createHub function. Token verified before hand
router.post("/checkValidHubName", verifyToken, checkValidHubName);


export default router;