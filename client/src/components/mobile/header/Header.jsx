import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import Logo from "../../../assets/authentication/mobile/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="fixed-top bg-white mobile-header">
            <Row className="p-2">
                <Col className="d-flex align-items-center">

                    <button className="m-hamburger" onClick={handleShow}>
                        <RxHamburgerMenu />
                    </button>

                    <Offcanvas className="w-75" backdrop={true} show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul id='menu-list' className="menu-list">
                                <li className="hamburger-menu-item mb"><Link to="/" onClick={handleClose}>Home</Link></li>
                                <li className="hamburger-menu-item mb"><Link to="/search-menu" onClick={handleClose}>Search</Link></li>
                                {/* ... other menu items ... */}
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <span className="m-navbar-logo-wrapper">
                        <img className="navbar-logo" src={Logo} alt="HobbyHub"/>
                    </span>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Header