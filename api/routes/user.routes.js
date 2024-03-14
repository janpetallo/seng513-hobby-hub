import express from "express";
import {deleteUser} from "../controllers/user.controller.js";

const router = express.Router();

// routing the url request for user to the user controller

// user delete route
router.delete("/:id", deleteUser);


export default router;