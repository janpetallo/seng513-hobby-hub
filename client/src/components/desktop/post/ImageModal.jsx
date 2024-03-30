import React from 'react';
import "./ImageModal.scss";
const ImageModal = ({ imageUrl, onClose }) => {
    return (
        <div className="postImageModal" onClick={onClose}>
            <div className="postImageModal-content">
                <img src={imageUrl} alt="error can't load image" />
            </div>
        </div>
    );
};

export default ImageModal;
