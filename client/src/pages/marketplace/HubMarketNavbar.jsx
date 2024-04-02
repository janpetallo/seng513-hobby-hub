import React from "react";
import {Button, Nav, Navbar, NavDropdown, Offcanvas, Row} from "react-bootstrap";
import {Col, Container} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import "./HubMarketNavbar.scss";

const HubMarketNavbar = () => {
    const location = useLocation();

    return (
        <Navbar expand="lg" className="bg-white border-bottom nav-size">
            <Container className="container-nav">
                <Col className="d-flex justify-content-center align-items-center">
                    <Link 
                        to="/" 
                        className={`text-decoration-none LinkColor ${location.pathname === '/' ? 'selected-menu' : ''}`}
                    >
                        My Hub Corner
                    </Link>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <Link 
                        to="/marketplace" 
                        className={`text-decoration-none LinkColor ${location.pathname === '/marketplace' ? 'selected-menu' : ''}`}
                    >
                        My Marketplace Corner
                    </Link>
                </Col>
            </Container>
        </Navbar>
    )
}
export default HubMarketNavbar;