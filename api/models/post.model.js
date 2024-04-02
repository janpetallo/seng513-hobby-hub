import mongoose from 'mongoose';
const { Schema } = mongoose;

// post schema model
const forumPostSchema = new Schema({
    username:{
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: false //todo: make this true once final model is completed
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
});

export default mongoose.model("ForumPost", forumPostSchema)