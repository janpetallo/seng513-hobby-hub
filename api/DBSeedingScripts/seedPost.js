import mongoose from 'mongoose';
import ForumPost from '../models/post.model.js';
import dotenv from "dotenv";
import seedCommentData from "./seedComment.js";

// configure dotenv to read from .env files
dotenv.config();

const data = [
    {
        username: 'user1',
        hub: "shroom hunters",
        title: 'Title 1',
        description: 'Description 1',
        upvote: 10,
        downvote: 2
    },
    {
        username: 'user2',
        hub: "pokemon catchers",
        title: 'Title 2',
        description: 'Description 2',
        upvote: 5,
        downvote: 0
    },
    {
        username: 'user3',
        hub: "gaming legends",
        title: 'Title 3',
        description: 'Description 3',
        upvote: 15,
        downvote: 1
    }
];

async function seedForumPostData() {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to the database');

        await ForumPost.insertMany(data);
        console.log('Forum Post Data seeded');

        mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error seeding Forum Post data:', error);
    }
}

export default seedForumPostData;