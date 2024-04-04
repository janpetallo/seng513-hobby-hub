import "./post.scss";
import ImageModal from "./ImageModal.jsx";
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import Comments from "../comments/Comments.jsx";
import PostPopup from "../../PostPopup/PostPopup.jsx";
import newRequest from "../../../utilities/newRequest.js";



const Post = ({ post, isPopup, hubTitle }) => {
    // to control image pop up when clicked
    const [showModal, setShowModal] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState("");

    const toggleModal = (imageUrl) => {
        setShowModal(!showModal);
        setModalImageUrl(imageUrl);
    };


    // temporary functions and variables to enable liking
    const [liked, setLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(post.upvote);

    const toggleLiked = async () => {
        let updatedLikes = numLikes;
        if(!liked){
            try {
                // Call the likePost endpoint to increment the likes
                const response = await newRequest.post(`/posts/likePost/${post._id}`);
                // Update the number of likes based on the response
                updatedLikes = response.data.upvote;
            } catch (error) {
                console.error(error);
            }



            if(disliked){
                toggleDisliked();
            }



        }else {
            setNumLikes(numLikes - 1);
        }

        // Update the state with the new number of likes
        setNumLikes(updatedLikes);
        setLiked(!liked);
    } ;

    // temporary functions and variables to enable disliking
    const [disliked, setDisliked] = useState(false);
    const [numDislikes, setNumDislikes] = useState(post.downvote);
    const toggleDisliked = () => {
        if(!disliked){
            setNumDislikes(numDislikes + 1);

            if(liked){
                toggleLiked();
            }

        }else {
            setNumDislikes(numDislikes - 1);
        }

        setDisliked(!disliked);
    } ;

    // temporary functions and variables to enable commenting

    // Todo: This one is to control if you have commented or not, fix this so later it only triggers if you post a comment
    const [commented, setCommented] = useState(false);
    const[openComment, setOpenComment] = useState(false);
    const [numComments, setNumComments] = useState(post.comments.length);
    const toggleComment = () => {
        if(!commented){
            setNumComments(numComments + 1);
        }else {
            setNumComments(numComments - 1);
        }

        setCommented(!commented);
        setOpenComment(!openComment);
    } ;

    const maxLength = 350;

    return (
        <div className = "post">
            <div className="postContainer">

                <div className="postHeading">

                    {hubTitle ? (
                        <div className="post_hubName">
                            Hub: {post.hubName}
                        </div>
                    ) : null}

                    <div className="postTitle">
                        {!isPopup && (
                            <PostPopup
                                title={post.title}
                                hubName={post.hubName}
                                content={post}
                                owner={post.userName}
                            />
                        )}

                        {isPopup && (
                            <div>
                                {post.title}
                            </div>
                        )}
                    </div>
                </div>

                <div className="post_content">

                    {post.img.length > 1 && (
                        <Carousel interval={null} className="post-image-carousel">
                            {post.img.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        onClick={() => toggleModal(image)}
                                        className="d-block w-100"
                                        src={image}
                                        alt="Image can't be loaded"
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}

                    {post.img.length === 1 && (
                        <img
                            onClick={() => toggleModal(post.img[0])}
                            className="d-block w-100"
                            src={post.img[0]}
                            alt="Image can't be loaded"
                        />
                    )}

                    <p className = "postOwner"> <strong>By: </strong> {post.userName}</p>

                    {isPopup && (
                        <div className="postDescription" dangerouslySetInnerHTML={{ __html: post.description }} />
                    )}
                    {!isPopup && (
                        <div>
                            <div className="postDescription" dangerouslySetInnerHTML={{ __html: post.description }} />
                            {post.description.length > maxLength && (
                                <PostPopup
                                    title="Read more..."
                                    hubName={post.hubName}
                                    content={post}
                                    owner={post.userName}
                                />
                            )}
                        </div>
                    )}
                </div>

                <div className="post_info">
                    <div className="post_liked">
                        {liked ? <FaThumbsUp className="post_liked_thumbs_up" onClick={toggleLiked}/> : <FaRegThumbsUp className="post_thumbs_up" onClick={toggleLiked}/>}
                        {numLikes}
                    </div>

                    <div className="post_dislike">
                        {disliked ? <FaThumbsDown className="post_dislike_thumbs_down"  onClick={toggleDisliked}/> : <FaRegThumbsDown className="post_thumbs_down" onClick={toggleDisliked}/>}
                        {numDislikes}
                    </div>

                    <div className="post_comment">
                        {commented ? <FaComments className="post_commented" onClick={toggleComment}/> : <FaRegComments className="post_no_comment" onClick={toggleComment}/>}
                        {numComments}
                    </div>

                </div>
                {showModal && <ImageModal imageUrl={modalImageUrl} onClose={toggleModal} />}

                {!isPopup && openComment && <Comments post={post} isPopup={isPopup}/>}

                {isPopup && <Comments post={post} isPopup={isPopup}/>}
            </div>
        </div>
    );
};


export default Post;