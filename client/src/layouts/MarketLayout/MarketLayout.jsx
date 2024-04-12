import {Col, Row} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import MarketMenu from "../../components/marketplace/marketmenu/MarketMenu.jsx";
import {useMediaQuery} from "react-responsive";

const MarketLayout = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' });

    return (
        <Row>
            <Col className="m-0 p-0 home-layout-body">
                <Outlet/>
            </Col>
            {isDesktop && (
                <Col xl={3} className="m-0 p-0 position-sticky menu-fix-width menu-left-border">
                    <MarketMenu isDesktop={true}/>
                </Col>
            )}
        </Row>
    )
}

export default MarketLayout