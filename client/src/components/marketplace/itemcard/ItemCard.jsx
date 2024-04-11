import React from "react";
import "./ItemCard.scss"
import {Badge, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import star from "../../../assets/marketplace/star.svg"

const ItemCard = ({item}) => {

    return (
        <Link to="/selling-item" className="remove-styling">
            <Card className="card-market">
                {item.image.length > 1 ? (
                        <Carousel className="menu-carousel" slide={false}>
                            {item.image.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <Card.Img
                                        className="d-block w-100 card-img card-img-resize"
                                        src={image}
                                        alt={`Slide ${index}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    ) : //acts as an else
                    <Card.Img variant="top" className="card-img-resize" src={item.image[0]} />
                }
                <Card.Body className="p-2 m-0">
                    <Card.Title className="card-market-title m-0">{item.title}</Card.Title>
                    <Badge bg="HHPurple" className="badge" id="badge-color">{item.tag}</Badge>
                    <div className="d-flex justify-content-between p-0 mb-0">
                        <Card.Text className="card-market-text fw-bold">C${item.price}</Card.Text>
                        <div className="d-flex">
                            <img src={star} alt="star" className="star-rating"/>
                            <Card.Text className="card-market-text">3.5</Card.Text>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between p-0 mt-0">
                        <Card.Text className="card-market-text fw-bold">By:{item.username}</Card.Text>
                        <Card.Text className="card-market-text fw-bold">{item.location}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default ItemCard
