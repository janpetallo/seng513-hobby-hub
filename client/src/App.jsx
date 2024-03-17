import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet, Navigate,
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {useMediaQuery} from "react-responsive";

import Login from "./pages/authentication/Login.jsx";
import DNavBar from "./components/desktop/navbar/NavBar.jsx";
import LeftMenu from "./components/desktop/leftmenu/LeftMenu.jsx";
import RightMenu from "./components/desktop/rightmenu/RightMenu.jsx";
import MNavBar from "./components/mobile/navbar/NavBar.jsx";
import Header from "./components/mobile/header/Header.jsx";
import DHome from "./pages/home/desktop/DHome.jsx";
import MHome from "./pages/home/mobile/MHome.jsx";
import Signup from "./pages/authentication/Signup.jsx";
import UnderDevelopment from "./pages/underdevelopment/UnderDevelopment.jsx";

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

    // route protection function
    const ProtectedRoute = ({children}) => {
        if(!localStorage.getItem("currentUser")){
            return <Navigate to={"/Login"}/>;
        }
        return children;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <ProtectedRoute> isDesktopOrLaptop ? <DesktopLayout/> : <MobileLayout/> </ProtectedRoute>,
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
        {
            path: "/signup",
            element: <Signup/>
        },
        {
            path: "/underdevelopment",
            element:<UnderDevelopment/>
        },
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
