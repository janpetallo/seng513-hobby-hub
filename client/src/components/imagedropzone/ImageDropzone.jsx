import React, {useCallback, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {IoImagesOutline} from "react-icons/io5";
import {useDropzone} from 'react-dropzone';
import "./ImageDropzone.scss"
import {MdOutlineAddToPhotos} from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";

const ImageDropzone = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // empty array to store files
    const [files, setFiles] = useState([])


    const onDrop = useCallback(acceptedFiles => {

        // have there been any accepted files
        if (acceptedFiles?.length) {

            // there are new files set them to local state
            setFiles(previousFiles => [
                // grab previous files (so we don't overwrite it)
                ...previousFiles,

                // grab new files and preview it
                ...acceptedFiles.map(file =>
                    Object.assign(file, {preview: URL.createObjectURL(file)})
                )
            ])
        }
    }, [])

    const removeFile = (name) => {
        setFiles(files => files.filter(file => file.name !== name))
    }

    //  only images and videos
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            'image/*' : [],
            'video/*' : [],
        }
    })

    return (
        <>
            <Button className="mb-3" variant="HHPurple" onClick={handleShow}>
                <IoImagesOutline/> Upload Images
            </Button>

            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Images Here</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="image-upload-body">
                        <div className="dropzone-wrapper" {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <div className="dropzone-prompt-box">
                                    <MdOutlineAddToPhotos/>
                                    <p>Drop images here ... </p>
                                </div>
                            ) : (
                                <div className="dropzone-prompt-box">
                                    <MdOutlineAddToPhotos/>
                                    <p>Add photos / videos</p>
                                </div>
                            )}
                        </div>

                        {/* Preview section*/}
                        <ul>
                            {files.map(file => (
                                <li key={file.name}>
                                    <div className="dropzone-img-wrapper">
                                        <img
                                            src={file.preview}
                                            alt={file.name}
                                            //  // revoke url to prevent memory leak
                                            // onLoad={() => {
                                            //     URL.revokeObjectURL(file.preview)
                                            // }}
                                        />
                                    </div>

                                    <div className="dropzone-btn-wrapper">
                                        <Button variant="danger" onClick={() => removeFile(file.name)}>
                                            <RiCloseCircleFill />
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ImageDropzone;