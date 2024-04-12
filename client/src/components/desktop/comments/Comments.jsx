import "./Comments.scss";
import Comment from "../comment/Comment.jsx";
import PostPopup from "../../PostPopup/PostPopup.jsx";
import React, {useEffect, useState} from "react";
import CommentReply from "../../commentreply/CommentReply.jsx";
import RichTextEditor from "../../TextEditor/RichTextEditor.jsx";
import newRequest from "../../../utilities/newRequest.js";

const Comments = ( {post, isPopup} ) => {

    const maxCommentsToShow = 4;
    const [comments, setComments] = useState([]);
    const [refreshTrigger, setRefreshTrigger] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {

            try {
                const response = await newRequest.get("/comments/getAllComments");
                if (response.status !== 200) {
                    throw new Error("Failed to fetch comments");
                }
                const commentsData = response.data; // Assuming the response data is an array of comments

                // Filter the comments to include only those associated with the current post
                const postComments = commentsData.filter(comment => post.comments.includes(comment._id));

                setComments(postComments);

            } catch (err) {
            }
        }
        fetchComments();

    }, [refreshTrigger]);

    // Function to trigger a refresh
    const refreshPosts = () => {
        setRefreshTrigger(prevState => !prevState);
    };
    // console.log("post coments are " , post.comments);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return <div className="mt-3 Comments">
        {currentUser && (
            <div className="ms-4">
                <CommentReply post={post}/>
            </div>
        )}

        {isPopup && (
            comments.map(comment=>(
                    <Comment comment = {comment} key = {comment._id} />
            )))}

        {!isPopup && (
            <div>
                {comments.slice(0, maxCommentsToShow).map(comment => (
                    <Comment comment={comment} key={comment._id} />
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