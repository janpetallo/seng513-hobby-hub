import React, {useEffect, useState} from "react";
import Posts from "../../components/desktop/posts/Posts.jsx";
import Post from "../../components/desktop/post/Post.jsx";
import newRequest from "../../utilities/newRequest.js";
import "../../components/desktop/posts/posts.scss";



const MyPosts = () => {

    const [userName, setUserName] = useState("");

    // check if the user previously liked or disliked the post
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            setUserName(currentUser.username);
        }
    }, []);

   //get all posts and filter them by the current user
   const [posts, setPosts] = useState([]);
   useEffect(() => {
       const fetchPosts = async () => {
           try {
               const response = await newRequest.get("/posts/getAllPosts");
               if (response.status !== 200) {
                   throw new Error("Failed to fetch posts");
               }
               const postsData = response.data;
               // filter posts by the current user
               const currentUser = JSON.parse(localStorage.getItem("currentUser"));
               const userPosts = postsData.filter(post => post.userName === currentUser.username);

               setPosts(userPosts);
               console.log(posts);
               // console.log(postsData);
           } catch (error) {
               console.error(error);
           }
       };
       fetchPosts();
   }, []);



    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center">
                {userName ? (
                    <>
                        <h1 className="pt-3 ps-2 pe-2">{userName}'s Posts</h1>
                        <h6 className="ps-2 pe-2">View all your posts here!</h6>
                    </>
                ) : (
                    <>
                        <h1 className="pt-3 ps-2 pe-2">You Must Be Logged In to See Your Posts</h1>
                    </>
                )}
            </div>
            <hr/>
            {/* {userName ? (<Posts hubTitle={true} postAll={false}/>) : null} */}
            <div className="posts">
                {posts.slice().reverse().map(post => (
                    <Post hubTitle={true} post={post} isPopup={false} key={post._id} />
                ))}
            </div>

        </>
    )
}

export default MyPosts
