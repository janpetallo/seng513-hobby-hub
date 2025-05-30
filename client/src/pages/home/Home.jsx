import React from "react";
import "./Home.scss"
import Posts from "../../components/desktop/posts/Posts.jsx";
import ItemCards from "../../components/marketplace/itemcards/ItemCards.jsx";
import {Tab, Tabs} from "react-bootstrap";

const Home = () => {

    return (
        <div className="home">
            <Tabs
                defaultActiveKey="hubs"
                className="home-header"
            >
                <Tab eventKey="hubs" title="Hub Corner">
                    <Posts hubTitle={true}/>
                </Tab>
                <Tab eventKey="market" title="Market Corner">
                    <ItemCards/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Home