import express from "express";
import {tempfunction} from "../controllers/hub.controller.js";

const router = express.Router();

// routing the url request for hubs to the hub controller

// temp function
router.get("/temp", tempfunction);


export default router;