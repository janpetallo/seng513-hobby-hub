import React, {useRef, useState} from "react";
import {Button, Collapse, FloatingLabel, Form, InputGroup} from "react-bootstrap";
import "./CommentReply.scss"
import { BiSend } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import RichTextEditor from "../TextEditor/RichTextEditor.jsx";
import newRequest from "../../utilities/newRequest.js";
import {useNavigate} from "react-router-dom";
const CommentReply = ({post}) => {

    const [open, setOpen] = useState(false);
    const [textContent, setTextContent] = useState("");
    // to get the text from the rich text editor
    const handleTextContentChange = (content) => {
        setTextContent(content);
    };

    // navigation hook
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // get user data from local storage
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        // Check if user is logged in
        if (!currentUser) {
            // Redirect user to login page or display a message
            console.log("User is not logged in. Redirecting to login page...");
            navigate("/login");
            return;
        }

        // Field to Gather Comment data
        const commentData = {
            username: currentUser.username,
            userID: currentUser._id,
            postID: post._id,
            comment: textContent,
        };

        // Submit data to server
        try {
            const response = await newRequest.post('comments/createComment', commentData);
            // Reload the entire page
            window.location.reload();

        } catch (error) {
            console.error(error);
        }


        // Close the reply section
        setOpen(false);
    };

    return (
        <>
            <Button
                className="comment-reply-btn"
                variant="HHPurple"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                {open ? <IoMdCloseCircleOutline /> : <BiSend />} {open ? 'Close' : 'Reply'}
            </Button>

            <Collapse in={open}>
                <Form className="reply-field-wrapper" onSubmit={handleSubmit}>
                    <div className="d-flex reply-editor">
                        <RichTextEditor onTextContentChange={handleTextContentChange}/>
                    </div>

                    <div className="d-flex mt-1">
                        <Button
                            className="ms-auto m-1 comment-reply-btn"
                            variant="HHPurple"
                            type="submit"
                            disabled={!textContent.trim()}
                        >
                            <BiSend /> Send
                        </Button>
                    </div>
                </Form>
            </Collapse>
        </>
    )
}

export default CommentReply