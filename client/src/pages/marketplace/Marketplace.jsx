import React from "react";
import "./Marketplace.scss";
import ItemCards from "../../components/marketplace/itemcards/ItemCards.jsx";
import MobileMarketMenu from "../../components/marketplace/marketmenu/MobileMarketMenu.jsx";

const Marketplace = () => {

    return(
        <>
            <MobileMarketMenu/>
            <ItemCards/>
        </>
    )
}
export default Marketplace