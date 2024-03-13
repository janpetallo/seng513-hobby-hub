import mongoose from 'mongoose';
import Hub from '../models/hub.model.js';
import dotenv from "dotenv";
import seedCommentData from "./seedComment.js";

// configure dot env to read from .env files
dotenv.config();

const data = [
    {
        title: 'title1',
        description: 'Sample description for user1',
        moderators: [], // Empty array for now
        users: [], // Empty array for now
        rules: 'Sample rules for hub1',
        resources: 'Sample resources for hub1',
        visibility: 'public' // Using string value
    },
    {
        title: 'title2',
        description: 'Sample description for user2',
        moderators: [],
        users: [],
        rules: 'Sample rules for hub2',
        resources: 'Sample resources for hub2',
        visibility: 'public'
    }
];

async function seedHubData() {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to the database');

        await Hub.insertMany(data);
        console.log('Hub Data seeded');

        mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error seeding Hub data:', error);
    }
}

export default seedHubData;