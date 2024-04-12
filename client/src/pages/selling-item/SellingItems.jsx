import React from "react";
import {Row, Col} from "react-bootstrap";
import {Badge, Image} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import "./SellingItems.scss";
import locationLogo from "../../assets/selling-items/location.svg";
import condition from "../../assets/selling-items/condition.svg";
import rating from "../../assets/selling-items/rating.svg";
import email from "../../assets/selling-items/email.svg";
import number from "../../assets/selling-items/phoneNumber.svg";
import Carousel from "react-bootstrap/Carousel";

const SellingItem = () => {
    const {state} = useLocation();
    return (
        <Row className="selling-item-wrapper">
            <Col lg={7} xl={8} className="m-0 p-0">
                <div className="item-slider-wrapper">
                    {state.image.length > 1 && (
                        <Carousel interval={null} className="item-image-carousel">
                            {state.image.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="w-100 d-block"
                                        src={image}
                                        alt="Image can't be loaded"
                                    />
                                    <div className="blur-background" style={{ backgroundImage: `url(${image})` }}></div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}

                    {state.image.length === 1 && (
                        <>
                            <img
                                className="w-100 d-block"
                                src={state.image[0]}
                                alt="Image can't be loaded"
                            />
                            <div className="blur-background" style={{ backgroundImage: `url(${state.image[0]})` }}></div>
                        </>
                    )}
                </div>
            </Col>

            <Col lg={5} xl={4} className="m-0 post-details-col">
                <div className="post-details-wrapper">
                    <h3>{state.title}</h3>

                    <h4 className="info-text">${state.price}</h4>

                    <h5>
                        <Badge bg="HHPurple">{state.tag}</Badge>
                    </h5>

                    <div className="item-icon">
                        <Image src={condition} className="logo"/>
                        <span className="info-text">{state.condition}</span>
                    </div>

                    <hr/>
                    <h5>Seller Information</h5>
                    <div className="item-icon">
                        <Image src={email} className="logo"/>
                        <span className="info-text">{state.email}</span>
                    </div>

                    <div className="item-icon">
                        <Image src={number} className="logo"/>
                        <span className="info-text">{state.phone}</span>
                    </div>

                    <div className="item-icon">
                        <Image src={locationLogo} className="logo"/>
                        <span className="info-text">{state.location}</span>
                    </div>

                    {/*<div className="item-icon">*/}
                    {/*    <Image src={rating} className="logo"/>*/}
                    {/*    <span className="info-text">4.5</span>*/}
                    {/*</div>*/}

                    <hr/>
                    <h5>Description</h5>
                    <div>
                        <p>
                            {state.description}
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
export default SellingItem
