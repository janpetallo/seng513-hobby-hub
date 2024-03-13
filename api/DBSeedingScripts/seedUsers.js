import mongoose from 'mongoose';
import User from '../models/user.model.js';
import dotenv from "dotenv";
import seedCommentData from "./seedComment.js";

// configure dotenv to read from .env files
dotenv.config();

const data = [
    {
        username: 'user1',
        email: 'user1@email.com',
        password: 'user1pw',
        birthday: new Date("2000-05-11"),
        phone: 4031021111
    },

    {
        username: 'user2',
        email: 'user2@email.com',
        password: 'user2pw',
        birthday: new Date("1990-02-12"),
        marketplaceRating: 1
    },

    {
        username: 'user3',
        email: 'user3@email.com',
        password: 'user3pw',
        birthday: new Date("1923-01-03"),
    }
];



async function seedUserData() {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to the database');

        await User.insertMany(data);
        console.log('User Data seeded');

        mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error seeding User data:', error);
    }
}


export default seedUserData;