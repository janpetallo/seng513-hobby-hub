import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Modal, Button, Form, Container} from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CreateIcon from '../../assets/create-hub/create.svg';
import './CommunitySelection.scss'
import CustomizeHub from "../../components/customizehub/CustomizeHub.jsx";
import newRequest from "../../utilities/newRequest.js";

function CommunitySelection() {
    const location = useLocation();
    const [showModal, setShowModal] = useState(location.state?.openModal || false);
    // const [showModal, setShowModal] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 575px)' });

    const [hubName, setHubName] = useState('');
    const [isHubNameTooLong, setIsHubNameTooLong] = useState(false);

    useEffect(() => {
        setIsHubNameTooLong(hubName.length == 18);
    }, [hubName]);

    const navigate = useNavigate();

    useEffect(() => {
        if (isMobile && showModal) {
            setShowModal(false);
            navigate('/create-hub');
        }
    }, [isMobile, showModal, navigate]);

    const categories = [
        { name: 'Outdoors', hubs: ['Mushroom Hunters', 'Fishing', 'Hiking'] },
        { name: 'Indoors', hubs: ['Books', 'Painting'] },
        { name: 'Cards', hubs: ['Pokemon', 'Yu-Gi-Oh'] },
        { name: 'Games', hubs: ['League of Legends', 'Game of Life', 'Elden Ring'] },
    ];

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // get all posts
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
                console.log(hubs);
                console.log(categoriesArray);
            } catch (error) {
                console.error(error);
            }
        };
        // Call fetchHubs function when component mounts
        fetchHubs();
    }, []); 
    
    
    return (
        <div className="hub-container">
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
            <Container className="mt-3">
                {categories.map((category, i) => (
                    <Row key={i} className="section-font">
                        {category.name}
                        <Row>
                            {category.hubs.map((hub, index) => (
                                <Col xs={4.5} sm={4} md={3.5} lg={3} key={index} className="col-container my-2 me-4 p-3">
                                    <div className="text-center ">
                                        <Link className='hub-card-link' to={`/${hub.replace(' ', '')}`}>
                                            {hub}
                                        </Link>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Row>
                ))}
            </Container>
            {isMobile && currentUser && (
                <div id="create-hub-mobile-link" className='create-hub-mobile'>
                    Can't find what you are looking for? <Link to="/create-hub">Create one yourself!</Link>
                </div>
            )}
        </div>
    );
}

export default CommunitySelection;