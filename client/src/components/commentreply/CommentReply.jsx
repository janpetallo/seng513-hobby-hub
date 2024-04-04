import React, {useRef, useState} from "react";
import {Button, Collapse, FloatingLabel, Form, InputGroup} from "react-bootstrap";
import "./CommentReply.scss"
import { BiSend } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import RichTextEditor from "../TextEditor/RichTextEditor.jsx";
const CommentReply = () => {

    const [open, setOpen] = useState(false);
    const [textContent, setTextContent] = useState("");
    // to get the text from the rich text editor
    const handleTextContentChange = (content) => {
        setTextContent(content);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

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