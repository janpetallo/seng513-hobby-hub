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
     const searchQuery = searchParams.get("query").trim().toLowerCase();
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
                    const response = await newRequest.get("/marketPlacePosts/getAllMarketPlacePosts");
                    if (response.status !== 200) {
                        throw new Error("Failed to fetch posts");
                    }
                    const postsData = response.data;
                    setPosts(postsData);
                    console.log(postsData);
                } 
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
            if (searchQuery !== '' && category === 'Hubs') {
                const newFilteredPosts = posts.filter(post =>
                    post.title?.toLowerCase().trim().includes(searchQuery) ||
                    post.description?.toLowerCase().trim().includes(searchQuery) ||
                    post.userName?.toLowerCase().trim().includes(searchQuery) ||
                    post.hubName?.toLowerCase().trim().includes(searchQuery) ||
                    post.tags?.includes(searchQuery)
                );
                setFilteredPosts(newFilteredPosts);
            } else {
                setFilteredPosts(posts);
            }
        };
        filterPosts();
    }, [searchQuery, posts, category]);

    return (
        <>
            <div className="search-posts">
                <div className="p-1">
                    {filteredPosts.length > 0 && <h3 className="page-title">{searchQuery === "" ? "Suggested Posts: ":'Posts related to "' + searchParams.get('query').trim() + '"'}</h3>}
                    {filteredPosts.length === 0 && searchQuery === "" && <h3>No posts to show</h3>}
                </div>
                <div className="content">
                    <div className="card-columns">
                        {filteredPosts.length === 0 && searchQuery !== "" && <h3>No post related to "{searchParams.get('query').trim()}"</h3>}
                        <p className="search-count p-1">Total search results: {filteredPosts.length}</p>
                        {filteredPosts.slice().reverse().map(post => (
                            <Post hubTitle={hubTitle} post={post} isPopup={false} key={post._id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchReults