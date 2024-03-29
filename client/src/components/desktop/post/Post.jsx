import "./post.scss"
import ImageModal from "./ImageModal.jsx";
import React, {useState} from "react";

const Post = ({ post }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };


    return (
        <div className = "post">
            <div className="postContainer">

                <div className="postHeading">
                    <div className="hubName">
                       Hub: {post.hubName}
                    </div>
                    <div className="postTitle">
                        {post.postTitle}
                    </div>
                </div>

                <div className="content">
                    <img
                        src={post.img}
                        alt="Image can't be loaded"
                        onClick={toggleModal}
                    />
                    <p className = "postOwner"> <strong>By: </strong> {post.postOwner}</p>
                    <p className = "postDescription"> {post.desc} </p>

                </div>

                <div className="info"></div>
                {showModal && <ImageModal imageUrl={post.img} onClose={toggleModal} />}
            </div>
        </div>
    );
};


export default Post