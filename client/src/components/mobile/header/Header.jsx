import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import Logo from "../../../assets/authentication/mobile/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import Hubs from "../../../assets/leftsidemenu/hubs.svg";
import Posts from "../../../assets/leftsidemenu/posts.svg";
import Ads from "../../../assets/leftsidemenu/ads.svg";
import Trades from "../../../assets/leftsidemenu/trades.svg";


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
                        <Row>
                            <Col className="mb-3">

                                <Link to="/" onClick={() => handleMenuClick('/')}>
                                    <div className="item">
                                        <img src={Hubs} alt="hubs"></img>
                                        <span>My Hubs</span>
                                    </div>
                                </Link>

                                <Link to="/" onClick={() => handleMenuClick('/')}>
                                    <div className="item">
                                        <img src={Posts} alt="hubs"></img>
                                        <span>My Posts</span>
                                    </div>
                                </Link>

                                <Link to="/">
                                    <div className="item" onClick={() => handleMenuClick('/')}>
                                        <img src={Ads} alt="hubs"></img>
                                        <span>My Ads</span>
                                    </div>
                                </Link>

                                <Link to="/">
                                    <div className="item">
                                        <img src={Trades} alt="hubs"></img>
                                        <span>My Trades</span>
                                    </div>
                                </Link>

                                <hr className="item divider"/>
                            </Col>
                        </Row>
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