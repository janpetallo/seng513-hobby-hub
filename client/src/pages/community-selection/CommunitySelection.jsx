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
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create a New Hub</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add your form to create a hub here */}
                    <Form>
                        <Form.Group controlId="formHubName">
                            <Form.Label>Hub Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter hub name" />
                        </Form.Group>
                    </Form>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Check type="radio" id="publicHub" label={<><strong>Public Hub</strong><span> Anyone can view, post, and comment. Share your hub to the world!</span></>}name="hubType" />
                        <Form.Check type="radio" id="privateHub" label={<><strong>Private Hub</strong><span> Only approved users can enter. Only those worthy shall pass!</span></>} name="hubType" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => {/* Add your function to create a hub here */}}>
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