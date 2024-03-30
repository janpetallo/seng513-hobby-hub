import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import hubsSvg from '../../assets/leftsidemenu/hubs.svg';
import marketSvg from '../../assets/leftsidemenu/market.svg';
import { Link } from 'react-router-dom';
import './ChoosePostingLocation.scss';

const ChoosePostingLocation = () => {
    return (
        <Container id="centered-container" className="centered-container">
            <div id="post-to-content">
            <Row>
                <Col>
                    <div id="post-to-text">Post To:</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/hubpost" id="posting-link">
                        <Button variant="light" size="lg" block id="square-button">
                            <img src={hubsSvg} alt="Hubs" id="button-svg" />
                            <span>Hubs</span>
                        </Button>
                    </Link>
                </Col>
                
                <Col >
                    <Link to="/marketpost" id="posting-link">
                        <Button variant="light" size="lg" block id="square-button">
                            <img src={marketSvg} alt="Hubs" id="button-svg" />
                            <span>Market</span>
                        </Button>
                    </Link>
                </Col>
            </Row>
            </div>
        </Container>
    );
};

export default ChoosePostingLocation;