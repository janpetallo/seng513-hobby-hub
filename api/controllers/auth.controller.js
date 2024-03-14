import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// register function
export const register = async (req, res)=>{
    try{
        // hash the password
        const encryptedPWD = bcrypt.hashSync(req.body.password, 9);

        // generate the birthdate as a date type
        const updatedBirthday = new Date(req.body.birthday);

        // creating the new user based on the request sent
        const newUser = new User({
            // take the user parameters from the request body
            ...req.body,
            // update the user with an encrypted password
            password: encryptedPWD,
            // update the birthdate with a date type birthday
            birthday: updatedBirthday,
        })
        // send new user to the database
        await newUser.save();
        res.status(201).send("Created new user successfully!");

    }catch (error){
        res.status(500).send("Error with registering");
        console.log(error);
    }
};


// login function
export const login = async (req, res)=>{
    try{
        // get the user from the db based on the username the user has entered
        const user = await User.findOne({username: req.body.username});
        // check if the user exists, if not print error
        if(!user) return res.status(404).send("Error: Username not found!");


        // if the user does exist, then we will check if the password is correct
        const validPWD = bcrypt.compareSync(req.body.password, user.password);
        // display error if password that was entered is invalid
        if(!validPWD) return res.status(400).send("Invalid Password or Username!");


        // create a json web token for the user
        const token = jwt.sign({
            // assign the user info to the token
            id: user._id, // mongodb document id
        }, process.env.JWT);


        // remove the password before sending the user object back
        const {password, ...info} = user._doc;
        // if everything was correct then send the user info (everything except the password) back along with the cookie
        // httpOnly means only http request can be used
        res.cookie("accessToken", token, {httpOnly:true}).status(200).send(info)

    }catch (error){
        res.status(500).send("Error with login");
    }
};


// logout function
export const logout = async (req, res)=>{
    try{

    }catch (error){
        res.status(500).send("Error with logout");
    }
};