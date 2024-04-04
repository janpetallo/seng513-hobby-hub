import React, {useState} from "react";
import "./HubPost.scss"
import RichTextEditor from "../../components/TextEditor/RichTextEditor.jsx";
import PostToggle from "../../components/PostToggle/PostToggle.jsx";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import ImageDropzone from "../../components/imagedropzone/ImageDropzone.jsx";
import UseGoBack from "../../utilities/UseGoBack/UseGoBack.jsx";
import { MdCancelPresentation } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import newRequest from "../../utilities/newRequest.js";
import {useNavigate} from "react-router-dom";
import upload from "../../utilities/upload.js"

const HubPost = () => {

    const [validated, setValidated] = useState(false);

    // variables and setters for all of the components that make up a post
    const [hub, setHub] = useState('');
    const [images, setImages] = useState([]);
    const [textContent, setTextContent] = useState("");
    const [postTitle, setPostTitle] = useState('');



    // navigation hook
    const navigate = useNavigate();

    // to get the post title
    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    };

    // to get the text from the rich text editor
    const handleTextContentChange = (content) => {
        setTextContent(content);
    };

    // function to get the selected hub from PostToggle.jsx
    const handleHubSelect = (hub) => {
        setHub(hub); // Update the selected hub state
    };

    // Function to get the images from imagedropzone.jsx
    const handleImageChange = (newImages) => {
        setImages(newImages);
    };

    // Function to handle the removal of an image from the image drop zone
    const handleRemoveImage = (imageName) => {
        setImages(images => images.filter(image => image.name !== imageName));
    };

    const handleSubmit = async (event) => {

        // prevent the form from auto clearing
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        // get user data from local storage
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        // Check if user is logged in
        if (!currentUser) {
            // Redirect user to login page or display a message
            console.log("User is not logged in. Redirecting to login page...");
            // Example: navigate("/login");
            return;
        }

        const uploadedImageUrls = []; // Array to store uploaded image URLs

        // Upload each image to Cloudinary and gather their URLs
        for (const image of images) {
            try {
                const imageUrl = await upload(image);
                uploadedImageUrls.push(imageUrl);
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }

        // Field to Gather Post data
        const postData = {
            userName: currentUser.username,
            userID: currentUser._id,
            hubName: hub,
            title: postTitle,
            description: textContent,
            img: uploadedImageUrls,
        };


        // Submit data to server
        try {
            const response = await newRequest.post('/posts/createPost', postData);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Form className="p-3 hub-post" noValidate validated={validated} onSubmit={handleSubmit}>

            <PostToggle onHubSelect={handleHubSelect} />

            <FloatingLabel
                className="mt-3 mb-3"
                controlId="floating-title"
                label="Title"
            >
                <Form.Control
                    type="text"
                    placeholder=""
                    name="Title"
                    value={postTitle}
                    onChange={handleTitleChange}
                    required
                />
                <Form.Control.Feedback type="invalid">Post needs a title!</Form.Control.Feedback>
            </FloatingLabel>

            <ImageDropzone handleImageChange={handleImageChange} handleRemoveImage={handleRemoveImage}/>

            <RichTextEditor onTextContentChange={handleTextContentChange} />

            <div className="d-flex justify-content-center flex-wrap mt-3">
                <Button className="hub-post-btn" variant="secondary" onClick={UseGoBack()}>
                    <MdCancelPresentation /> Cancel
                </Button>

                <Button className="hub-post-btn" variant="HHPurple" type="submit">
                    <BiSend /> Post
                </Button>
            </div>

        </Form>
    )
}

export default HubPost