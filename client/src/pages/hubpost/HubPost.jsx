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


    const handleSubmit = async (event) => {
        console.log(textContent);
        console.log(postTitle);


        // prevent the form from auto clearing
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        // get the user data from the local storage
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        // Field to Gather Post data
        const postData = {
            userName: currentUser.username,
            userID: currentUser._id,
            hubName: hub,
            title: postTitle,
            description: textContent,
            img: images, //todo: should use the upload utility in the imagedrop then return urls back here
        };


        // Submit data to server
        try {
            const response = await newRequest.post('/posts/createPost', postData);
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Form className="p-3 hub-post" noValidate validated={validated} onSubmit={handleSubmit}>

            <PostToggle/>

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

            <ImageDropzone/>

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