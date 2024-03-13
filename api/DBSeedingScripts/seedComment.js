import mongoose from 'mongoose';
import Comment from '../models/comment.model.js';
import dotenv from "dotenv";

// configure dotenv to read from .env files
dotenv.config();

const data = [
    {
        username: 'user1',
        comment: 'Wow that is incredible!',
        upvote: 12,
        downvote: 2
    },
    {
        username: 'user2',
        comment: 'Where did you find that?!!!!!!',
        upvote: 1000,
        downvote: 34
    },
    {
        username: 'user3',
        comment: 'Not a fan of that Pokemon',
        upvote: 1,
        downvote: 250
    }
];

async function seedCommentData() {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to the database');

        await Comment.insertMany(data);
        console.log('Comment Data seeded');

        mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error seeding Comment data:', error);
    }
}

export default seedCommentData;
