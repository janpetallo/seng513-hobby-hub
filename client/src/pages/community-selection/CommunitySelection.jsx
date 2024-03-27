import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                Create a Hub: <span onClick={() => setShowModal(true)}>+</span>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Hub</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add your form to create a hub here */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {/* Add your function to create a hub here */}}>
                        Save Changes
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