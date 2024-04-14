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
    },
    usersLiked: [{
        type: Schema.Types.ObjectId,
        ref: 'User' // Reference to the user model
    }],
    usersDisliked: [{
        type: Schema.Types.ObjectId,
        ref: 'User' // Reference to the user model
    }],

    // todo: need to reference username to be user id of comment maker, comment needs to have a post id it belongs to, need to put comment into a post, comments need proper liking and disliking
});

export default mongoose.model("Comment", commentSchema)