import React, {useState, useEffect} from "react";
import "./SearchResults.scss"
import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import Posts from "../../components/desktop/posts/Posts.jsx";
import Post from "../../components/desktop/post/Post.jsx";
import ItemCard from "../../components/marketplace/itemcard/ItemCard.jsx";
import newRequest from "../../utilities/newRequest.js";
import {useLocation} from "react-router-dom";


const SearchReults = ({hubTitle = true, postAll= true})  => {
     // get URL parameters
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const searchQuery = searchParams.get("query").trim().toLowerCase();
     const category = searchParams.get("category");

    // get all posts
    const [hubsPosts, setHubPosts] = useState([]);
    const [marketPosts, setMarketPosts] = useState([]);

    useEffect(() => {

        // Function to fetch all posts from backend API server
        const fetchPosts = async () => {
            try {
                if(postAll === true && category === 'Hubs') {
                    const response = await newRequest.get("/posts/getAllPosts");
                    if (response.status !== 200) {
                        throw new Error("Failed to fetch posts");
                    }
                    const hubPostsData = response.data;
                    setHubPosts(hubPostsData);
                    console.log(hubPostsData);

                } else if(postAll === true && category === 'Market') {
                    const response = await newRequest.get("/marketPlacePosts/getAllMarketPlacePosts");
                    if (response.status !== 200) {
                        throw new Error("Failed to fetch posts");
                    }
                    const marketPostsData = response.data;
                    setMarketPosts(marketPostsData);
                    console.log(marketPostsData);
                } 
            } catch (error) {
                console.error(error);
            }
        };
        // Call fetchPosts function when component mounts
        fetchPosts();

    }, [postAll, category]); 
    
    // filter posts based on search query
    const [filteredHubPosts, setFilteredHubPosts] = useState([]);
    const [filteredMarketPosts, setFilteredMarketPosts] = useState([]);

    useEffect(() => {
        const filterPosts = () => {
            if (searchQuery !== '' && category === 'Hubs') {
                console.log("Filtering Hubs")
                const newFilteredPosts = hubsPosts.filter(post =>
                    post.title?.toLowerCase().trim().includes(searchQuery) ||
                    post.description?.toLowerCase().trim().includes(searchQuery) ||
                    post.userName?.toLowerCase().trim().includes(searchQuery) ||
                    post.hubName?.toLowerCase().trim().includes(searchQuery)
                );
                setFilteredHubPosts(newFilteredPosts);
            } else if (searchQuery !== '' && category === 'Market') {
                console.log("Filtering Market")
                const newFilteredPosts = marketPosts.filter(post =>
                    post.title?.toLowerCase().trim().includes(searchQuery) ||
                    post.description?.toLowerCase().trim().includes(searchQuery) ||
                    post.username?.toLowerCase().trim().includes(searchQuery) ||
                    post.category?.toLowerCase().trim().includes(searchQuery) ||
                    post.location?.toLowerCase().trim().includes(searchQuery) ||
                    post.condition?.toLowerCase().trim().includes(searchQuery) ||
                    post.email?.toLowerCase().trim().includes(searchQuery)
                );
                setFilteredMarketPosts(newFilteredPosts);
            } else if (searchQuery === '' && category === 'Hubs') {
                setFilteredHubPosts(hubsPosts);
            } else if (searchQuery === '' && category === 'Market') {
                setFilteredMarketPosts(marketPosts);
            }
        };
        filterPosts();
    }, [searchQuery, category, hubsPosts, marketPosts]);

    return (
        <>
            <div className="search-posts">
                <div className="p-1">
                    {category === 'Hubs' && (filteredHubPosts.length > 0) && <h3 className="page-title">{searchQuery === "" ? "Suggested Posts: ":'Posts related to "' + searchParams.get('query').trim() + '"'}</h3>}
                    {category === 'Market' && (filteredMarketPosts.length > 0) && <h3 className="page-title">{searchQuery === "" ? "Suggested Items: ":'Items related to "' + searchParams.get('query').trim() + '"'}</h3>}
                    {category === 'Hubs' && (filteredHubPosts.length === 0) && searchQuery === "" && <h3>No posts to show</h3>}
                    {category === 'Market' && (filteredMarketPosts.length === 0) && searchQuery === "" && <h3>No items to show</h3>}
                </div>
                <div className="content">
                    <div className="card-columns">
                        {category === 'Hubs' &&  filteredHubPosts.length === 0 && searchQuery !== "" && <h3>No post related to "{searchParams.get('query').trim()}"</h3>}
                        {category === 'Market' && filteredMarketPosts.length === 0 && searchQuery !== "" && <h3>No item related to "{searchParams.get('query').trim()}"</h3>}
                        {category === 'Hubs' && <p className="search-count p-1">Total search results: {filteredHubPosts.length}</p> }
                        {category === 'Market' && <p className="search-count p-1">Total search results: {filteredMarketPosts.length}</p> } 
{
                        console.log(category)
}
                        {category === 'Hubs' ? 
                            console.log("Hubs mapping") ||
                            filteredHubPosts.slice().reverse().map(post => (
                                <Post hubTitle={hubTitle} post={post} isPopup={false} key={post._id} />
                            )) :
                            console.log("Market mapping") ||
                            <div className="item-card-wrapper">
                                {filteredMarketPosts.slice().reverse().map(post => (
                                    <ItemCard item={post} key={post._id} />
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchReults