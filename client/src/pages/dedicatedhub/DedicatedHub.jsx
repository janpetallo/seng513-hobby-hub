import React, {useEffect, useState} from "react";
import "./DedicatedHub.scss"
import Posts from "../../components/desktop/posts/Posts.jsx";
import DedicatedHubHeader from "./DedicatedHubHeader.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const DedicatedHub = () => {

    // navigation hook
    const navigate = useNavigate();

    // get the hub name passed to dedicated hub when clicking on the hub
    const location = useLocation();
    const hub = location.state?.hub;

    // make sure hub data is present otherwise the user is trying to load /hubs manually instead of through the menu
    // so navigate back to the home page to prevent errors
    if (!hub) {
        navigate("/");
    }


    return (
        <>
            <DedicatedHubHeader hub={hub}/>
            <Posts showKebab={true} postAll={false} hubPosts={true} hubName={hub}/>
        </>

    )
}

export default DedicatedHub