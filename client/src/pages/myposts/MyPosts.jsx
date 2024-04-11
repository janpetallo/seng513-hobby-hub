import React, {useEffect, useState} from "react";
import Posts from "../../components/desktop/posts/Posts.jsx";
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
            {userName ? (<Posts hubTitle={true} postAll={false}/>) : null}

        </>
    )
}

export default MyPosts
