import React from "react";
import "./LeftMenu.scss"
import {Button, Col, Container, Row} from "react-bootstrap";
import Home from "../../../assets/leftsidemenu/home.svg";
import Hubs from "../../../assets/leftsidemenu/hubs.svg";
import Market from "../../../assets/leftsidemenu/market.svg";
import Posts from "../../../assets/leftsidemenu/posts.svg";
import Ads from "../../../assets/leftsidemenu/ads.svg";
import Trades from "../../../assets/leftsidemenu/trades.svg";
import Logo from "../../../assets/authentication/mobile/logo.svg"


const LeftMenu = () =>{
    return (
        <Container fluid className="d-flex flex-column p-3 left-menu">
            <Row className="d-xl-none mb-3">
                <Col className="d-flex align-items-center justify-content-center">
                    <img className="navbar-logo" src={Logo} alt="HobbyHub"/>
                </Col>
                <hr className="item divider"/>
            </Row>

            <Row>
                <Col className="mb-3">
                    <a className="left-links" href="/">
                        <div className="item">
                            <img src={Home} alt="home"></img>
                            <span>Home</span>
                        </div>
                    </a>

                    <a className="left-links" href="/">
                        <div className="item">
                            <img src={Hubs} alt="hubs"></img>
                            <span>Browse Hubs</span>
                        </div>
                    </a>

                    <a className="left-links" href="/">
                        <div className="item">
                            <img src={Market} alt="market"></img>
                            <span>Browse Market</span>
                        </div>
                    </a>

                    <hr className="item divider"/>
                </Col>
            </Row>

            <Row>
                <Col className="mb-3">

                    <a className="left-links" href="/">
                        <div className="item">
                            <img src={Hubs} alt="hubs"></img>
                            <span>My Hubs</span>
                        </div>
                    </a>

                    <a className="left-links" href="/">
                        <div className="item">
                            <img src={Posts} alt="hubs"></img>
                            <span>My Posts</span>
                        </div>
                    </a>


                    <a className="left-links" href="/">
                        <div className="item">
                            <img src={Ads} alt="hubs"></img>
                            <span>My Ads</span>
                        </div>

                    </a>

                    <a className="left-links" href="/">
                        <div className="item">
                            <img src={Trades} alt="hubs"></img>
                            <span>My Trades</span>
                        </div>
                    </a>

                    <hr className="item divider"/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="item">
                        <Button className="btn-HHPurple left-post-btn">Post</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LeftMenu