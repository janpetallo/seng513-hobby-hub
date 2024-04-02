import React from "react";
import { useState } from "react";
import {Button, Nav, Navbar, NavDropdown, Offcanvas, Row} from "react-bootstrap";
import {Col, Container, Card, Badge, Image} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import "./SellingItems.scss";
import locationLogo from "../../assets/selling-items/location.svg";
import condition from "../../assets/selling-items/condition.svg";
import rating from "../../assets/selling-items/rating.svg";
import email from "../../assets/selling-items/email.svg";
import number from "../../assets/selling-items/phoneNumber.svg";

const SellingItem = () => {
    return(
        <Container className="border border-5 h-100 w-100">
            <Row md={2} xs={1} >
                <Col className="border border-3 col-length">
                    <div className="contain-image">
                        <Image
                            src="https://crystal-cdn4.crystalcommerce.com/photos/6772128/430px-GyaradosPok%C3%A9monGO22.jpg"
                            className="post-img"
                            fluid
                        />
                    </div>
                </Col>
                <Col className="col-info-color">
                    <div className="d-flex justify-content-between">
                        <h4>Gyarados</h4>
                        <Badge className="badge badge-color d-flex justify-content-center align-items-center">Pokemon</Badge>
                    </div>
                    <p>$3.50</p>
                    <div className="d-flex justify-content-between p-0 mb-0">
                        <div className="d-flex">
                            <Image src={locationLogo} className="logo"/>
                            <p className="info-text">Location</p>
                        </div>
                        <div className="d-flex">
                            <Image src={condition} className="logo"/>
                            <p className="info-text">Open Box</p>
                        </div>
                        <div className="d-flex">
                            <Image src={rating} className="logo"/>
                            <p className="info-text">rating</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Image src={email} className="logo"/>
                        <p className="info-text">email</p>
                    </div>
                    <div className="d-flex">
                        <Image src={number} className="logo"/>
                        <p className="info-text">phone number</p>
                    </div>

                    <h5>Description</h5>
                    <p className="info-text">Description of item</p>
                </Col>
            </Row>
        </Container>

)

}
export default SellingItem
