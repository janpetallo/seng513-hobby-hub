import "./Comment.scss";
import React, {useState} from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

const Comment = ({ comment }) => {

    // temporary functions and variables to enable liking
    const [likedComment, setLikedComment] = useState(false);
    const [numCommentLikes, setNumCommentLikes] = useState(comment.likes);

    const toggleLikedComment = () => {
        if(!likedComment){
            setNumCommentLikes(numCommentLikes + 1);

            if(dislikedComment){
                toggleDislikedComment();
            }

        }else {
            setNumCommentLikes(numCommentLikes - 1);
        }

        setLikedComment(!likedComment);
    } ;

    // temporary functions and variables to enable disliking
    const [dislikedComment, setDislikedComment] = useState(false);
    const [numCommentDislikes, setNumCommentDislikes] = useState(comment.dislikes);
    const toggleDislikedComment = () => {
        if(!dislikedComment){
            setNumCommentDislikes(numCommentDislikes + 1);

            if(likedComment){
                toggleLikedComment();
            }

        }else {
            setNumCommentDislikes(numCommentDislikes - 1);
        }

        setDislikedComment(!dislikedComment);
    } ;


  return(
      <div className="comment">
          <div className="commentContainer">
              <div className="comment-username">
                  {comment.username}
              </div>

              <p className="comment-message">
                  {comment.message}
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