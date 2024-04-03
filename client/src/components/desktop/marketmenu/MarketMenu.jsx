import React, {useState} from "react";
import {Button, Col, Container, Row, Dropdown, Image, Accordion} from "react-bootstrap";
import {IoPersonSharp} from "react-icons/io5";
import "./MarketMenu.scss";
import star from "../../../assets/marketplace/star.svg";
import unfilledStar from "../../../assets/marketplace/unfilledStar.svg";
import dropdownLogo from "../../../assets/marketplace/dropdownLogo.svg";

const MarketMenu = () => {

    return(


        <Container fluid>
            <div className="d-flex justify-content-center fw-bold fs-4">Filter</div>
            <Row >
                <Accordion className="menu-accordion" flush>
                    <Accordion.Item eventKey="0" className="mb-5 mt-5">
                        <Accordion.Header className="menu-header">Type</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mb-5">
                        <Accordion.Header>Price</Accordion.Header>
                        <Accordion.Body>
                           <div>

                           </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mb-5">
                        <Accordion.Header>Location</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mb-5 border-bottom">
                        <Accordion.Header>Rating</Accordion.Header>
                        <Accordion.Body>
                            <div className="w-100 mb-1">
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                            </div>
                            <div className="w-100 mb-1">
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            </div>
                            <div className="w-100 mb-1">
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            </div>
                            <div className="w-100 mb-1">
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            </div>
                            <div className="w-100 mb-1">
                                <Image src={star} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                                <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>

        </Container>

    )

}
export default MarketMenu