import Hub from '../models/hub.model.js';

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
