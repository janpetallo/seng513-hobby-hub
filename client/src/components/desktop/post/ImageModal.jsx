import React from 'react';
import "./ImageModal.scss";
import { RiCloseCircleFill } from "react-icons/ri";
import {Button} from "react-bootstrap";

const ImageModal = ({ imageUrl, onClose }) => {
    return (
        <div className="m-0 p-0 postImageModal" onClick={onClose}>
            <div className="postImageModal-content">
                <img src={imageUrl} alt="error can't load image" />
            </div>
            <div className="blurry-background" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <Button variant={"secondary"} className="postImageModalClose shadow-lg"><RiCloseCircleFill /></Button>
        </div>
    );
};

export default ImageModal;
