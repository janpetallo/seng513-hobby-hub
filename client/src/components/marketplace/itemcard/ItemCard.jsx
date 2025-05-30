import React from "react";
import "./ItemCard.scss"
import {Badge, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const ItemCard = ({item}) => {

    return (
        <Link to="/selling-item" className="remove-styling" state={item}>
            <Card className="card-market">
                {item.img.length > 1 ? (
                        <Carousel className="menu-carousel" slide={false}>
                            {item.img.map((image, index) => (
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
                    <Card.Img variant="top" className="card-img-resize" src={item.img[0]} />
                }
                <Card.Body className="p-2 m-0">
                    <Card.Title className="card-market-title m-0">{item.title}</Card.Title>
                    <Badge bg="HHPurple" className="badge" id="badge-color">{item.category}</Badge>
                    <Card.Text className="card-market-text fw-bold">C${item.price}</Card.Text>
                    <Card.Text className="card-market-text ">{item.location}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default ItemCard
