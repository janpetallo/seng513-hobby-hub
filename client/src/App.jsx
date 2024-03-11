import {useState} from 'react'
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import Login from "./pages/login/Login.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
    ]);


    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
