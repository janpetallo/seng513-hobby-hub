import mongoose from 'mongoose';
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
        type:Number,
        required:true
    },
    condition:{
        type:String,
        required:true
    },
    tag:{
        type:String
    },
    location:{
        type:String,
        required:true
    }
});

export default mongoose.model("MarketPlacePost", marketPlacePostSchema)