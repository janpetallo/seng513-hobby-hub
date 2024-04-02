import React from "react";
import {Button, Nav, Navbar, NavDropdown, Offcanvas, Row} from "react-bootstrap";
import {Col, Container} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import "./HubMarketNavbar.scss";

const HubMarketNavbar = () => {

    return (

        <Navbar expand="lg" className="bg-white border-bottom">
            <Container fluid className="container-nav">
                <Col className="d-flex justify-content-center align-items-center">
                    <Link className="text-decoration-none LinkColor">My Hub Corner</Link>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <Link to="/marketplace" className="text-decoration-none LinkColor">My Marketplace Corner</Link>
                </Col>

            </Container>
        </Navbar>
    )
}
export default HubMarketNavbar;