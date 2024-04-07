import React, {useState} from "react";
import "./HamburgerMenu.scss"
import {Col, Container, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import Hubs from "../../../assets/leftsidemenu/hubs.svg";
import Posts from "../../../assets/leftsidemenu/posts.svg";
import Ads from "../../../assets/leftsidemenu/ads.svg";
import Logout from "../../../assets/leftsidemenu/logout.svg";
import profileDefault from "../../../assets/profiletoggle/Default_pfp.svg"
import newRequest from "../../../utilities/newRequest.js";

const HamburgerMenu = ({handleClose}) => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const getMenuItemClass = (path) => {
        return location.pathname === path ? 'item selected' : 'item';
    }

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout")
            // localStorage.setItem("currentUser", null);
            localStorage.removeItem("currentUser");
            handleClose();
            navigate("/");

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Row className="p-3 left-menu-hamburger mobile-left-menu">
                <Col>
                    <Link to='/editprofile' className="no-link-style" onClick={handleClose}>
                        <div className={getMenuItemClass('/editprofile')}>
                            <img
                                src={currentUser.img || profileDefault}
                                alt="Profile Image"
                                className="nav-profilePic profile-image-mobile"
                            />
                            <span> Max123
                                <br></br>
                                <span className="edit-profile-mobile">View Profile</span>
                            </span>
                        </div>
                    </Link>
                </Col>
            </Row>

            <Row className="p-3 left-menu-hamburger mobile-left-menu">
                <Col>
                    <Link to="/myhubs" className="no-link-style" onClick={handleClose}>
                        <div className={getMenuItemClass('/myhubs')}>
                            <img src={Hubs} alt="hubs"></img>
                            <span>My Hubs</span>
                        </div>
                    </Link>

                    <Link to="/myposts" className="no-link-style" onClick={handleClose}>
                        <div className={getMenuItemClass('/myposts')}>
                            <img src={Posts} alt="hubs"></img>
                            <span>My Posts</span>
                        </div>
                    </Link>

                    <Link to="/myadstrades" className="no-link-style" onClick={handleClose}>
                        <div className={getMenuItemClass('/myadstrades')}>
                            <img src={Ads} alt="hubs"></img>
                            <span>My Ads / Trades</span>
                        </div>
                    </Link>
                </Col>
            </Row>

            <Row className="p-3 left-menu-hamburger mobile-left-menu">
                <Col className="mb-3">
                    <div className="no-link-style" onClick={handleLogout}>
                        <div className={getMenuItemClass('/login')}>
                            <img src={Logout} alt="logout"></img>
                            <span>Logout</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default HamburgerMenu