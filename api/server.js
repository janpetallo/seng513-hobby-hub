import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js"

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

// routing end points (end of url's) to the appropriate action via the routes directory
app.use("/api/users", userRoute); // for the users


// launch the connection to the server
app.listen(8800, () => {
    connect()
    console.log("Backend Server is Running!")
})