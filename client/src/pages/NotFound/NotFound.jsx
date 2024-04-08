import React from "react";
import "./NotFound.scss"
import {Link} from "react-router-dom";
import notfound from "../../assets/notfound/notfound.svg"

const NotFound = () => {

    return (
        <div className="notfound-container">
            <div className="animate float">
                <img className="small middle spin" src={notfound} alt={""}/>
                <img className="top small spin" src={notfound} alt={""}/>
                <img className="med right spin" src={notfound} alt={""}/>
                <img className="large spin" src={notfound} alt={""}/>
            </div>

            <div className="notfound-content">
                <p className="text-HHPurple">404</p>
                <h1>Oops!</h1>
                <h2>Something went wrong</h2>
                <Link to="/">Head back to the homepage...</Link>
            </div>
        </div>
    )
}

export default NotFound