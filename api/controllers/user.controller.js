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