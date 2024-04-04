import express from "express";
import {getAllHubs} from "../controllers/hub.controller.js";

const router = express.Router();

// routing the url request for hubs to the hub controller

// route to the getAllHubs function
router.get("/getAllHubs", getAllHubs);


export default router;