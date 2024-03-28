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
import {Link} from "react-router-dom";
import CommunitySelection from "../../../pages/community-selection/CommunitySelection";


const LeftMenu = () =>{
    return (
        <Container fluid className="p-3 left-menu">
            <Row>
                <Col className="mb-3">
                    <Link to="/">
                        <div className="item">
                            <img src={Home} alt="home"></img>
                            <span>Home</span>
                        </div>
                    </Link>

                    <Link to="/community-selection" >
                        <div className="item">
                            <img src={Hubs} alt="hubs"></img>
                            <span>Browse Hubs</span>
                        </div>
                    </Link>

                    <Link to="/">
                        <div className="item">
                            <img src={Market} alt="market"></img>
                            <span>Browse Market</span>
                        </div>
                    </Link>

                    <hr className="item divider"/>
                </Col>
            </Row>

            <Row>
                <Col className="mb-3">

                    <Link to="/">
                        <div className="item">
                            <img src={Hubs} alt="hubs"></img>
                            <span>My Hubs</span>
                        </div>
                    </Link>

                    <Link to="/">
                        <div className="item">
                            <img src={Posts} alt="hubs"></img>
                            <span>My Posts</span>
                        </div>
                    </Link>


                    <Link to="/">
                        <div className="item">
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

            <Row>
                <Col>
                    <div className="item">
                    <Button as={Link} to="/choose-posting" className="btn-HHPurple left-post-btn">Post</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LeftMenu