import React, {useEffect, useState} from "react";
import Posts from "../../components/desktop/posts/Posts.jsx";
import newRequest from "../../utilities/newRequest.js";


const MyPosts = () => {

    const [userName, setUserName] = useState("");

    // check if the user previously liked or disliked the post
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            setUserName(currentUser.username);
        }
    }, []);

// todo: make a post controller that takes a list containing one or more post id's and returns them


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
            {userName ? (<Posts hubTitle={true}/>) : null}
        </>
    )
}

export default MyPosts
