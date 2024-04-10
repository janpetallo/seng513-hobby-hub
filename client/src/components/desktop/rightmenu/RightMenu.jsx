import React, {useEffect, useState} from "react";
import "./RightMenu.scss"
import {Button, Col, Container, Row} from "react-bootstrap";
import {IoPersonSharp} from "react-icons/io5";
import {useLocation, useNavigate} from "react-router-dom";
import newRequest from "../../../utilities/newRequest.js";

const RightMenu = () => {
    // navigation hook
    const navigate = useNavigate();

    // get the hub data passed to dedicated hub when clicking on the hub
    const location = useLocation();
    const hub = location.state?.hub;

    const [hubName, setHubName] = useState("");
    const [numMembers, setNumMembers ]= useState(0);
    const [followText, setFollowText] = useState('Follow');
    const [description, setDescription] = useState("");
    const [rules, setRules] = useState("");
    const [resources, setResources] = useState("");
    const [moderator, setModerator] = useState(false);
    const [moderatorID, setModeratorID] = useState("");
    const [hubID, setHubID] = useState("");


    // ToDO: make follow function and check if you already follow it, delete post, and bann user functions

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
                        setHubID(response.data._id);

                        // get the hub's moderator id
                        const modID = response.data.moderators[0];

                        setModeratorID(modID);
                        // get current User
                        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

                        // if the current user is a moderator do not allow them to unfollow the hub, and set status to following
                        if(modID === currentUser._id){
                           setFollowText('Following');
                           setModerator(true);
                        }

                    }
                } catch (error) {
                    // upon error log the error and navigate back home
                    console.log(error);
                    navigate("/");
                }
            };

            fetchData();
        }
    }, [hub, navigate]);

    const handleClick = () => {
        if (followText === 'Follow') {
            setFollowText('Following');
        }

        if (followText === 'Following') {
            setFollowText('Follow');
        }
    }


    return (
        <Container fluid className="right-menu">
            <Row className="right-menu-section">
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-center">Hub: {hubName}</h3>

                    <div>
                        <IoPersonSharp/>
                        <span>{numMembers} Members</span>
                    </div>

                    <Button className="mt-1 right-menu-follow-btn" variant="HHPurple" onClick={handleClick} disabled={moderator}>{followText}</Button>
                </Col>
            </Row>

            <Row className="right-menu-section">
                <Col>
                    <h5>Description</h5>
                    <div className="RM-hubDescription" dangerouslySetInnerHTML={{ __html: description }} />
                </Col>
            </Row>

            <Row className="right-menu-section">
                <Col>
                    <h5>Rules</h5>
                    <div className="RM-HubRules" dangerouslySetInnerHTML={{ __html: rules }} />
                </Col>
            </Row>

            <Row className="right-menu-section">
                <Col>
                    <h5>Resources</h5>
                    <div className="RM-hubResource" dangerouslySetInnerHTML={{ __html: resources }} />
                </Col>
            </Row>
        </Container>
    )
}

export default RightMenu