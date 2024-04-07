import React, {useState, useEffect} from "react";
import "./SearchResults.scss"
import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import Posts from "../../components/desktop/posts/Posts.jsx";
import Post from "../../components/desktop/post/Post.jsx";
import newRequest from "../../utilities/newRequest.js";
import {useLocation} from "react-router-dom";


const SearchReults = ({hubTitle, postAll= true})  => {
     // get URL parameters
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const search = searchParams.get("query");
     const category = searchParams.get("category");

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

    }, []); // Empty dependency array ensures this effect runs only once when component mounts

   



    // return (
    //     <div className="search-results">
    //         {/* <HubMarketNavbar/> */}
    //         <Posts hubTitle={true}/>
    //     </div>
    // )

    return (
        

        <div className = "posts">
            {posts.map(post=>(
                <Post hubTitle={hubTitle} post={post} isPopup={false} key={post._id}/>
            ))}
        </div>
    );
}

export default SearchReults