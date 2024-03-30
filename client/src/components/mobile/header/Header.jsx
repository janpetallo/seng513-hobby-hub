import React, {useState} from "react";
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
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
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