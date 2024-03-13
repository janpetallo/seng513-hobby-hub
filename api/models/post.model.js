import mongoose from 'mongoose';
const { Schema } = mongoose;

// post schema model
const forumPostSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    hub: {
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
    }
});

export default mongoose.model("ForumPost", forumPostSchema)