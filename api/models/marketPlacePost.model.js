import mongoose from 'mongoose';
import * as stream from "stream";
const { Schema } = mongoose;

const marketPlacePostSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: Number
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    condition:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    img: [{
        type: String
    }],
    title:{
        type:String,
        required:true
    },
});

export default mongoose.model("MarketPlacePost", marketPlacePostSchema)