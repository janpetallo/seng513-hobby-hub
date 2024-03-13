import mongoose from 'mongoose';
import MarketPlacePost from '../models/marketPlacePost.model.js';
import dotenv from "dotenv";
import seedCommentData from "./seedComment.js";

// configure dotenv to read from .env files
dotenv.config();

const data = [
    {
        username: 'user1',
        email: 'user1@email.com',
        phone: 1234567890,
        description: 'Description 1',
        price: 100,
        condition: 'New',
        tag: 'Electronics',
        location: 'Location 1'
    }
];

async function seedMarketPlacePostData() {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to the database');

        await MarketPlacePost.insertMany(data);
        console.log('Market Place Post Data seeded');

        mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error seeding Market Place Post data:', error);
    }
}


export default seedMarketPlacePostData;