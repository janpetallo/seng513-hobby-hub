import Hub from '../models/hub.model.js';
import User from "../models/user.model.js";

export const getAllHubs = async (req, res) => {
    try {
        // Fetch all hubs from the database
        const hubs = await Hub.find();
        res.status(200).json(hubs);
    } catch (error) {
        res.status(500).send("Error fetching hubs");
        console.error(error);
    }
};


export const createHub = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to post on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to create a hub on this account! You can create hubs on your own account!");
        }

        // Create a new object without the userId field
        const hubData = { ...req.body };
        delete hubData.userID;

        // Creating the new hub based on the request sent
        const newHub = new Hub(hubData);
        // send new hub to the database
        await newHub.save();

        // Add the hub's ID to the user's hubs array
        currentUser.hubs.push(newHub._id);
        await currentUser.save();

        res.status(201).send("Created new Hub successfully!");

    } catch (error) {
        res.status(500).send("Error with creating a Hub");
        console.log(error);
    }
};