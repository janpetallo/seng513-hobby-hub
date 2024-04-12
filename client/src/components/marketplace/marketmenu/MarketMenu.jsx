import React, {useEffect, useState} from "react";
import "./MarketMenu.scss";
import HubCategories from "../../../utilities/HubCategories.js";
import {Image, Accordion,Form} from "react-bootstrap";
import star from "../../../assets/marketplace/star.svg";
import unfilledStar from "../../../assets/marketplace/unfilledStar.svg";
import { IoIosClose } from "react-icons/io";

const MarketMenu = ({isDesktop}) => {

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

    // Stored checkmarks in local storage
    const [selectedChecks, setSelectedChecks] = useState(
        JSON.parse(localStorage.getItem('selectedChecks')) || []
    );

    const handleCheckboxChange = (event) => {
        const name = event.target.name;

        // If checked save it to array
        if (event.target.checked) {
            setSelectedChecks([...selectedChecks, name]);

        // If unchecked remove it from array
        } else {
            setSelectedChecks(selectedChecks.filter(cat => cat !== name));
        }
    };

    // If the user hits X on the quick menu they can also remove what they filter for
    const handleRemoveCheck = (categoryToRemove) => {
        setSelectedChecks(selectedChecks.filter(cat => cat !== categoryToRemove));
    };

    // Allows user to clear all the checks
    const handleClearAll = () => {
        setSelectedChecks([]);
    };

    // Store into local storage
    useEffect(() => {
        localStorage.setItem('selectedChecks', JSON.stringify(selectedChecks));
    }, [selectedChecks]);



    return(
        <Accordion flush className={isDesktop? "market-menu" : "mobile-market-menu"}>
            {selectedChecks.length > 0 ? (
                <ul className="market-menu-selections">
                    <li>
                        <button className="text-danger" onClick={handleClearAll}><IoIosClose /> Clear All</button>
                    </li>
                    {selectedChecks.sort().map((item, index) => (
                        <li key={`checked-item-${index}`}>
                            <button onClick={() => handleRemoveCheck(item)}><IoIosClose />{item}</button>
                        </li>
                    ))}
                </ul>
            ):(
                <></>
            )}

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
                                onChange={handleCheckboxChange}
                                checked={selectedChecks.includes(category)}
                            />
                        ))}
                    </Form>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Condition</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        {condition.map((condition, index) => (
                            <Form.Check
                                key={`k-condition-${index}`}
                                type="checkbox"
                                id={`i-condition-${index}`}
                                label={condition}
                                name={condition}
                                onChange={handleCheckboxChange}
                                checked={selectedChecks.includes(condition)}
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
                                onChange={handleCheckboxChange}
                                checked={selectedChecks.includes(pricing)}
                            />
                        ))}
                    </Form>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>Rating</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Form.Check
                            key={`k-rating-5`}
                            type="checkbox"
                            id="rating5-checkbox"
                            name="5 Star"
                            onChange={handleCheckboxChange}
                            checked={selectedChecks.includes("5 Star")}
                            label={
                                <div className="d-flex align-items-center">
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                </div>
                            }
                        />

                        <Form.Check
                            key={`k-rating-4`}
                            type="checkbox"
                            id={"rating4-checkbox"}
                            name={"4 Star"}
                            onChange={handleCheckboxChange}
                            checked={selectedChecks.includes("4 Star")}
                            label={
                                <div className="d-flex align-items-center">
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                </div>
                            }
                        />

                        <Form.Check
                            key={`k-rating-3`}
                            type="checkbox"
                            id="rating3-checkbox"
                            name="3 Star"
                            onChange={handleCheckboxChange}
                            checked={selectedChecks.includes("3 Star")}
                            label={
                                <div className="d-flex align-items-center">
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                </div>
                            }
                        />

                        <Form.Check
                            key={`k-rating-2`}
                            type="checkbox"
                            id="rating2-checkbox"
                            name="2 Star"
                            onChange={handleCheckboxChange}
                            checked={selectedChecks.includes("2 Star")}
                            label={
                                <div className="d-flex align-items-center">
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={star} alt="" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                </div>
                            }
                        />

                        <Form.Check
                            key={`k-rating-1`}
                            type="checkbox"
                            id="rating1-checkbox"
                            name="1 Star"
                            onChange={handleCheckboxChange}
                            checked={selectedChecks.includes("1 Star")}
                            label={
                                <div className="d-flex align-items-center">
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                    <Image src={unfilledStar} alt="" className="rating-stars" />
                                </div>
                            }
                        />
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
export default MarketMenu
