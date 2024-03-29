import React from "react";
import "./Home.scss"
import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import Posts from "../../components/desktop/posts/Posts.jsx";

const Home = () => {
    return (
        <div className="home">
            <Posts/>
        </div>

    )
}

export default Home