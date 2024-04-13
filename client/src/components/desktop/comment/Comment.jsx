import "./Comment.scss";
import React, {useEffect, useState} from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import newRequest from "../../../utilities/newRequest.js";

const Comment = ({ comment }) => {

    // temporary functions and variables to enable liking
    const [likedComment, setLikedComment] = useState(false);
    const [numCommentLikes, setNumCommentLikes] = useState(comment.upvote);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            // Check if the user has already liked the post
            if (comment.usersLiked.includes(currentUser._id)) {
                setLikedComment(true);
            }
            // Check if the user has already disliked the post
            if (comment.usersDisliked.includes(currentUser._id)) {
                setDislikedComment(true);
            }
            // check if the current user is a moderator
            // if(moderators.includes(currentUser._id)){
            //     setIsAdmin(true);
            // }
        }
    }, [comment.usersLiked, comment.usersDisliked]);


    const toggleLikedComment = async () => {
        const currentUser = (JSON.parse(localStorage.getItem("currentUser")));

        // only allow this function to work when the user is logged in
        if(currentUser !== null) {
            const userID = currentUser._id;

            let updatedLikes = numCommentLikes;

            // if the post was not liked before then we will increment the likes
            if (!likedComment) {
                try {
                    // Call the likePost endpoint to increment the likes
                    const response = await newRequest.post(`/comments/likeComment/${comment._id}`, {userID});
                    // Update the number of likes based on the response
                    updatedLikes = response.data.upvote;
                } catch (error) {
                    console.error(error);
                }

                if (dislikedComment) {
                    toggleDislikedComment();
                }

                // if the post was already liked before then we will decrement the likes
            } else {
                try {
                    const response = await newRequest.post(`/comments/unlikeComment/${comment._id}`, {userID});
                    updatedLikes = response.data.upvote;
                } catch (error) {
                    console.error(error);
                }
            }

            // Update the state with the new number of likes
            setNumCommentLikes(updatedLikes);
            setLikedComment(!likedComment);
        }
    } ;
    // temporary functions and variables to enable disliking
    const [dislikedComment, setDislikedComment] = useState(false);
    const [numCommentDislikes, setNumCommentDislikes] = useState(comment.downvote);
    const toggleDislikedComment = async () => {
        const currentUser = (JSON.parse(localStorage.getItem("currentUser")));

        // only allow this function to work when the user is logged in
        if(currentUser !== null ) {
            const userID = currentUser._id;

            // variable to hold the number of dislikes
            let updatedDisLikes = numCommentDislikes;

            // if the post was not disliked before then we will increment the dislikes
            if (!dislikedComment) {
                try {
                    // Call the disLikePost endpoint to increment the dislikes
                    const response = await newRequest.post(`/comments/dislikeComment/${comment._id}`, {userID});
                    // Update the number of dislikes based on the response
                    updatedDisLikes = response.data.downvote;
                } catch (error) {
                    console.error(error);
                }

                // if the post was not disliked before but was actually liked, then we will toggled the likes off as well
                if (likedComment) {
                    toggleLikedComment();
                }


                // if the post was already disliked before then we will decrement the dislikes
            } else {
                try {
                    // Call the undisLikePost endpoint to deccrement the dislikes
                    const response = await newRequest.post(`/comments/undislikeComment/${comment._id}`, {userID});
                    // Update the number of dislikes based on the response
                    updatedDisLikes = response.data.downvote;
                } catch (error) {
                    console.error(error);
                }
            }

            // Update the state with the new number of dislikes
            setNumCommentDislikes(updatedDisLikes);
            setDislikedComment(!dislikedComment);
        }
    } ;


  return(
      <div className="comment">
          <div className="commentContainer">
              <div className="comment-username">
                  {comment.username}
              </div>

              <p className="comment-message">
                  <div className="postDescription" dangerouslySetInnerHTML={{ __html: comment.comment }} />
              </p>

              <div className="comment-Info">
                  <div className="comment_liked">
                      {likedComment ? <FaThumbsUp className="comment_liked_thumbs_up" onClick={toggleLikedComment}/> : <FaRegThumbsUp className="comment_thumbs_up" onClick={toggleLikedComment}/>}
                      {numCommentLikes}
                  </div>

                  <div className="comment_dislike">
                      {dislikedComment ? <FaThumbsDown className="comment_dislike_thumbs_down"  onClick={toggleDislikedComment}/> : <FaRegThumbsDown className="comment_thumbs_down" onClick={toggleDislikedComment}/>}
                      {numCommentDislikes}
                  </div>
              </div>
          </div>
      </div>

  );
};

export default Comment;