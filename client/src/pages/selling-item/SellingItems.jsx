import React from "react";
import { useState } from "react";
import {Button, Nav, Navbar, NavDropdown, Offcanvas, Row} from "react-bootstrap";
import {Col, Container, Card, Badge, Image} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import "./SellingItems.scss";
import locationLogo from "../../assets/selling-items/location.svg";
import condition from "../../assets/selling-items/condition.svg";
import rating from "../../assets/selling-items/rating.svg";
import email from "../../assets/selling-items/email.svg";
import number from "../../assets/selling-items/phoneNumber.svg";
import Carousel from "react-bootstrap/Carousel";


const SellingItem = (props) => {
    const {state} = useLocation();
    return(
        <Container className=" h-100 w-100">
            <Row md={2} xs={1} >
                <Col className="col-length">
                    <div className="contain-image" id="selling-carousel">
                        {state.image.length > 1 ? (
                                <Carousel className="selling-item"  slide={false}>
                                    {state.image.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <Card.Img
                                                className="post-img"
                                                src={image}
                                                alt={`Slide ${index}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            ) : //acts as an else
                            <Card.Img variant="top" className="post-img" src={state.image[0]} />
                        }
                    </div>
                </Col>
                <Col className="col-info-color">
                    <div className=" information-hold">

                    <div className="d-flex justify-content-between">
                        <h4>{state.title}</h4>
                        <Badge bg="HHPurple" className="badge d-flex justify-content-center align-items-center">{state.tag}</Badge>
                    </div>
                    <p className="info-text">${state.price}</p>
                    <div className="d-flex justify-content-between p-0 mb-0">
                        <div className="d-flex">
                            <Image src={locationLogo} className="logo"/>
                            <p className="info-text">{state.location}</p>
                        </div>
                        <div className="d-flex">
                            <Image src={condition} className="logo"/>
                            <p className="info-text">{state.condition}</p>
                        </div>
                        <div className="d-flex">
                            <Image src={rating} className="logo"/>
                            <p className="info-text">4.5</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Image src={email} className="logo"/>
                        <p className="info-text">{state.email}</p>
                    </div>
                    <div className="d-flex">
                        <Image src={number} className="logo"/>
                        <p className="info-text">{state.phone}</p>
                    </div>

                    <h5>Description</h5>
                    <p> {state.description}</p>
                    </div>
                </Col>
            </Row>
        </Container>

)

}
export default SellingItem
