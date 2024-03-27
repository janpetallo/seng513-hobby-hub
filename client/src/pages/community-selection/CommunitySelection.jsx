import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateIcon from '../../assets/create-hub/create.svg';
import './CommunitySelection.scss'

function CommunitySelection() {
    const [showModal, setShowModal] = useState(false);

    const categories = [
        { name: 'Outdoors', hubs: ['Mushroom Hunters', 'Fishing', 'Hiking'] },
        { name: 'Indoors', hubs: ['Books', 'Painting'] },
        { name: 'Cards', hubs: ['Pokemon', 'Yu-Gi-Oh'] },
        { name: 'Games', hubs: ['League of Legends', 'Game of Life', 'Elden Ring'] },
    ];

    return (
        <div className="hub-container">
            <div className="create-hub">
                Create a Hub:<img className="create-icon" src={CreateIcon} alt="Create" onClick={() => setShowModal(true)} />
            </div>
            <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header className="create-modal-header" closeButton>
                    <Modal.Title className="create-modal-title">Create a New Hub</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formHubName">
                            <Form.Label className="create-form-label" >Hub Name</Form.Label>
                            <Form.Control className="create-form-control" type="text" placeholder="Enter hub name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="create-form-label">Type</Form.Label>
                            <Form.Check className="custom-radio" type="radio" id="publicHub" label={<><strong>Public Hub</strong><span> Anyone can view, post, and comment. Share your hub to the world!</span></>} name="hubType" />
                            <Form.Check className="custom-radio" type="radio" id="privateHub" label={<><strong>Private Hub</strong><span> Only approved users can enter. Only those worthy shall pass!</span></>} name="hubType" />
                        </Form.Group>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button className="cancel-button" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button className="create-button" onClick={() => {/* Add function to create a hub here */}}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
            {categories.map((category, i) => (
                <React.Fragment key={i}>
                    <div className='hub-category'>{category.name}</div>
                    <Row className="align-items-start">
                        {category.hubs.map((hub, index) => (
                            <Col key={index}>
                                <Link to={`/${hub.replace(' ', '')}`} className="hub-card-link">
                                    <Card className="hub-card">
                                        <Card.Body>
                                            <Card.Title className="hub-card-title">{hub}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </React.Fragment>
            ))}
        </div>
    );
}

export default CommunitySelection;