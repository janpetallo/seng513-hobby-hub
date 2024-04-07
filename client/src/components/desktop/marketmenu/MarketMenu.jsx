import React, {useState} from "react";
import {Button, Col, Container, Row, Dropdown, Image, Accordion,Form} from "react-bootstrap";
import "./MarketMenu.scss";
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
    
    return(


        <Container fluid className="market-menu">
            <h3 className="d-flex justify-content-center align-items-center mt-3">Filter</h3>            <Row>
            <Accordion className="menu-accordion" flush>
                    <Accordion.Item eventKey="0" className="mb-5 mt-3">
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
                            <Form>
                                <div className="w-100 mb-1 d-flex align-items-center">
                                    <Form.Check
                                        type="checkbox"
                                        id="rating5-checkbox"
                                        name="rating5"
                                        checked={ratings.rating5}
                                        onChange={handleCheckboxChange}
                                        className="me-2"
                                    />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                </div>
                                <div className="w-100 mb-1 d-flex align-items-center">
                                    <Form.Check
                                        type="checkbox"
                                        id="rating4-checkbox"
                                        name="rating4"
                                        checked={ratings.rating4}
                                        onChange={handleCheckboxChange}
                                        className="me-2"
                                    />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                </div>
                                <div className="w-100 mb-1 d-flex align-items-center">
                                    <Form.Check
                                        type="checkbox"
                                        id="rating3-checkbox"
                                        name="rating3"
                                        checked={ratings.rating3}
                                        onChange={handleCheckboxChange}
                                        className="me-2"
                                    />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                </div>
                                <div className="w-100 mb-1 d-flex align-items-center">
                                    <Form.Check
                                        type="checkbox"
                                        id="rating2-checkbox"
                                        name="rating2"
                                        checked={ratings.rating2}
                                        onChange={handleCheckboxChange}
                                        className="me-2"
                                    />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                </div>
                                <div className="w-100 mb-1 d-flex align-items-center">
                                    <Form.Check
                                        type="checkbox"
                                        id="rating1-checkbox"
                                        name="rating1"
                                        checked={ratings.rating1}
                                        onChange={handleCheckboxChange}
                                        className="me-2"
                                    />
                                    <Image src={star} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                    <Image src={unfilledStar} alt="rating" className="rating-stars" />
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
        </Row>
            <div className="w-100 d-flex justify-content-center">
                <div className="d-flex justify-content-between hold-button mt-4">
                    <Button className="menu-button border-0">Reset</Button>
                    <Button className="menu-button">Apply</Button>
                </div>
            </div>
        </Container>

    )

}
export default MarketMenu