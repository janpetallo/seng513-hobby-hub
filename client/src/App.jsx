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
import CommunitySelection from './pages/community-selection/CommunitySelection.jsx';
import CreateHubPageMobile from './pages/community-selection/CreateHubPageMobile.jsx';
import ChoosePostingLocation from './pages/posting-location/ChoosePostingLocation.jsx';
import HubPost from "./pages/hubpost/HubPost.jsx";
import MarketPost from "./pages/marketpost/MarketPost.jsx";
import RightMenu from "./components/desktop/rightmenu/RightMenu.jsx";
import DedicatedHub from "./pages/dedicatedhub/DedicatedHub.jsx";
import Marketplace from "./pages/marketplace/Marketplace.jsx";
import SellingItems from "./pages/selling-item/SellingItems.jsx";
import SearchMenu from "./pages/search-menu/SearchMenu.jsx";
import MarketplaceSelection from "./pages/marketplace-selection/MarketplaceSelection.jsx";
import EditProfile from './pages/editprofile/EditProfile.jsx';
import MyAdsTrades from "./pages/MyAdsTrades/MyAdsTrades.jsx";
import MyHubs from "./pages/myhubs/MyHubs.jsx";
import MyPosts from "./pages/myposts/MyPosts.jsx";
import SearchResults from './pages/search-results/SearchResults.jsx';
import NotFound from "./pages/NotFound/NotFound.jsx";
import MarketLayout from "./layouts/MarketLayout/MarketLayout.jsx";
import useLocalStorageClear from "./utilities/useLocalStorageClear/useLocalStorageClear.jsx";

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
                    <Col xl={2} className="m-0 p-0 d-none d-xl-block position-sticky menu-fix-width">
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
                <Col className="m-0 p-0 home-layout-body">
                    <Outlet/>
                </Col>
                <Col xl={3} className="m-0 p-0 d-none d-xxl-block position-sticky home-rightbar">
                </Col>
            </Row>
        )
    }

    const HubLayout = () => {
        return (
            <Row>
                <Col className="m-0 p-0 home-layout-body">
                    <Outlet/>
                </Col>
                <Col md={3} className="m-0 p-0 d-none d-md-block position-sticky menu-fix-width menu-right-border">
                    <RightMenu/>
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

    //  This prevents logged-in users from going to the login or signup page until they log out
    const ProtectedRouteLoggedIn = ({ children }) => {
        if(localStorage.getItem("currentUser")){
            return <Navigate to={"/"}/>;
        }
        return children;
    }

    useLocalStorageClear();

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <HomeLayout/>,
                    children: [
                        {
                            path: "/",
                            element: <Home/>
                        },
                        {
                            path: "/hubpost",
                            element:  <ProtectedRoute><HubPost/></ProtectedRoute>
                        },
                        {
                            path: "/marketpost",
                            element: <ProtectedRoute><MarketPost/></ProtectedRoute>
                        },
                        {
                            path: "/choose-posting",
                            element: <ProtectedRoute><ChoosePostingLocation/></ProtectedRoute>
                        },
                        {
                            path: "/myhubs",
                            element: <ProtectedRoute><MyHubs/></ProtectedRoute>
                        },
                        {
                            path: "/myposts",
                            element: <ProtectedRoute><MyPosts/></ProtectedRoute>
                        },
                        {
                            path: "/myadstrades",
                            element: <ProtectedRoute><MyAdsTrades/></ProtectedRoute>
                        },
                        {
                            path: "/editprofile",
                            element:<ProtectedRoute><EditProfile/></ProtectedRoute>
                        },
                        {
                            path: "/search-menu",
                            element: <SearchMenu/>
                        },
                        {
                            path: "/search-results/:search",
                            element: <SearchResults/>
                        },

                        // Default fall to page when user types a link that does not exist
                        {
                            path:"*",
                            element:<NotFound/>
                        },
                    ]
                },
                {
                    path: "/hubs",
                    element: <HubLayout/>,
                    children: [
                        {
                            path: "/hubs",
                            element: <DedicatedHub/>
                        },
                    ]
                },
                {
                    path: "/marketplace",
                    element: <MarketLayout/>,
                    children: [
                        {
                            path: "/marketplace",
                            element: <Marketplace/>
                        },
                    ]
                },
                {
                    path: "/selling-item",
                    element:<SellingItems/>
                },
                {
                    path: "/community-selection",
                    element:<CommunitySelection/>
                },
                {
                    path: "/marketplace-selection",
                    element: <MarketplaceSelection/>
                },
                {
                    path: "/create-hub",
                    element: <ProtectedRoute><CreateHubPageMobile/></ProtectedRoute>
                },
            ]
        },
        {
            path: "/login",
            element: <ProtectedRouteLoggedIn><Login/></ProtectedRouteLoggedIn>
        },
        {
            path: "/signup",
            element: <ProtectedRouteLoggedIn><Signup/></ProtectedRouteLoggedIn>
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
