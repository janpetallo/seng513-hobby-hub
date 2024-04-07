import React, {useEffect, useRef, useState} from "react";
import "./ProfileToggle.scss"
import {Button} from "react-bootstrap";
import profileDefault from "../../assets/profiletoggle/Default_pfp.svg"
import {Link, useNavigate} from "react-router-dom";
import newRequest from "../../utilities/newRequest.js";

const ProfileToggle = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const [open, setOpen] = useState(false);
    const profileToggleRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileToggleRef.current && !profileToggleRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleDropdownClick = (event) => {
        event.stopPropagation(); // prevents click the dropdown from closing the dropdown
    };

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout")
            // localStorage.setItem("currentUser", null);
            localStorage.removeItem("currentUser");
            navigate("/");

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {!currentUser && (
                <Link to="/login">
                    <Button variant="HHPurple"> Log in</Button>
                </Link>
            )}
            {currentUser && (
                <div className="profile-toggle-div" onClick={()=>setOpen(!open)} ref={profileToggleRef} >
                    <img src={currentUser.img || profileDefault} alt="" />
                    {open && (
                        <div className="profile-toggle-options" onClick={handleDropdownClick}>
                            <span className="profile-toggle-username">{currentUser?.username}</span>
                            <Link className="profile-toggle-links" to="/editprofile">View Profile</Link>
                            <span className="profile-toggle-links" onClick={handleLogout}>Logout</span>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default ProfileToggle