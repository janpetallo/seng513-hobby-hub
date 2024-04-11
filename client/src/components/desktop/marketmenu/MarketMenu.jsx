import React, {useState} from "react";
import "./MarketMenu.scss";
import HubCategories from "../../../utilities/HubCategories.js";

import {Button, Col, Container, Row, Dropdown, Image, Accordion,Form} from "react-bootstrap";

import star from "../../../assets/marketplace/star.svg";
import unfilledStar from "../../../assets/marketplace/unfilledStar.svg";

const MarketMenu = () => {
    const [ratings, setRatings] = useState({
        rating1: false,
        rating2: false,
        rating3: false,
        rating4: false,
        rating5: false,
    });

    // Handler function to update the state when a checkbox is toggled
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setRatings((prevRatings) => {
            // Update the state with the new value
            const updatedRatings = { ...prevRatings, [name]: checked };
            console.log('Updated Ratings:', updatedRatings);
            return updatedRatings;
        });
    };

    const priceFilter = [
        "Low-High",
        "High-Low"
    ]

    const condition = [
        "New",
        "Used/Pre-owned",
        "Damaged/For Parts",
        "Like New"
    ]

    return(
        <Accordion flush className="market-menu">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Categories</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        {HubCategories.map((category, index) => (
                            <Form.Check
                                key={`k-category-${index}`}
                                type="checkbox"
                                id={`i-category-${index}`}
                                label={category}
                                name={category}
                            />
                        ))}
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        {priceFilter.map((pricing, index) => (
                            <Form.Check
                                key={`k-pricing-${index}`}
                                type="checkbox"
                                id={`i-pricing-${index}`}
                                label={pricing}
                                name={pricing}
                            />
                        ))}
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Location</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Rating</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <div className="d-flex align-items-center mb-1">
                            <Form.Check
                                type="checkbox"
                                id="rating5-checkbox"
                                name="rating5"
                                checked={ratings.rating5}
                                onChange={handleCheckboxChange}
                                className="me-2"
                            />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                        </div>
                        <div className="mb-1 d-flex align-items-center">
                            <Form.Check
                                type="checkbox"
                                id="rating4-checkbox"
                                name="rating4"
                                checked={ratings.rating4}
                                onChange={handleCheckboxChange}
                                className="me-2"
                            />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                        </div>
                        <div className="mb-1 d-flex align-items-center">
                            <Form.Check
                                type="checkbox"
                                id="rating3-checkbox"
                                name="rating3"
                                checked={ratings.rating3}
                                onChange={handleCheckboxChange}
                                className="me-2"
                            />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                        </div>
                        <div className="mb-1 d-flex align-items-center">
                            <Form.Check
                                type="checkbox"
                                id="rating2-checkbox"
                                name="rating2"
                                checked={ratings.rating2}
                                onChange={handleCheckboxChange}
                                className="me-2"
                            />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={star} alt="" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                        </div>
                        <div className="mb-1 d-flex align-items-center">
                            <Form.Check
                                type="checkbox"
                                id="rating1-checkbox"
                                name="rating1"
                                checked={ratings.rating1}
                                onChange={handleCheckboxChange}
                                className="me-2"
                            />
                            <Image src={star} alt="rating" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                            <Image src={unfilledStar} alt="" className="rating-stars" />
                        </div>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Condition</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        {condition.map((pricing, index) => (
                            <Form.Check
                                key={`k-condition-${index}`}
                                type="checkbox"
                                id={`i-condition-${index}`}
                                label={pricing}
                                name={pricing}
                            />
                        ))}
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
export default MarketMenu
