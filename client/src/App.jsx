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

function App() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 576px)'
    });

    const Layout= () => {
        return (
            <Container fluid className="m-0 p-0">
                {isDesktopOrLaptop ? <DNavBar/> : <Header/>}
                <Row className="m-0 home-body">
                    <Col xl={3} className="m-0 p-0 d-none d-xl-block position-sticky">
                        {isDesktopOrLaptop && <LeftMenu/>}
                    </Col>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
                {!isDesktopOrLaptop && <MNavBar/>}
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
            element: <ProtectedRoute> <Layout/> </ProtectedRoute>,
            children: [
                {
                    path: "/",
                    element: <Home/>

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
