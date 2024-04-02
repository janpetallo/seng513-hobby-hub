import React from "react";
import Marketplace from "../marketplace/Marketplace.jsx";


const MyAdsTrades = () => {
    const username = "BimmerGuy"

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="pt-3 ps-2 pe-2">{username}'s Ads & Trades</h1>
                <h6 className="ps-2 pe-2!">View all your ads and trades here!</h6>
            </div>
            <hr/>

            <Marketplace/>
        </>
    )
}

export default MyAdsTrades