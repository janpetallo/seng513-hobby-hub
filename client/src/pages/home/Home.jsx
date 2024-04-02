import React from "react";
import "./Home.scss"
import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import Posts from "../../components/desktop/posts/Posts.jsx";
import HubMarketNavbar from "../marketplace/HubMarketNavbar.jsx";

const Home = () => {
    return (
        <div className="home">
            <HubMarketNavbar/>
            <Posts hubTitle={true}/>
        </div>
    )
}

export default Home