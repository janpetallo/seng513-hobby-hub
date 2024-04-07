import "./Comments.scss";
import Comment from "../comment/Comment.jsx";
import PostPopup from "../../PostPopup/PostPopup.jsx";
import React from "react";
import CommentReply from "../../commentreply/CommentReply.jsx";
import RichTextEditor from "../../TextEditor/RichTextEditor.jsx";

const Comments = ( {post, isPopup} ) => {
    // Temporary Comment Data
    const comments = [
        {
            id: 1,
            message: "Wow nice car",
            username: "F8X Fan",
            userId: 10,
            likes: 1001,
            dislikes: 3,
        },
        {
            id: 2,
            message: "Looks good!",
            username: "Bob",
            userId: 11,
            likes: 23,
            dislikes: 0,
        },
        {
            id: 3,
            message: "Looks good!",
            username: "Bob",
            userId: 11,
            likes: 23,
            dislikes: 0,
        },
        {
            id: 4,
            message: "Looks good!",
            username: "Bob",
            userId: 11,
            likes: 23,
            dislikes: 0,
        },
        {
            id: 5,
            message: "Looks good!",
            username: "Bob",
            userId: 11,
            likes: 23,
            dislikes: 0,
        },
        {
            id: 6,
            message: "Looks good!",
            username: "Bob",
            userId: 11,
            likes: 23,
            dislikes: 0,
        },
    ];

    const maxCommentsToShow = 4;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return <div className="mt-3 Comments">
        {currentUser && (
            <div className="ms-4">
                <CommentReply/>
            </div>
        )}

        {isPopup && (
            comments.map(comment=>(
                    <Comment comment = {comment} key = {comment.id} />
            )))}

        {!isPopup && (
            <div>
                {comments.slice(0, maxCommentsToShow).map(comment => (
                    <Comment comment={comment} key={comment.id} />
                ))}

                {comments.length > maxCommentsToShow && (
                    <div className="ms-4">
                        <PostPopup
                            title={`View more comments...`}
                            hubName={post.hubName}
                            content={post}
                            owner={post.postOwner}
                        />
                    </div>
                )}
            </div>
        )}
    </div>;
};

export default Comments;