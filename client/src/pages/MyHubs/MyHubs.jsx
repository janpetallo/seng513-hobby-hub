import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./MyHubs.scss"

const MyHubs = () => {
    const categories = [
        { name: 'Outdoors', hubs: ['Mushroom Hunters', 'Fishing', 'Hiking'] },
        { name: 'Indoors', hubs: ['Books', 'Painting'] },
        { name: 'Cards', hubs: ['Pokemon', 'Yu-Gi-Oh'] },
        { name: 'Games', hubs: ['League of Legends', 'Game of Life', 'Elden Ring'] },
    ];


    return (
        <Container className="pt-4 ps-5 pe-5">
            <h1>My Hubs</h1>
            <p>Find all your hubs here!</p>
            <hr/>
            {categories.map((category, i) => (
                <Row key={i} className="ps-3 pe-3 section-bold">
                    {category.name}
                    <Row>
                        {category.hubs.map((hub, index) => (
                            <Col xs={4.5} sm={4} md={3.5} lg={3} key={index} className="col-container my-2 me-4 p-2">
                                <div className="text-center ">
                                    <Link className='hub-card-link' to={`/${hub.replace(' ', '')}`}>
                                        {hub}
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Row>
            ))}
        </Container>
    )
}

export default MyHubs