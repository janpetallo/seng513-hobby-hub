import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
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

export default mongoose.model("Comment", commentSchema)