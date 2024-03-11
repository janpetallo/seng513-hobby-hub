// This is to create schemas for the mongodb database
// 13:39 on video

import mongoose from 'mongoose';
const { Schema } = mongoose;

// User schema model
const userSchema = new Schema({
    // username field for the userschema
    username:{
        type: String,
        required:true, // making usernames required
        unique:true, // making the username unique
    },
});