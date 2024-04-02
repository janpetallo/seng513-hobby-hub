import React from "react";
import "./NavBar.scss"
import {Col, Container, Row, Dropdown, Modal, Button} from "react-bootstrap";
import Home from "../../../assets/mobilenavbar/home.svg"
import Create from "../../../assets/mobilenavbar/create.svg"
import Hubs from "../../../assets/mobilenavbar/hubs.svg"
import Market from "../../../assets/mobilenavbar/market.svg"
import Search from "../../../assets/mobilenavbar/search.svg"
import HomeFilled from "../../../assets/leftsidemenu/home.svg";
import HubsFilled from "../../../assets/leftsidemenu/hubs.svg";
import MarketFilled from "../../../assets/leftsidemenu/market.svg";
import SearchFilled from "../../../assets/mobilenavbar/search-filled.svg";
import {Link, useLocation} from "react-router-dom";

const NavBar = () =>{
    const location = useLocation();
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container className="bg-white fixed-bottom mobile-nav">
            <Row>
                <Col className="d-flex justify-content-evenly mt-2 mb-2 p-1">

                    <Link to="/" className="mobile-links">
                        <div className="mobile-items">
                            <img src={location.pathname === '/' ? HomeFilled : Home} alt="Home"/>
                        </div>
                    </Link>

                    <Link to="/search-menu" className="mobile-links">
                        <div className="mobile-items">
                            <img src={location.pathname === '/search-menu' ? SearchFilled : Search} alt="Search"/>
                        </div>
                    </Link>

                    {/* <Link to="/create-hub" className="mobile-links">
                        <div className="mobile-items mobile-create ">
                            <img src={Create} alt="Create"/>
                        </div>
                    </Link> */}

                    <Dropdown>
                        <Dropdown.Toggle id="create-dropdown-custom">
                            <div className="mobile-items mobile-create ">
                                <img src={Create} alt="Create"/>
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu id="create-menu">
                            <Dropdown.Item className="create-item" as={Link} to="/create-hub">Create New Hub</Dropdown.Item>
                            <Dropdown.Item className="create-item" as={Link} to="/hubpost">Post to Hubs</Dropdown.Item>
                            <Dropdown.Item className="create-item" as={Link} to="/create-post-market">Post to Market</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Link to="/community-selection" className="mobile-links">
                        <div className="mobile-items">
                            <img src={location.pathname === '/community-selection' ? HubsFilled : Hubs} alt="Hubs"/>
                        </div>
                    </Link>

                    <Link to="/marketplace-selection" className="mobile-links">
                        <div className="mobile-items">
                            <img src={location.pathname === '/marketplace-selection' ? MarketFilled : Market} alt="Market"/>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default NavBar