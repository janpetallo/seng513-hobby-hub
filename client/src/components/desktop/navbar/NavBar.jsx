import React, {useEffect, useRef, useState} from "react";
import "./NavBar.scss"
import {Button, Navbar, Nav, Offcanvas, Container, Form, Row, Col} from 'react-bootstrap';
import LeftMenu from "../leftmenu/LeftMenu.jsx";
import {useMediaQuery} from "react-responsive";
import Logo from "../../../assets/authentication/mobile/logo.svg"
import Search from "../../../assets/navbar/search.svg"
import {Link} from "react-router-dom";

const NavBar = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const handleClose = () => setShowSidebar(false);
    const handleShow = () => setShowSidebar(!showSidebar);

    const matches = useMediaQuery({query: `(min-width: 1200px)`});

    useEffect(() => {
        if (matches) {
            setShowSidebar(false);
        }
    }, [matches]);

    const [searchVisible, setSearchVisible] = useState(false);
    const [prevSearchVisible, setPrevSearchVisible] = useState(false);
    const searchRef = useRef(null);
    const isBelow991px = useMediaQuery({
        query: '(max-width: 991px)'
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSearchToggle = () => {
        setSearchVisible(!searchVisible);
    };

    useEffect(() => {
        if (!isBelow991px && prevSearchVisible) {
            setSearchVisible(false);
        }
        setPrevSearchVisible(searchVisible);
    }, [isBelow991px, prevSearchVisible, searchVisible]);

    return (
        <>
            {/* Navbar */}
            <Navbar expand="xl" className="bg-white fixed-top desktop-navbar">
                <Container fluid>
                    <Row className="w-100">
                        <Col className="d-flex align-items-center justify-content-between">
                            <div>
                                <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav"
                                               onClick={handleShow}/>

                                <Navbar.Brand className="me-auto ms-3">
                                    <Link to={"/"}>
                                        <img className="navbar-logo" src={Logo} alt="HobbyHub"/>
                                    </Link>
                                </Navbar.Brand>
                            </div>

                            <div ref={searchRef} className={`d-searchbar ${searchVisible && isBelow991px ? 'search-visible' : ''}`}>

                                <button className="search-icon" onClick={handleSearchToggle}>
                                    <img src={Search} alt="search" />
                                </button>

                                <Form.Control type="text" placeholder="Search HobbyHub..."></Form.Control>

                                
                                <Button className="d-search-btn" variant="HHPurple">Search</Button>
                                <div className="search-dropdown"  id="search-dropdown">
                                    <span>Search in:  </span>
                                    <label><input type="radio" value="Hubs" defaultChecked/> Hubs</label>
                                    <label><input type="radio" value="Market"/> Market</label>
                                </div>  
                            </div>

                            <Button variant="HHPurple"> Log in</Button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>

            {/* Sidebar */}
            <Offcanvas show={showSidebar} onHide={handleClose} scroll={true} backdrop={true} className="home-sidebar">
                <Offcanvas.Header closeButton className="offcanvas-header">
                    <img className="sidebar-logo" src={Logo} alt="HobbyHub"/>
                </Offcanvas.Header>
                <Offcanvas.Body className="m-0 p-0 test">
                    <Nav className="flex-column">
                        <LeftMenu/>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NavBar