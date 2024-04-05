import React from "react";
import "./NoPostsYet.scss"
import noPostIMG from "../../assets/nopostsyet/nopostsyet.png"
import {Card} from "react-bootstrap";
const NoPostsYet = () => {
    return (
        <div className="no-post-yet-wrapper">
            <Card className="no-post-yet-card">
                <Card.Img src={noPostIMG} alt="No Posts Yet" />
                <Card.ImgOverlay>
                    <Card.Title>No Posts Yet</Card.Title>
                    <Card.Text>
                        Looks like no one has posted here yet, come back later!
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default NoPostsYet