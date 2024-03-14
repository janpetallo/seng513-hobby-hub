import express from "express";
import {register, login, logout} from "../controllers/auth.controller.js";

const router = express.Router();

// routing the url request for authentication to the authentication controller

// register user route
router.post("/register", register);
// login user route
router.post("/login", login);
router.post("/login", logout);


export default router;