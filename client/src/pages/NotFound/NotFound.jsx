import React from "react";
import "./NotFound.scss"
import {Link} from "react-router-dom";
import notfound from "../../assets/notfound/notfound.svg"

const NotFound = () => {
    return (
        <div className="notfound-container">
            <img src={notfound} alt={""}/>
            <div>
                <p>404</p>
                <h1>Oops!</h1>
                <h2>Something went wrong</h2>
                <Link to="/">Head back to the homepage...</Link>
            </div>
        </div>
    )
}

export default NotFound