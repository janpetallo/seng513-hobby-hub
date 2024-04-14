import jwt from "jsonwebtoken";


// middleware to verify a token
export const verifyToken = (req,res,next)=>{
    // see if a user is authenticated (logged on) with it. If no user is logged on, no token
    // will exist and it will return no user authenticated
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).send("No user authenticated!");


    // verify token and if it is verified and belongs to the current logged in user
    jwt.verify(token, process.env.JWT, async (err, payload) => {
        if(err) return res.status(403).send("User is not authenticated for the current token in use!")
        req.userId = payload.id; // return the user's id from the token if it belongs to them
        next(); // Pass control to the next middleware or route handler
    });
};