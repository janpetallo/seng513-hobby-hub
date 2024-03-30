import React from 'react';
import "./ImageModal.scss";
const ImageModal = ({ imageUrl, onClose }) => {
    return (
        <div className="postImageModal" onClick={onClose}>
            <div className="modal-content">
                <img src={imageUrl} alt="Full size" />
            </div>
        </div>
    );
};

export default ImageModal;
