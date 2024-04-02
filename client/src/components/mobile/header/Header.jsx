import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import Logo from "../../../assets/authentication/mobile/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import Hubs from "../../../assets/leftsidemenu/hubs.svg";
import Posts from "../../../assets/leftsidemenu/posts.svg";
import Ads from "../../../assets/leftsidemenu/ads.svg";
import Logout from "../../../assets/leftsidemenu/logout.svg";
import Trades from "../../../assets/leftsidemenu/trades.svg";


const Header = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedMenu, setSelectedMenu] = useState('/'); // default selected menu is home

    const handleMenuClick = (path) => {
        setSelectedMenu(path);
        setShow(false);
    }

    const getMenuItemClass = (path) => {
        return selectedMenu === path ? 'item selected' : 'item';
    }

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
                                <span className="m-navbar-logo-wrapper">
                                    <img className="navbar-logo" src={Logo} alt="HobbyHub"/>
                                </span>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Container fluid className="p-3 left-menu-hamburger mobile-left-menu">
                                <Row>
                                    <Col className="">

                                        <Link to="/myhubs" className="no-link-style" onClick={() => handleMenuClick('/myhubs')}>
                                            <div className={getMenuItemClass('/myhubs')}>
                                                <img src={Hubs} alt="hubs"></img>
                                                <span>My Hubs</span>
                                            </div>
                                        </Link>

                                        <Link to="/myposts" className="no-link-style" onClick={() => handleMenuClick('/myposts')}>
                                            <div className={getMenuItemClass('/myposts')}>
                                                <img src={Posts} alt="hubs"></img>
                                                <span>My Posts</span>
                                            </div>
                                        </Link>

                                        <Link to="/myadstrades" className="no-link-style"  onClick={() => handleMenuClick('/myadstrades')}>
                                            <div className={getMenuItemClass('/myadstrades')} >
                                                <img src={Ads} alt="hubs"></img>
                                                <span>My Ads / Trades</span>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>

                            <Container fluid className="p-3 left-menu-hamburger mobile-left-menu">
                                <Row>
                                    <Col className="mb-3">

                                        <Link to='/editprofile' className="no-link-style" onClick={() => handleMenuClick('/editprofile')}>
                                            <div className={getMenuItemClass('/editprofile')} >
                                                {/* <img src={Trades} alt="hubs"></img> */}
                                                <span>Edit Profile</span>
                                            </div>
                                        </Link>

                                        <Link to="/login" className="no-link-style" onClick={() => handleMenuClick('/login')}>
                                            <div className={getMenuItemClass('/login')}>
                                                <img src={Logout} alt="logout"></img>
                                                <span>Logout</span>
                                            </div>
                                        </Link>

                                        
                                    </Col>
                                </Row>
                            </Container>

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