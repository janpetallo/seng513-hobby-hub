import React from "react";
import { useState } from "react";
import {Button, Nav, Navbar, NavDropdown, Offcanvas, Row} from "react-bootstrap";
import {Col, Container, Card, Badge, Image} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import "./MarketplaceSelection.scss"

const MarketplaceSelection = () => {
    const categories = [
        { section: 'Outdoor Activities', markets: ['Gardening', 'Fishing', 'Cycling','Hiking & Camping'] },
        { section: 'Indoor Activites', markets: ['Books', 'Painting'] },
        { section: 'Sports and Fitness', markets: ['Yoga', 'Team Sports', 'Gym Equipment', 'Swimming'] },
        { section: 'Games', markets: ['Board Games', 'Card Games', 'Lego'] },
    ];
    return(
        <>
            <Container >
                {categories.map((category, i) => (
                    <Row key={i} className="mt-2 section-font">
                        {category.section}
                        <Row>
                            {/* <Row id={i} className="font-check"> */}
                            {category.markets.map((market, index) => (
                                <Col xs={4.5} sm={4} md={3.5} lg={3} key={index} className="col-container my-2 me-4 p-2">
                                    <div className="text-center ">
                                        {market}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        {/* </Row> */}
                    </Row>
                ))}
            </Container>

        </>

    )
}
export default MarketplaceSelection