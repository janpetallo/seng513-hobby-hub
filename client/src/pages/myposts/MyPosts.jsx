import React from "react";
import Posts from "../../components/desktop/posts/Posts.jsx";

const MyPosts = () => {

    const username = "BimmerGuy"

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="pt-3 ps-2 pe-2">{username}'s Posts</h1>
                <h6 className="ps-2 pe-2!">View all your posts here!</h6>
            </div>
            <hr/>
            <Posts hubTitle={true}/>
        </>
    )
}

export default MyPosts
