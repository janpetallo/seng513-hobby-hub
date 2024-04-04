import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Modal, Button, Form, Container} from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CreateIcon from '../../assets/create-hub/create.svg';
import './CommunitySelection.scss'
import CustomizeHub from "../../components/customizehub/CustomizeHub.jsx";


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

    return (
        <div className="hub-container">
            {!isMobile && (
                <div className="create-hub" >
                    Create a Hub:<img className="create-icon" src={CreateIcon} alt="Create" onClick={() => setShowModal(true)} />
                </div>
            )}
            <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header id="create-modal-header" closeButton>
                    <Modal.Title className="create-modal-title">Create a New Hub</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<Form className="ps-3 pe-3">*/}
                    {/*    <Form.Group>*/}
                    {/*        <Form.Label className="create-form-label" >Hub Name</Form.Label>*/}
                    {/*        <Form.Control className="mb-3" id="create-form-control" type="text" placeholder="Enter hub name" maxLength={18} value={hubName} onChange={e => setHubName(e.target.value)} />*/}
                    {/*            {isHubNameTooLong && <Form.Text className="text-danger">Hub name cannot exceed 18 characters</Form.Text>}*/}
                    {/*    </Form.Group>*/}

                    {/*    <Form.Group>*/}
                    {/*        <Form.Label className="create-form-label">Type</Form.Label>*/}
                    {/*        <Form.Check className="custom-radio" type="radio" id="publicHub" label={<><strong>Public Hub</strong><span> Anyone can view, post, and comment. Share your hub to the world!</span></>} name="hubType" />*/}
                    {/*        <Form.Check className="custom-radio" type="radio" id="privateHub" label={<><strong>Private Hub</strong><span> Only approved users can enter. Only those worthy shall pass!</span></>} name="hubType" />*/}
                    {/*    </Form.Group>*/}
                    {/*</Form>*/}

                    <CustomizeHub/>

                    
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <Button id="cancel-button" onClick={() => setShowModal(false)}>*/}
                {/*        Cancel*/}
                {/*    </Button>*/}
                {/*    <Button id="create-button" onClick={() => /!* Add function to create a hub here *!/}>*/}
                {/*        Create*/}
                {/*    </Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
            <Container >
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
            {isMobile && (
                <div id="create-hub-mobile-link" className='create-hub-mobile'>
                    Can't find what you are looking for? <Link to="/create-hub">Create one yourself!</Link>
                </div>
            )}
        </div>
    );
}

export default CommunitySelection;