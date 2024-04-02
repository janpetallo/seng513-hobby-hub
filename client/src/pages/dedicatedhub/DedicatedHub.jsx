import React from "react";
import "./DedicatedHub.scss"
import Posts from "../../components/desktop/posts/Posts.jsx";
import DedicatedHubHeader from "./DedicatedHubHeader.jsx";

const DedicatedHub = () => {

    return (
        <>
            <DedicatedHubHeader/>
            <Posts/>
        </>

    )
}

export default DedicatedHub