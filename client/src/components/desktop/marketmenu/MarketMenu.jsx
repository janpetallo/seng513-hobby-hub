import React, {useState} from "react";
import {Button, Col, Container, Row, Dropdown, Image} from "react-bootstrap";
import {IoPersonSharp} from "react-icons/io5";
import "./MarketMenu.scss";
import star from "../../../assets/marketplace/star.svg";
import unfilledStar from "../../../assets/marketplace/unfilledStar.svg";
import dropdownLogo from "../../../assets/marketplace/dropdownLogo.svg";

const MarketMenu = () => {

    return(


        <Container fluid>
            <div className="d-flex justify-content-center fw-bold">Filter</div>
            <Row >
                <div className="store-filter">
                <button className="button market-button" id="button-menu">
                    Type
                    <Image src={dropdownLogo} className="drop-logo"/>
                </button>
                </div>
                <div className="store-filter">
                    <button className="button market-button" id="button-menu">Price
                        <Image src={dropdownLogo} className="drop-logo"/>
                    </button>
                </div>
                    <div className="store-filter">
                        <button className="button market-button" id="button-menu">Location
                            <Image src={dropdownLogo} className="drop-logo"/>
                        </button>
                    </div>
                    <div className="store-filter">
                        <button className="button market-button mb-1" id="button-menu">Rating
                            <Image src={dropdownLogo} id="flip-dropdown" className="drop-logo"
                            />
                        </button>

                        <div className="w-100 m-0">
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                        </div>
                        <div className="w-100 m-0">
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                        </div>
                        <div className="w-100 m-0">
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                        </div>
                        <div className="w-100 m-0">
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                        </div>
                        <div className="w-100 m-0">
                            <Image src={star} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                            <Image src={unfilledStar} alt="rating" className="rating-stars"/>
                        </div>
                    </div>

            </Row>

        </Container>

)

}
export default MarketMenu