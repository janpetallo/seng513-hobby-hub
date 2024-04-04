import { useState } from 'react';
import Post from "../desktop/post/Post.jsx";
import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import "./PostPopup.scss"

function PostPopup({ title, hubName, owner, content }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <p className="post-pop-link" onClick={handleShow}>
                {title}
            </p>

            <Offcanvas className="w-100 h-100" show={show} onHide={handleClose} placement={`end`}>
                <Offcanvas.Header className="bg-HHPurple text-white" closeButton>
                    <Offcanvas.Title>{`${owner} posted to ${hubName}`}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0 bg-HHPurple-subtle">
                    <Container className="bg-white">
                        <Post hubTitle={true} post={content} isPopup={true}/>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default PostPopup;
