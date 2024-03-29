import "./post.scss"
import ImageModal from "./ImageModal.jsx";
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';

const Post = ({ post }) => {
    // to control image pop up when clicked
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };



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
                    <p className = "postOwner"> <strong>By: </strong> {post.postOwner}</p>
                    <p className = "postDescription"> {post.desc} </p>
                </div>

                <div className="post_info"></div>
                {showModal && <ImageModal imageUrl={post.img} onClose={toggleModal} />}
            </div>
        </div>
    );
};


export default Post