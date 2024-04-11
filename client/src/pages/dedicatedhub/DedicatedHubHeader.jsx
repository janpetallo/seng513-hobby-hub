import React, {useEffect, useState} from "react";
import {Button, Col, Modal, Offcanvas, Row} from "react-bootstrap";
import {IoPersonSharp} from "react-icons/io5";
import "./DedicatedHubHeader.scss"
import ReadMore from "./ReadMore.jsx";
import {useMediaQuery} from "react-responsive";
import {useNavigate} from "react-router-dom";
import newRequest from "../../utilities/newRequest.js";

function useDesktopOrLaptopMediaQuery() {
    return useMediaQuery({ query: '(min-width: 768px)' });
}

const DedicatedHubHeader = ({hub}) => {

    const [hubName, setHubName] = useState("");
    const [numMembers, setNumMembers ]= useState(0);
    const [description, setDescription] = useState("");
    const [rules, setRules] = useState("");
    const [resources, setResources] = useState("");
    const [currentUserID, setCurrentUserID] = useState("");
    const [moderator, setModerator] = useState(false);

    // navigation hook
    const navigate = useNavigate();

    useEffect(() => {
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

                    // get the hub's moderator id
                    const modID = response.data.moderators[0];
                    // get current User
                    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

                    setCurrentUserID(currentUser._id);

                    // if the current user is a moderator do not allow them to unfollow the hub, and set status to following
                    if(modID === currentUser._id){
                        setFollowText('Following');
                        setModerator(true);

                        // if the user already follows this hub set the button to reflect that
                    }else if (response.data.members.includes(currentUser._id)){
                        setFollowText('Following');
                    }


                }
            } catch (error) {
                // upon error log the error and navigate back home
                console.log(error);
                navigate("/");
            }
        };

        fetchData();
    }, [hub, navigate]);



    const [followText, setFollowText] = useState('Follow');

    const handleClick = async () => {
        if (followText === 'Follow') {
            try{
                const response = await newRequest.put("/hubs/addMemberToHub", {
                    hubName: hubName,
                    userID: currentUserID,
                });

                if (response.status !== 200){
                    throw new Error(`Failed to follow hub. Status: ${response.status}`);
                }

            }catch (error){
                console.log(error);
            }

            setFollowText('Following');
            // no live updates till the page refreshes, as it makes it faster
            setNumMembers(prevNumMembers => prevNumMembers + 1);
        }

        if (followText === 'Following') {
            try{
                const response = await newRequest.put("/hubs/removeMemberFromHub", {
                    hubName: hubName,
                    userID: currentUserID,
                });

                if (response.status !== 200){
                    throw new Error(`Failed to unfollow hub. Status: ${response.status}`);
                }

            }catch (error){
                console.log(error);
            }


            setFollowText('Follow');
            // no live updates till the page refreshes, as it makes it faster
            setNumMembers(prevNumMembers => prevNumMembers - 1 );
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

                    <Button variant="HHPurple" onClick={handleClick} disabled={moderator}>{followText}</Button>
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