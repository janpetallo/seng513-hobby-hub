import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js"
import commentRoute from "./routes/comment.routes.js"
import hubRoute from "./routes/hub.routes.js"
import marketPlacePostRoutes from "./routes/marketPlacePost.routes.js";
import postRoutes from "./routes/post.routes.js";
import authRoute from "./routes/auth.route.js";

const app = express()
// env function to read from .env files
dotenv.config();
mongoose.set('strictQuery', true);

// connection function
const connect = async () => {
    try {
        // connect to mongodb with the credentials from the .env file
        await mongoose.connect(process.env.MONGO);
        console.log("Successful connection to mongodb!");
    } catch (error) {
        console.log(error);
    }
};

// allow the app to take json input
app.use(express.json());


// essentially the flow of requests goes like this: url -> server.js -> routes -> controller

// routing end points (end of url's) to the appropriate action via the routes directory
app.use("/api/auth", authRoute); // for the authentication
app.use("/api/comments", commentRoute); // for the comments
app.use("/api/hubs", hubRoute); // for the hubs
app.use("/api/marketPlacePosts", marketPlacePostRoutes); // for the marketplace posts
app.use("/api/posts", postRoutes); // for the posts
app.use("/api/users", userRoute); // for the users


// launch the connection to the server and make it listen to port 8800
app.listen(8800, () => {
    connect();
    console.log("Backend Server is Running!");
});