import React, {useEffect, useState} from "react";
import "./RightMenu.scss"
import {Button, Col, Container, Row} from "react-bootstrap";
import {IoPersonSharp} from "react-icons/io5";
import {useLocation, useNavigate} from "react-router-dom";

const RightMenu = () => {
    // navigation hook
    const navigate = useNavigate();

    // get the hub data passed to dedicated hub when clicking on the hub
    const location = useLocation();
    const hub = location.state?.hub;

    const [hubName, setHubName] = useState("");
    const [numMembers, setNumMembers ]= useState(0);
    const [followText, setFollowText] = useState('Follow');


    useEffect(() => {
        // make sure hub data is present otherwise the user is trying to load /hubs manually instead of through the menu
        // so navigate back to the home page to prevent errors
        if (!hub || typeof hub !== "object") {
            console.log("True");
            navigate("/");
        }else {


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

    const description = "Welcome to the dedicated hub for speedrunners! Share your runs," +
        " compete with others and just have an overall great time."


    return (
        <Container fluid className="right-menu">
            <Row className="right-menu-section">
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-center">Hub: {hubName}</h3>

                    <div>
                        <IoPersonSharp/>
                        <span>{numMembers} Members</span>
                    </div>

                    <Button className="mt-1 right-menu-follow-btn" variant="HHPurple" onClick={handleClick}>{followText}</Button>
                </Col>
            </Row>

            <Row className="right-menu-section">
                <Col>
                    <h5>Description</h5>
                    <p>{description}</p>
                </Col>
            </Row>

            <Row className="right-menu-section">
                <Col>
                    <h5>Rules</h5>
                    <ol>
                        <li>
                            Respect others
                        </li>
                        <li>
                            Be Civil
                        </li>
                        <li>
                            No toxic posting
                        </li>
                        <li>
                            Have fun
                        </li>
                    </ol>
                </Col>
            </Row>

            <Row className="right-menu-section">
                <Col>
                    <h5>Resources</h5>
                    <div>
                        Want to get into speedrunning here are some great links to start:
                        <ul>
                            <li>
                                "https://www.speedrun.com/"
                            </li>

                            <li>
                                "https://livesplit.org/"
                            </li>

                            <li>
                                "https://obsproject.com/"

                            </li>

                            <li>
                                "https://www.xsplit.com/"
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <Row className="right-menu-section">
                <Col>
                    <h5>Test too much content can scroll</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default RightMenu