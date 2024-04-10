import React, {useEffect, useState} from "react";
import {Button, Col, Modal, Offcanvas, Row} from "react-bootstrap";
import {IoPersonSharp} from "react-icons/io5";
import "./DedicatedHubHeader.scss"
import ReadMore from "./ReadMore.jsx";
import {useMediaQuery} from "react-responsive";
import {useLocation, useNavigate} from "react-router-dom";
import newRequest from "../../utilities/newRequest.js";

function useDesktopOrLaptopMediaQuery() {
    return useMediaQuery({ query: '(min-width: 768px)' });
}

const DedicatedHubHeader = () => {


    // get the hub name passed to dedicated hub when clicking on the hub
    const location = useLocation();
    const hub = location.state?.hub;

    const [hubName, setHubName] = useState("");
    const [numMembers, setNumMembers ]= useState(0);
    const [description, setDescription] = useState("");
    const [rules, setRules] = useState("");
    const [resources, setResources] = useState("");

    // navigation hook
    const navigate = useNavigate();

    useEffect(() => {
        // make sure hub data is present otherwise the user is trying to load /hubs manually instead of through the menu
        // so navigate back to the home page to prevent errors
        if (!hub) {
            navigate("/");
        } else {
            const fetchData = async () => {
                try {
                    const response = await newRequest.get(`/hubs/getHub/${hub}`);

                    if (response.status !== 200) {
                        throw new Error(`Failed to fetch hub data. Status: ${response.status}`);
                    } else {
                        setHubName(response.data.hubName);
                        setNumMembers(response.data.members.length);
                        setDescription(response.data.description);
                        setRules(response.data.rules);
                        setResources(response.data.resources);
                    }
                } catch (error) {
                    // upon error log the error and navigate back home
                    navigate("/");
                }
            };

            fetchData();
        }
    }, [hub, navigate]);



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
                        <ReadMore Description={description} Resources={resources} Rules={rules}/>
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
        </Row>
    )
}

export default DedicatedHubHeader