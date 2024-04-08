import React, {useEffect, useRef, useState} from "react";
import "./NavBar.scss"
import {Button, Navbar, Nav, Offcanvas, Container, Form, Row, Col,Dropdown} from 'react-bootstrap';
import LeftMenu from "../leftmenu/LeftMenu.jsx";
import {useMediaQuery} from "react-responsive";
import Logo from "../../../assets/authentication/mobile/logo.svg"
import Search from "../../../assets/navbar/search.svg"
import {Link, useNavigate} from "react-router-dom";
import ProfileToggle from "../../ProfileToggle/ProfileToggle.jsx";

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


    // Search bar
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Hubs');
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search-results/search?query=${searchQuery}&category=${selectedCategory}`);
    };

     // handles the enter key being pressed when we are performing a search
    const handleEnterSearch = (event) => {
        // key 13 is the enter key
        if (event.keyCode === 13) {
        handleSearchSubmit(event);
        }
    }



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

                                {/* <Form.Control type="text" placeholder="Search HobbyHub..."></Form.Control>

                                <Button className="d-search-btn" variant="HHPurple">Search</Button>

                                <div className="search-dropdown"  id="search-dropdown">
                                    <span className="ms-2">Search in:  </span>
                                    <label><input type="radio" name="searchSelection" value="Hubs" defaultChecked/> Hubs</label>
                                    <label><input type="radio" name ="searchSelection" value="Market"/> Market</label>
                                </div>   */}

                                {/* <Form onSubmit={handleSearchSubmit}> */}
                                    <Form.Control type="text" placeholder="Search HobbyHub..." value={searchQuery} onChange={handleSearchChange} onKeyDown={handleEnterSearch} />

                                    <Button className="d-search-btn" variant="HHPurple" type="submit" onClick={handleSearchSubmit} > Search</Button>

                                    <div className="search-dropdown"  id="search-dropdown">
                                        <span className="ms-2">Search in:  </span>
                                        <label><input type="radio" name="searchSelection" value="Hubs" checked={selectedCategory === 'Hubs'} onChange={handleCategoryChange} /> Hubs</label>
                                        <label><input type="radio" name="searchSelection" value="Market" checked={selectedCategory === 'Market'} onChange={handleCategoryChange} /> Market</label>
                                    </div>
                                {/* </Form> */}
                            </div>

                            <ProfileToggle/>

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