import React, {useState} from "react";
import "./DedicatedHub.scss"
import Posts from "../../components/desktop/posts/Posts.jsx";
import DedicatedHubHeader from "./DedicatedHubHeader.jsx";
import {Container} from "react-bootstrap";

const DedicatedHub = () => {

    return (
        <div>
            <DedicatedHubHeader/>
            <Posts/>
        </div>

    )
}

export default DedicatedHub