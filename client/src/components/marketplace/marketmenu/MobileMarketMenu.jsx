import React, {useEffect, useState} from "react";
import "./MobileMarketMenu.scss"
import {Button, Offcanvas} from "react-bootstrap";
import { IoFilter } from "react-icons/io5";
import MarketMenu from "./MarketMenu.jsx";
import {useMediaQuery} from "react-responsive";


/**
 * At min width of 1400px returns true when true use effect will make component disappear
 * @returns {boolean} true if the size is above 1400px
 */
// function useDesktopOrLaptopMediaQuery() {
//     return useMediaQuery({ query: '(min-width: 1400px)' });
// }

const MobileMarketMenu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // At min width of 1400px returns true when true use effect will make component disappear
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1400px)' })
    useEffect(() => {
        if (isDesktopOrLaptop) {
            setShow(false);
        }
    }, [isDesktopOrLaptop]);

    return (
        <div className="mobile-market-menu-wrapper">
            <Button className="market-filter-btn d-xxl-none" variant="HHPurple" onClick={handleShow}>
                <IoFilter /> Filter
            </Button>

            <Offcanvas className="h-75" show={show} onHide={handleClose} placement={"bottom"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="h-100">
                   <MarketMenu isDesktop={false}/>
                </Offcanvas.Body>
            </Offcanvas>
        </div>

    )
}

export default MobileMarketMenu