import mongoose from 'mongoose';
import User from '../models/user.model.js';
import dotenv from "dotenv";
import bcrypt from 'bcryptjs';


// configure dotenv to read from .env files
dotenv.config();

const data = [
    {
        username: 'user1',
        email: 'user1@email.com',
        password: 'User1!',
        birthday: new Date("2000-05-11"),
        phone: 4031021111
    },

    {
        username: 'user2',
        email: 'user2@email.com',
        password: 'User2!',
        birthday: new Date("1990-02-12"),
        marketplaceRating: 1
    },

    {
        username: 'user3',
        email: 'user3@email.com',
        password: 'User3!',
        birthday: new Date("1923-01-03"),
    },

    {
        username: 'test',
        email: 'test@email.com',
        password: 'Test1!',
        birthday: new Date("2000-05-11"),
        phone: 4031021111
    },
];



async function seedUserData() {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to the database');

        // Hash passwords before inserting user data
        const hashedData = data.map(user => ({
            ...user,
            password: bcrypt.hashSync(user.password, 10) // Hash password with bcrypt
        }));

        await User.insertMany(hashedData);
        console.log('User Data seeded');

        mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error seeding User data:', error);
    }
}


export default seedUserData;