import React, {useEffect, useState} from "react";
import "./DedicatedHub.scss"
import Posts from "../../components/desktop/posts/Posts.jsx";
import DedicatedHubHeader from "./DedicatedHubHeader.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import newRequest from "../../utilities/newRequest.js";

const DedicatedHub = () => {

    // get the hub name passed to dedicated hub when clicking on the hub
    const location = useLocation();
    const hub = location.state?.hub;

    const [hubData, setHubData] = useState();

    // navigation hook
    const navigate = useNavigate();

    useEffect(() => {
        // make sure hub data is present otherwise the user is trying to load /hubs manually instead of through the menu
        // so navigate back to the home page to prevent errors
        const fetchHubData = async () => {
            try {
                if (!hub) {
                    navigate("/");
                } else {
                    const response = await newRequest.get(`/hubs/getHub/${hub}`);
                    if (response.status === 200) {
                        setHubData(response.data);
                    } else {
                        throw new Error(`Failed to fetch hub data. Status: ${response.status}`);
                    }
                }
            } catch (error) {
                // upon error log the error and navigate back home
                console.log(error);
                navigate("/");
            }
        };

        fetchHubData();
    }, [hub, navigate]);


    return (
        <>
            <DedicatedHubHeader/>
            <Posts showKebab={true}/>
        </>

    )
}

export default DedicatedHub