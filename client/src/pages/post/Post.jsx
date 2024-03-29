import React, {useState} from "react";
import "./Post.scss"
import RichTextEditor from "../../components/TextEditor/RichTextEditor.jsx";
import PostToggle from "../../components/PostToggle/PostToggle.jsx";
import {Button, FloatingLabel, Form} from "react-bootstrap";
const Post = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form className="p-3 post" noValidate validated={validated} onSubmit={handleSubmit}>

            <div className="d-flex justify-content-between flex-wrap">
                <div className="me-4">
                    <PostToggle/>
                </div>

                <Button className="post-button" variant="HHPurple" type="submit">
                    Post
                </Button>
            </div>

            <FloatingLabel
                className="mt-3 mb-3"
                controlId="floating-title"
                label="Title"
            >
                <Form.Control
                    type="text"
                    placeholder=""
                    name="Title"
                    required
                />
                <Form.Control.Feedback type="invalid">Post needs a title!</Form.Control.Feedback>
            </FloatingLabel>


            <RichTextEditor/>

        </Form>
    )
}

export default Post