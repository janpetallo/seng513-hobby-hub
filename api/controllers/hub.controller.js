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


export const getHub = async (req, res) => {
    try {
        // Extract the hub ID from the request parameters
        const { hubName } = req.params;

        // Find the hub by ID
        const hub = await Hub.findOne({ hubName: hubName });

        // Check if the hub exists
        if (!hub) {
            return res.status(404).send("Hub not found");
        }

        // If the hub exists, send it as a response
        res.status(200).json(hub);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send("Error fetching hub");
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


export const checkValidHubName = async (req, res) => {
    try {
        // Get the hub name from the request body
        const { hubName, userID } = req.body;

        // get the current user
        const currentUser = await User.findById(userID);

        // identity verification required to post on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to create a hub on this account! You can create hubs on your own account!");
        }

        // Check if the hub name already exists in the database
        const existingHub = await Hub.findOne({ hubName: hubName });

        if (existingHub) {
            return res.status(400).send("Error: Hub name already exists.");
        }

        // If the hub name doesn't exist, return success
        res.status(200).send("Hub name is valid.");

    } catch (error) {
        res.status(500).send("Error with validating a Hub Name");
        console.log(error);
    }
};

export const addMemberToHub = async (req, res) => {
    try {
        // Extract the hub ID and member ID from the request body
        const { hubID, UserID } = req.body;

        // Find the hub by ID
        const hub = await Hub.findById(hubID);

        // Check if the hub exists
        if (!hub) {
            return res.status(404).send("Hub not found");
        }

        // Check if the user ID already exists in the members array
        if (hub.members.includes(UserID)) {
            return res.status(400).send("User is already a member of this hub");
        }

        // Add the user ID to the members array
        hub.members.push(UserID);

        // Save the updated hub
        await hub.save();

        res.status(200).send("User added to hub successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding user to hub");
    }
};


