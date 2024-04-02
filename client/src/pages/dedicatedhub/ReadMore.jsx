import React from "react";
import {Col, Row} from "react-bootstrap";
import "./ReadMore.scss"

const ReadMore = () => {

    const description = "Welcome to the dedicated hub for speedrunners! Share your runs," +
        " compete with others and just have an overall great time."

    return (
        <>
            <Row className="read-more-section">
                <Col>
                    <h5>Description</h5>
                    <p>{description}</p>
                </Col>
            </Row>

            <Row className="read-more-section">
                <Col>
                    <h5>Rules</h5>
                    <ol>
                        <li>
                            Respect others
                        </li>
                        <li>
                            Be Civil
                        </li>
                        <li>
                            No toxic posting
                        </li>
                        <li>
                            Have fun
                        </li>
                    </ol>
                </Col>
            </Row>

            <Row className="read-more-section">
                <Col>
                    <h5>Resources</h5>
                    <div>
                        Want to get into speedrunning here are some great links to start:
                        <ul>
                            <li>
                                "https://www.speedrun.com/"
                            </li>

                            <li>
                                "https://livesplit.org/"
                            </li>

                            <li>
                                "https://obsproject.com/"

                            </li>

                            <li>
                                "https://www.xsplit.com/"
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <Row className="read-more-section">
                <Col>
                    <h5>Test too much content can scroll</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dignissimos dolore
                        impedit modi perferendis possimus quia ut voluptates? Animi corporis delectus dolorem eius et
                        illo ipsam minima obcaecati voluptatibus.
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default ReadMore