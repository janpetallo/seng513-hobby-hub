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
                    // set posts to empty array
                    setPosts([]);
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
        <>
            {/* temporary search results title */}
            <div className="search-reults-title">
                <h1>Search Results</h1>
            </div>
            <div className="posts">
                {filteredPosts.length > 0 && <h3 className="page-title">{searchQuery === "" ? "Suggested Posts: ":'Posts related to "' + searchQuery + '"'}</h3>}
                {filteredPosts.length === 0 && searchQuery === "" && <h3>No posts to show</h3>}
                <div className="content">
                    <div className="card-columns" overflow-y="auto">
                        {filteredPosts.length === 0 && searchQuery !== "" && <h3>No post related to "{searchQuery}"</h3>}
                        <p>Total search results: {filteredPosts.length}</p>
                        {filteredPosts.map(post => (
                            <Post hubTitle={hubTitle} post={post} isPopup={false} key={post._id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchReults