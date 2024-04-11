import "./posts.scss";
import Post from "../post/Post.jsx";
import {useEffect, useState} from "react";
import newRequest from "../../../utilities/newRequest.js";

// if postIDs =! null then we get posts specified by the id
const Posts = ({hubTitle, postAll= true, showKebab, hubPosts = false, hubName}) =>{
    // Post data
    const [posts, setPosts] = useState([]);
    const [moderators, setModerators] = useState([]);


    useEffect(() => {

        // Function to fetch all posts from backend API server
        const fetchPosts = async () => {
            try {
                if(postAll === true) {
                    const response = await newRequest.get("/posts/getAllPosts");
                    if (response.status !== 200) {
                        throw new Error("Failed to fetch posts");
                    }
                    const postsData = response.data;
                    setPosts(postsData);

                }else{
                    // if hubposts are true then we will get the posts for the hub
                    if(hubPosts === true){
                    // get the hub info
                        try {
                            const response = await newRequest.get(`/hubs/getHub/${hubName}`);

                            if (response.status !== 200) {
                                throw new Error(`Failed to fetch hub data. Status: ${response.status}`);
                            } else {
                                // set moderators of the hub
                                setModerators(response.data.moderators);

                                // get the posts from this hub
                                // now we try to get the posts associated with all of the post id's
                                try {
                                    const response2 = await newRequest.get(`/posts/getPostsByIds?postIDs=${response.data.posts.join(',')}`);
                                    setPosts(response2.data);

                                } catch (error) {
                                    console.log("Error getting all posts");
                                }
                            }
                        } catch (error) {
                            // upon error log the error and navigate back home
                            console.log(error);
                            navigate("/");
                        }

                    // otherwise get the posts for the current user
                    }else {
                        // get currentUser
                        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

                        // get the user data
                        const response = await newRequest.get(`/users/getUser/${currentUser._id}`);
                        if (response.status === 200) {
                            // get the user's post id's
                            const userPosts = response.data.posts;


                            // now we try to get the posts associated with all of the post id's
                            try {
                                const response2 = await newRequest.get(`/posts/getPostsByIds?postIDs=${userPosts.join(',')}`);
                                setPosts(response2.data);

                            } catch (error) {
                                console.log("Error getting all posts");
                            }

                        } else {
                            console.log("Error getting user data from server");
                        }
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        // Call fetchPosts function when component mounts
        fetchPosts();

    }, []); // Empty dependency array ensures this effect runs only once when component mounts


    return (
        <div className = "posts">
            {posts.slice().reverse().map(post => (
                <Post hubTitle={hubTitle} post={post} isPopup={false} key={post._id} showKebab={showKebab} moderators={moderators}/>
            ))}
        </div>
    );
};

export default Posts;
