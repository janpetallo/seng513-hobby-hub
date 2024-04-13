import express from "express";
import {
    addMemberToHub,
    checkValidHubName,
    createHub,
    getAllHubs,
    getHub,
    removeMemberFromHub,
    removePostFromHub
} from "../controllers/hub.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

// routing the url request for hubs to the hub controller

// route to the getAllHubs function
router.get("/getAllHubs", getAllHubs);
// route to the getHub function
router.get("/getHub/:hubName", getHub);
// route to the createHub function. Token verified before hand
router.post("/createHub", createHub);
// route to the createHub function. Token verified before hand
router.post("/checkValidHubName", checkValidHubName);
// Route to remove a post from a hub. Token verified beforehand
router.put("/removePostFromHub", removePostFromHub);
// Route to remove a member from a hub. Token verified beforehand
router.put("/removeMemberFromHub", removeMemberFromHub);
// Route to add a member to a hub. Token verified beforehand
router.put("/addMemberToHub", addMemberToHub);


export default router;