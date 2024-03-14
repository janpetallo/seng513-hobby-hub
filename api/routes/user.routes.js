import express from "express";
import {deleteUser} from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

// routing the url request for user to the user controller

// user delete route -> the function will verify the token before heading to the delete user controller
router.delete("/:id",verifyToken, deleteUser);


export default router;