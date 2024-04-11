import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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

export const getUser = async (req, res)=>{
    try {

        // get the current user
        const currentUser = await User.findById(req.params.id);

        if (req.userId !== currentUser._id.toString()) {
            return res.status(403).send("Error you are not authorized to get this account! You can only get your own account!");
        }

        res.status(200).json(currentUser);

    }catch (error){
        res.status(500).send("error: unable to get specified account");
    }
};


export const editUser = async (req, res)=>{
    try {
        console.log("reached inside edit user");
        // get the current user
        const currentUser = await User.findById(req.params.id);

        if (req.userId !== currentUser._id.toString()) {
            return res.status(403).send("Error you are not authorized to edit this account! You can only edit your own account!");
        }

        if (req.body.email) {
            currentUser.email = req.body.email;
        }
        if (req.body.password) {
            const encryptedPWD = bcrypt.hashSync(req.body.password, 9);
            currentUser.password = encryptedPWD;
        }
        if (req.body.phone) {
            currentUser.phone = req.body.phone;
        }

        await currentUser.save();

        res.status(200).json(currentUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error: Unable to edit user");
    }
};