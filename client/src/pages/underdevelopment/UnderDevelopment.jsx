import React from "react";
import "./UnderDevelopment.scss"
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const UnderDevelopment = () =>{
    return (
        <Container fluid className="notfound-container">
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center notfound-col">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-white fw-bolder">This Page Is Under Development</h1>
                        <h1 className="text-white fw-bolder">Some Journey Too Far Into The Great Unknown.</h1>
                        <h1 className="text-white fw-bolder">There Is Nothing Here For You.</h1>
                        <Link to="/login"><h2 className="text-white fw-bolder">It Is Time To Return To Your World!</h2></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default UnderDevelopment