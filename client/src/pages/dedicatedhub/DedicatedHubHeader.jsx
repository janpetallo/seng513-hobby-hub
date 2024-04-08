import React, {useEffect, useState} from "react";
import {Button, Col, Modal, Offcanvas, Row} from "react-bootstrap";
import {IoPersonSharp} from "react-icons/io5";
import "./DedicatedHubHeader.scss"
import ReadMore from "./ReadMore.jsx";
import {useMediaQuery} from "react-responsive";

function useDesktopOrLaptopMediaQuery() {
    return useMediaQuery({ query: '(min-width: 768px)' });
}

const DedicatedHubHeader = () => {

    const hubName = "Speedrunners";
    const numMembers = 1250;
    const [followText, setFollowText] = useState('Follow');

    const handleClick = () => {
        if (followText === 'Follow') {
            setFollowText('Following');
        }

        if (followText === 'Following') {
            setFollowText('Follow');
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isDesktopOrLaptop = useDesktopOrLaptopMediaQuery();

    useEffect(() => {
        if (isDesktopOrLaptop) {
            setShow(false);
        }
    }, [isDesktopOrLaptop]);


    return (
        <Row className="d-block d-md-none m-0 p-0">
            <Col className="d-flex flex-column justify-content-center align-items-center hub-mobile-header">
                <h5 className="text-center">Hub: {hubName}</h5>

                <div className="d-flex align-items-center justify-content-center flex-wrap">
                    <div className="me-3">
                        <IoPersonSharp/>
                        <span>{numMembers} Members</span>
                    </div>

                    <Button variant="HHPurple" onClick={handleClick}>{followText}</Button>
                </div>

                <p className="mt-1 see-more-link" onClick={handleShow}>
                    See more!
                </p>

                <Offcanvas className="d-md-none h-75" show={show} onHide={handleClose} placement={`top`}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>About: {hubName}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ReadMore/>
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
        </Row>
    )
}

export default DedicatedHubHeader