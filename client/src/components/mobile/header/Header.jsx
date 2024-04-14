import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss"
import {Button, Col, Container, Offcanvas, Row} from "react-bootstrap";
import Logo from "../../../assets/authentication/mobile/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerMenu from "../hamburgermenu/HamburgerMenu.jsx";

const Header = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <Container className="fixed-top bg-white mobile-header">
            <Row className="p-2">
                <Col className="d-flex align-items-center">

                    <button className="m-hamburger" onClick={handleShow}>
                        <RxHamburgerMenu />
                    </button>

                    <Offcanvas className="w-75" backdrop={true} show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <div className="pt-4 ps-3">
                                    <img className="navbar-logo" src={Logo} alt="HobbyHub"/>
                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            {!currentUser && (
                                <>
                                    <hr/>
                                    <h6>Create an account to join HobbyHubs countless communities or to make your own</h6>
                                    <Link to="/signup">
                                        <Button className="mobile-header-btn" variant="HHPurple"> Sign up</Button>
                                    </Link>

                                    <h6 className="mt-3">Or Login if you already have an account</h6>
                                    <Link to="/login">
                                        <Button className="mobile-header-btn" variant="HHPurple"> Log in</Button>
                                    </Link>
                                </>
                            )}

                            {currentUser && (
                                <HamburgerMenu setShow={setShow} handleClose={handleClose}/>
                            )}

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