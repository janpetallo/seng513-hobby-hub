import React from "react";
import {Col, Row} from "react-bootstrap";
import "./ReadMore.scss"

const ReadMore = ({Description, Rules, Resources}) => {

    return (
        <>
            <Row className="read-more-section">
                <Col>
                    <h5>Description</h5>
                    <div className="RM-hubDescription" dangerouslySetInnerHTML={{ __html: Description }} />
                </Col>
            </Row>

            <Row className="read-more-section">
                <Col>
                    <h5>Rules</h5>
                    <div className="RM-HubRules" dangerouslySetInnerHTML={{ __html: Rules }} />
                </Col>
            </Row>

            <Row className="read-more-section">
                <Col>
                    <h5>Resources</h5>
                    <div className="RM-hubResource" dangerouslySetInnerHTML={{ __html: Resources }} />
                </Col>
            </Row>

        </>
    )
}

export default ReadMore