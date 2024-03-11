import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";

import Login from "./pages/login/Login.jsx";
import DNavBar from "./components/desktop/navbar/NavBar.jsx";
import LeftMenu from "./components/desktop/leftmenu/LeftMenu.jsx";
import RightMenu from "./components/desktop/rightmenu/RightMenu.jsx";
import MNavBar from "./components/mobile/navbar/NavBar.jsx";
import Header from "./components/mobile/header/Header.jsx";
import DHome from "./pages/home/desktop/DHome.jsx";
import MHome from "./pages/home/mobile/MHome.jsx";

function App() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 576px)'
    });

    const DesktopLayout= () => {
        return (
            <Container fluid>
                <DNavBar/>
                <Row>
                    <Col className="d-flex">
                        <LeftMenu/>
                        <Outlet/>
                        <RightMenu/>
                    </Col>
                </Row>
            </Container>
        )
    }

    const MobileLayout= () => {
        return (
            <Container fluid>
                <Header/>
                <Outlet/>
                <MNavBar/>
            </Container>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: isDesktopOrLaptop ? <DesktopLayout/> : <MobileLayout/>,
            children: [
                {
                    path: "/",
                    element: isDesktopOrLaptop ? <DHome/> : <MHome/>
                },
            ]
        },
        {
            path: "/login",
            element: <Login/>
        },
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
