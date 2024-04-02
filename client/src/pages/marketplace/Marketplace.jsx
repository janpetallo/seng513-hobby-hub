import React from "react";
import { useState } from "react";
import {Button, Nav, Navbar, NavDropdown, Offcanvas, Row} from "react-bootstrap";
import {Col, Container, Card, Badge,Image} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import "./Marketplace.scss";
import star from "../../assets/marketplace/star.svg";

const Marketplace = () => {

    const [cards] = useState([
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            description: "The Hobbit",
            image:"https://resizing.flixster.com/fHUZr99k4HWii_jJwo4cA4v0Bb8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8992211_p_v8_bh.jpg",
            price: 100,
            condition:"New",
            tag:"Electronics",
            location:"Location 1"
        },
        {
            username: "user2",
            email:"user1@email.com",
            phone:1234567890,
            description: "Gyarados",
            image:"https://crystal-cdn4.crystalcommerce.com/photos/6772128/430px-GyaradosPok%C3%A9monGO22.jpg",
            price: 3.50,
            condition:"New",
            tag:"Pokemon",
            location:"Location 1"
        },
        {
            username: "user3",
            email:"user1@email.com",
            phone:1234567890,
            description: "Mushroom of the Woods",
            image:"https://www.nrafamily.org/media/rfziyd0g/mushroom-foraging-lede.jpg",
            price: 3.50,
            condition:"New",
            tag:"Mushroom Hunters",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            description: "Fishing Rod",
            image:"https://www.discoverboating.com/sites/default/files/how-to-fish-for-beginners.jpg",
            price: 25.50,
            condition:"New",
            tag:"Fishing",
            location:"Location 1"
        },
        {
            username: "user1",
            email:"user1@email.com",
            phone:1234567890,
            description: "Baseball Gloves",
            image:"https://sportsreplay.ca/cdn/shop/products/Wilson-A700-Baseball-Glove-Wilson-Sports-Replay-Sports-Excellence_940x.jpg?v=1682004023",
            price: 15.50,
            condition:"New",
            tag:"Baseball",
            location:"Location 1"
        }
    ])


    return(

        <Container>

            <Row lg={3}  sm={2} xs={1} className="my-4">
                {cards.map((card, i) => (
                    <Col className="mb-4 d-flex justify-content-center align-items-stretch" key={i}>
                        <div className="card-deck">
                            <Link to="sellingItems" state={card} className="card-deck p-0 m-0 remove-styling">
                            <Card className="card-market">
                                <Card.Img variant="top" className="card-img card-img-resize" src={card.image}  height={200} />
                                <Card.Body className="p-0 m-0" style={{ height: '100%' }}>
                                    <Card.Title className="card-market-title m-0">{card.description}</Card.Title>
                                    <Badge bg="HHPurple" className="badge" id="badge-color">{card.tag}</Badge>
                                    <div className="d-flex justify-content-between p-0 mb-0">
                                        <Card.Text className="card-market-text fw-bold">C${card.price}</Card.Text>
                                        <div className="d-flex">
                                            <Image src={star} alt="star" className="star-rating"/>
                                            <Card.Text className="card-market-text">3.5</Card.Text>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between p-0 mt-0">
                                        <Card.Text className="card-market-text">By: <Link>{card.username}</Link></Card.Text>
                                        <Card.Text className="card-market-text fw-bold">{card.location}</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}
export default Marketplace