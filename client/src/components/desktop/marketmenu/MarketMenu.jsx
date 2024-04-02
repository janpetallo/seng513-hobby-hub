import React, {useState} from "react";
import {Button, Col, Container, Row, Dropdown} from "react-bootstrap";
import {IoPersonSharp} from "react-icons/io5";

const MarketMenu = () => {

    return(


        <Container fluid className="right-menu border border-5">
            <Row className="right-menu-section border">
                <Dropdown className="d-inline mx-2" autoClose="outside">
                    <Dropdown.Toggle id="dropdown-autoclose-outside">
                        Clickable Inside
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <Row className="right-menu-section border">
                <Dropdown className="d-inline mx-2" autoClose="outside">
                    <Dropdown.Toggle id="dropdown-autoclose-outside">
                        Clickable Inside
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </Row>

        </Container>

    )

}
export default MarketMenu