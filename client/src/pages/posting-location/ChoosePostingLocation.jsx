import React, { useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import hubsSvg from '../../assets/leftsidemenu/hubs.svg';
import marketSvg from '../../assets/leftsidemenu/market.svg';
import { Link, useNavigate } from 'react-router-dom';
import './ChoosePostingLocation.scss';

const ChoosePostingLocation = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 575px)' });
    const navigate = useNavigate();

    useEffect(() => {
        // const checkResize = () => {
            if (isMobile) {
                navigate('/');
            }
        // };
        // window.addEventListener('resize', checkResize);
        // checkResize(); // check immediately on component mount
        // return () => window.removeEventListener('resize', checkResize);
    }, [isMobile ,navigate]);

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
                        <Button variant="light" size="lg" block='true' id="square-button">
                            <img src={hubsSvg} alt="Hubs" id="button-svg" />
                            <span>Hubs</span>
                        </Button>
                    </Link>
                </Col>
                
                <Col >
                    <Link to="/marketpost" id="posting-link">
                        <Button variant="light" size="lg" block='true' id="square-button">
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