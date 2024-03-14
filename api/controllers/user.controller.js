import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

// function to delete a user
export const deleteUser = async (req, res)=>{
    // get the current user
    const currentUser = await User.findById(req.params.id);

    // Get the JWT token and check if it exists
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).send("No user authenticated!");

    // verify token and if it is verified and belongs to the current user then delete the account
    jwt.verify(token, process.env.JWT, async (err, payload) => {
        if(payload.id !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to delete this account! You can only delete your own account!");
        }
        // delete user by id
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("Account deleted!");
    });
};