import "./posts.scss";
import Post from "../post/Post.jsx";
import {useEffect, useState} from "react";
import newRequest from "../../../utilities/newRequest.js";

const Posts = ({hubTitle}) =>{
    // Post data
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Function to fetch all posts from backend API server
        const fetchPosts = async () => {
            try {
                const response = await newRequest.get("/posts/getAllPosts");
                if (response.status !== 200) {
                    throw new Error("Failed to fetch posts");
                }
                const postsData = response.data;
                setPosts(postsData);

                console.log(postsData);
                console.log(posts);

            } catch (error) {
                console.error(error);
            }
        };
        // Call fetchPosts function when component mounts
        fetchPosts();

    }, []); // Empty dependency array ensures this effect runs only once when component mounts


    return <div className = "posts">
        {posts.map(post=>(
            <Post hubTitle={hubTitle} post={post} isPopup={false} key={post.id}/>
        ))}
        </div>;
};

export default Posts;
