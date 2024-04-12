import mongoose from 'mongoose';
const { Schema } = mongoose;

// post schema model
const forumPostSchema = new Schema({
    userName:{
        type: String,
        required: true
    },
    hubName: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    upvote:{
        type: Number,
        default: 0
    },
    downvote:{
        type: Number,
        default: 0
    },
    img: [{
        type: String
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    usersLiked: [{
        type: Schema.Types.ObjectId,
        ref: 'User' // Reference to the user model
    }],
    usersDisliked: [{
        type: Schema.Types.ObjectId,
        ref: 'User' // Reference to the user model
    }],
});

export default mongoose.model("ForumPost", forumPostSchema)