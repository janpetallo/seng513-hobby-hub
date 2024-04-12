// temp function
import User from "../models/user.model.js";
import MarketPost from "../models/marketPlacePost.model.js";


export const createMarketPlacePost = async (req, res) => {
    try {
        // get the current user
        const currentUser = await User.findById(req.body.userID);

        // identity verification required to post on your own account
        if(req.userId !== currentUser._id.toString()){
            return res.status(403).send("Error you are not authorized to make a marketplace Post on this account! You can Post on your own account!");
        }

        // Create a new object without the userId field
        const marketPlacePostData = { ...req.body };
        delete marketPlacePostData.userID;

        // Creating the new marketplace post based on the request sent
        const newMarketPost = new MarketPost(marketPlacePostData);
        // send new market post to the database
        await newMarketPost.save();

        // Add the post's ID to the user's posts array
        currentUser.marketPosts.push(newMarketPost._id);
        await currentUser.save();


        res.status(201).send("Created new Market Post successfully!");

    } catch (error) {
        res.status(500).send("Error with creating a Market Post");
        console.log(error);
    }
};


export const getAllMarketPlacePosts = async (req, res) => {
    try {
        // Fetch all posts from MongoDB
        const allMarketPosts = await MarketPost.find();
        // Send the fetched posts as response
        res.status(200).json(allMarketPosts);
    } catch (error) {
        res.status(500).send("Error Fetching all Market Posts");
        console.log(error);
    }
};


export const getMarketPostsByIds = async (req, res) => {
    try {
        const marketPostIDs = req.query.marketPostIDs.split(',');
        // Fetch posts based on the provided market post IDs
        const marketPosts = await MarketPost.find({ _id: { $in: marketPostIDs } });
        res.status(200).json(marketPosts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching posts");
    }
};