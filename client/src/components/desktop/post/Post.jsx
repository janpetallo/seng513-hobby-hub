import "./post.scss"
import ImageModal from "./ImageModal.jsx";
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";




const Post = ({ post }) => {
    // to control image pop up when clicked
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    // temporary functions and variables to enable liking
    const [liked, setLiked] = useState(false);
    const toggleLiked = () => {
        setLiked(!liked);
    } ;

    // temporary functions and variables to enable disliking
    const [disliked, setDisliked] = useState(false);
    const toggleDisliked = () => {
        setDisliked(!disliked);
    } ;

    // temporary functions and variables to enable commenting
    const [commented, setCommented] = useState(false);
    const toggleComment = () => {
        setCommented(!commented);
    } ;

    return (
        <div className = "post">
            <div className="postContainer">

                <div className="postHeading">
                    <div className="post_hubName">
                       Hub: {post.hubName}
                    </div>
                    <div className="postTitle">
                        {post.postTitle}
                    </div>
                </div>

                <div className="post_content">

                    {post.img.length > 1 && (
                        <Carousel interval={null} className="post-image-carousel">
                            {post.img.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        onClick={toggleModal}
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
                            onClick={toggleModal}
                            className="d-block w-100"
                            src={post.img[0]}
                            alt="Image can't be loaded"
                        />
                    )}

                    <p className = "postOwner"> <strong>By: </strong> {post.postOwner}</p>
                    <p className = "postDescription"> {post.desc} </p>
                </div>

                <div className="post_info">
                    <div className="post_liked">
                        {liked ? <FaThumbsUp className="post_liked_thumbs_up" onClick={toggleLiked}/> : <FaRegThumbsUp className="post_thumbs_up" onClick={toggleLiked}/>}
                        1000
                    </div>

                    <div className="post_dislike">
                        {disliked ? <FaThumbsDown className="post_dislike_thumbs_down"  onClick={toggleDisliked}/> : <FaRegThumbsDown className="post_thumbs_down" onClick={toggleDisliked}/>}
                        0
                    </div>

                    <div className="post_comment">
                        {commented ? <FaComments className="post_commented" onClick={toggleComment}/> : <FaRegComments className="post_no_comment" onClick={toggleComment}/>}
                        12
                    </div>

                </div>
                {showModal && <ImageModal imageUrl={post.img} onClose={toggleModal} />}
            </div>
        </div>
    );
};


//ToDO:
// map titles and hubs and descriptions and likes for posts

export default Post