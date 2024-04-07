import mongoose from 'mongoose';
const { Schema } = mongoose;

// User schema model
const userSchema = new Schema({
    // username field for the user schema
    username:{
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    birthday:{
        type:Date,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:false
    },
    marketplaceRating: {
        type: Number,
        default:0
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'ForumPost' // Reference to the post model
    }],
    hubs: [{
        type: Schema.Types.ObjectId,
        ref: 'Hub' // Reference to the post model
    }],
});


export default mongoose.model("User", userSchema)