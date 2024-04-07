import mongoose from 'mongoose';
const { Schema } = mongoose;

const hubSchema = new Schema({
    hubName: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    hubOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model
    },
    moderators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model
    }],
    members: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Reference to the User model
        }],
        default: [] // Set default value to an empty array
    },
    rules: {
        type: String,
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'public'
    },
    resources: {
        type: String,
    }
});

export default mongoose.model("Hub", hubSchema);
