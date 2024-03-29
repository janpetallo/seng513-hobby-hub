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
import MNavBar from "./components/mobile/navbar/NavBar.jsx";
import Header from "./components/mobile/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Signup from "./pages/authentication/Signup.jsx";
import UnderDevelopment from "./pages/underdevelopment/UnderDevelopment.jsx";

//  External media query to prevent re-rendering of pages whenever it rescales
function useDesktopOrLaptopMediaQuery() {
    return useMediaQuery({ query: '(min-width: 576px)' });
}

function App() {

    const Layout = () => {
        return (
            <Container fluid className="m-0 p-0">
                {useDesktopOrLaptopMediaQuery() ? <DNavBar/> : <Header/>}
                <Row className="m-0 home-body">
                    <Col xl={2} className="m-0 p-0 d-none d-xl-block position-sticky" style={{minWidth: `300px`}}>
                        <LeftMenu/>
                    </Col>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
                {!useDesktopOrLaptopMediaQuery() && <MNavBar/>}
            </Container>
        )
    }

    const HomeLayout = () => {
        return (
            <Row>
                <Col className="m-0 p-0">
                    <Outlet/>
                </Col>
                <Col xl={3} className="m-0 p-0 d-none d-xxl-block position-sticky home-rightbar">
                    Test side
                </Col>
            </Row>
        )
    }

    const HubLayout = () => {
        return (
            <Row>
                <Col className="m-0 p-0">
                    <Outlet/>
                </Col>
                <Col md={3} className="m-0 p-0 d-none d-md-block position-sticky hubs-rightbar">
                    Test side
                </Col>
            </Row>
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
            element: <Layout/>,
            children: [
                // {
                //     path: "/",
                //     element: <Home/>
                //
                // },
                {
                    path: "/",
                    element: <HomeLayout/>,
                    children: [
                        {
                            path: "/",
                            element: <Home/>
                        },
                    ]
                },
                {
                    path: "/hubs",
                    element: <HubLayout/>,
                    children: [
                        {
                            path: "/hubs",
                            element: <Home/>
                        },
                    ]
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
