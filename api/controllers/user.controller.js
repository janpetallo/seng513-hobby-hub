import User from "../models/user.model.js";

// function to delete a user
export const deleteUser = async (req, res)=>{
    // get the current user
    const currentUser = await User.findById(req.params.id);

    if(req.userId !== currentUser._id.toString()){
        return res.status(403).send("Error you are not authorized to delete this account! You can only delete your own account!");
    }
    // delete user by id
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Account deleted!");
};