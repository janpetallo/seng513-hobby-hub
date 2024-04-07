import React, {useState, useEffect} from "react";
import "./SearchResults.scss"
import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import Posts from "../../components/desktop/posts/Posts.jsx";
import Post from "../../components/desktop/post/Post.jsx";
import newRequest from "../../utilities/newRequest.js";
import {useLocation} from "react-router-dom";


const SearchReults = ({hubTitle = true, postAll= true})  => {
     // get URL parameters
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const searchQuery = searchParams.get("query").toLowerCase();
     const category = searchParams.get("category");

    // get all posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        // Function to fetch all posts from backend API server
        const fetchPosts = async () => {
            try {
                if(postAll === true && category === 'Hubs') {
                    const response = await newRequest.get("/posts/getAllPosts");
                    if (response.status !== 200) {
                        throw new Error("Failed to fetch posts");
                    }
                    const postsData = response.data;
                    setPosts(postsData);

                } else if(postAll === true && category === 'Market') {
                    // Do nothing for now
                }
                // else{
                //     // get currentUser
                //     const currentUser = JSON.parse(localStorage.getItem("currentUser"));

                //     // get the user data
                //     const response = await newRequest.get(`/users/getUser/${currentUser._id}`);
                //     if (response.status === 200) {
                //         // get the user's post id's
                //         const userPosts = response.data.posts;

                //         // now we try to get the posts associated with all of the post id's
                //         try {
                //             const response2 = await newRequest.get(`/posts/getPostsByIds?postIDs=${userPosts.join(',')}`);
                //             setPosts(response2.data);

                //         }catch (error){
                //             console.log("Error getting all posts");
                //         }

                //     } else {
                //         console.log("Error getting user data from server");
                //     }
                // }
            } catch (error) {
                console.error(error);
            }
        };
        // Call fetchPosts function when component mounts
        fetchPosts();

    }, [postAll, category]); 
    
    // filter posts based on search query
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const filterPosts = () => {
            if (searchQuery !== '') {
                const newFilteredPosts = posts.filter(post =>
                    post.title?.toLowerCase().includes(searchQuery) ||
                    post.description?.toLowerCase().includes(searchQuery) ||
                    post.userName?.toLowerCase().includes(searchQuery) ||
                    post.hubName?.toLowerCase().includes(searchQuery) ||
                    post.tags?.includes(searchQuery)
                );
                setFilteredPosts(newFilteredPosts);
            } else {
                setFilteredPosts(posts);
            }
        };
        filterPosts();
    }, [searchQuery, posts]);

    return (
        

        <div className = "posts">
            {filteredPosts.map(post=>(
                <Post hubTitle={hubTitle} post={post} isPopup={false} key={post._id}/>
            ))}
        </div>
    );
}

export default SearchReults