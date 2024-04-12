import React, { useState, useEffect } from 'react';
import {Row, Col, Card, Modal, Button, Form, Container, Accordion} from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CreateIcon from '../../assets/create-hub/create.svg';
import './CommunitySelection.scss'
import CustomizeHub from "../../components/customizehub/CustomizeHub.jsx";
import newRequest from "../../utilities/newRequest.js";
import HubCategories from "../../utilities/HubCategories.js";

function CommunitySelection() {
    const location = useLocation();
    const [showModal, setShowModal] = useState(location.state?.openModal || false);
    // const [showModal, setShowModal] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 575px)' });

    const [hubName, setHubName] = useState('');
    const [isHubNameTooLong, setIsHubNameTooLong] = useState(false);

    useEffect(() => {
        setIsHubNameTooLong(hubName.length === 18);
    }, [hubName]);

    const navigate = useNavigate();

    useEffect(() => {
        if (isMobile && showModal) {
            setShowModal(false);
            navigate('/create-hub');
        }
    }, [isMobile, showModal, navigate]);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // get all hubs from backend
    const [hubs, setHubs] = useState([]);

    useEffect(() => {

        // Function to fetch all posts from backend API server
        const fetchHubs = async () => {
            try {
                const response = await newRequest.get("/hubs/getAllHubs");
                if (response.status !== 200) {
                    throw new Error("Failed to fetch hubs");
                }
                const hubsData = response.data;
                const categories = {};
                hubsData.forEach(hub => {
                    if (!categories[hub.category]) {
                        categories[hub.category] = [];
                    }
                    categories[hub.category].push(hub);
                });
                const categoriesArray = Object.keys(categories).map(category => ({
                    name: category,
                    hubs: categories[category]
                }));
                setHubs(categoriesArray);
            } catch (error) {
                console.error(error);
            }
        };
        // Call fetchHubs function when component mounts
        fetchHubs();
    }, []);

    const handleClick = (hubName) => {
        navigate('/hubs', { state: { hub: hubName } });
    };
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 150px)'}}>
            <div style={{flex: 1}}>
            {!isMobile && currentUser && (
                <div className="create-hub" >
                    Create a Hub:<img className="create-icon" src={CreateIcon} alt="Create" onClick={() => setShowModal(true)} />
                </div>
            )}
            <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header id="create-modal-header" closeButton>
                    <Modal.Title className="create-modal-title">Create a New Hub</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CustomizeHub/>
                </Modal.Body>
            </Modal>

            {/* <Accordion className="browse-hub-accordion" flush>
                {HubCategories.map((category, categoryIndex) => (
                    <Accordion.Item key={categoryIndex} eventKey={categoryIndex.toString()}>
                        <Accordion.Header>{category}</Accordion.Header>
                        <Accordion.Body className="browse-hub-body">
                            {hubs.map((hub, hubIndex) => {
                                // Get the hubs that match the category
                                const filteredHubs = hub.hubs.filter((item) => item.category === category);
                                // map through and return them in the accordion
                                return filteredHubs.map((filteredHub, filteredIndex) => (
                                    <div
                                        className="hub-selection-card"
                                        key={filteredIndex}
                                        onClick={() => handleClick(filteredHub.hubName)}
                                    >
                                    <pre className="hub-selection-title">
                                        Hub:{filteredHub.hubName}{'\n'}
                                    </pre>
                                        <pre>
                                        Members:{filteredHub.members.length}
                                    </pre>
                                    </div>
                                ));
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion> */}

            <Accordion className="browse-hub-accordion" flush>
                {HubCategories.map((category, categoryIndex) => {
                    // Check if any hub belongs to this category
                    const categoryHasHubs = hubs.some(hub => hub.hubs.some(item => item.category === category));

                    // Only render the category if it has hubs
                    return categoryHasHubs && (
                        <Accordion.Item key={categoryIndex} eventKey={categoryIndex.toString()}>
                            <Accordion.Header>{category}</Accordion.Header>
                            <Accordion.Body className="browse-hub-body">
                                {hubs.map((hub, hubIndex) => {
                                    // Get the hubs that match the category
                                    const filteredHubs = hub.hubs.filter((item) => item.category === category);
                                    // map through and return them in the accordion
                                    return filteredHubs.map((filteredHub, filteredIndex) => (
                                        <div
                                            className="hub-selection-card"
                                            key={filteredIndex}
                                            onClick={() => handleClick(filteredHub.hubName)}
                                        >
                                            <pre className="hub-selection-title">
                                                Hub:{filteredHub.hubName}{'\n'}
                                            </pre>
                                            <pre>
                                                Members:{filteredHub.members.length}
                                            </pre>
                                        </div>
                                    ));
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
            </div>


            {/*<Container className="mt-3">*/}
            {/*    {hubs.map((hub, i) => (*/}
            {/*        <Row key={i} className="section-font">*/}
            {/*            {hub.name}*/}
            {/*            <Row>*/}
            {/*                {hub.hubs.map((hub, index) => (*/}
            {/*                <Col xs={4.5} sm={4} md={3.5} lg={3} className="col-container my-2 me-4 p-3" key={index}>*/}
            {/*                    <div className="hub-selection-text-center"  onClick={() => handleClick(hub.hubName)}>*/}
            {/*                        {hub.hubName}*/}
            {/*                    </div>*/}
            {/*                </Col>*/}
            {/*                ))}*/}
            {/*            </Row>*/}
            {/*        </Row>*/}
            {/*    ))}*/}
            {/*</Container>*/}

            {isMobile && currentUser && (
                <div id="create-hub-mobile-link" className='create-hub-mobile m-3' style={{fontWeight: '550'}} >
                    Can't find what you are looking for? <Link to="/create-hub">Create one yourself!</Link>
                </div>
            )}
        </div>
    );
}

export default CommunitySelection;