import express from "express";
import mongoose, {mongo} from "mongoose";
import dotenv from "dotenv";

const app = express()
// env function to read from .env files
dotenv.config();
mongoose.set('strictQuery', true)

// connection function
const connect = async () => {
    try {
        // connect to mongodb with the credentials from the .env file
        await mongoose.connect(process.env.MONGO);
        console.log("Successful connection to mongodb!")
    } catch (error) {
        console.log(error);
    }
};

// when the backend server launches, log that it has started
app.listen(8800, () => {
    connect()
    console.log("Backend Server is Running!")
})