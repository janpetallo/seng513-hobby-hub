import {useState} from 'react'
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import LoginDesktop from "./pages/login/desktop/LoginDesktop.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<LoginDesktop/>
        },
    ]);


    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
