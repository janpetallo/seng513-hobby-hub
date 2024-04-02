import "./EditProfile.css"
import React, { useState } from "react";
import {Link} from "react-router-dom";
import {Button, Container, Form} from "react-bootstrap";
import Username from "../../assets/editprofile/username.svg";
import Password from "../../assets/editprofile/password.svg";
import Email from "../../assets/editprofile/email.svg";
import Phone from "../../assets/editprofile/phone.svg";
import Back from "../../assets/editprofile/back.svg";
import Birthday from "../../assets/editprofile/birthday.svg";
import {FormikContext, useFormik} from "formik";
import {UserSchema} from "../editprofile/UserSchema.jsx";
import { useNavigate} from 'react-router-dom';


const EditProfilePage = () => {

    const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    const currentUser = localStorage.getItem("currentUser");

    // Parse the JSON string back into a JavaScript object
    const userData = JSON.parse(currentUser);

    const onSubmit = async (values, actions) => {
        try {
            // localStorage.setItem("currentUser", JSON.stringify(res.data)); // store the user data returned from logging in
            navigate("/"); // navigate back to the home page
        }catch (err){
            console.log(err.response.data);
        }
    };

    const defaultValues = {
        username: "",
        email: "",
        password: "",
        phone: "",
        birthdate: "",
    };

    
    const {values, errors, touched, isSubmitting,handleReset,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:userData ? {
            username: userData.username || "",
            email: userData.email || "",
            phone: userData.phone || "",
            birthdate: userData.birthdate || "",
        } : defaultValues,
        validationSchema: UserSchema,

        onSubmit,
    })


    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // This will navigate back one page
    };

    return (
    <div className="edit-prof-background">
        <div className="edit-prof-container">
            <div className="edit-prof-backbutton" onClick={goBack}>
                <img src={Back} alt="back button" className ="img-icon mt-4"/>
            </div>
            <div className = "avantar-section">
                <div className = "edit-prof-img d-flex flex-column align-items-center">
                    <img src={image} alt="profile img" className ="img-user"/>
                    <input type="file" onChange={handleImageChange} style={{ display: "none" }} />
                    <button className="change-img-btn mb-3 " onClick={() => document.querySelector('input[type="file"]').click()}>Change Profile Picture</button>
                </div>
            </div>
            <hr></hr>
            <Form className="profile-form-section m-2" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label column>
                        <img src={Username} alt="username" className ="img-icon"/> 
                        <strong>Username</strong> 
                    </Form.Label> 
                    <br/>  
                    <Form.Control
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="custom-input" 
                        isValid={touched.username && !errors.username}
                        isInvalid={touched.username && !!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.username}
                    </Form.Control.Feedback>
                    {/* <input type="text" className="custom-input"/> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label column>
                        <img src={Password} alt="password" className ="img-icon"/> 
                        <strong>Password</strong> 
                    </Form.Label> 
                    <br/>  

                    <Form.Control
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="custom-input" 
                        isValid={touched.password && !errors.password}
                        isInvalid={touched.password && !!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>

                    {/* <input type="text" className="custom-input"/> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label column>
                        <img src={Email} alt="email" className ="img-icon"/> 
                        <strong>Email</strong> 
                    </Form.Label> 
                    <br/>  
                    <Form.Control
                        type="email"  // Use "email" type for email input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="custom-input" 
                        isValid={touched.email && !errors.email}
                        isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                    {/* <input type="text" className="custom-input"/> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label column>
                        <img src={Phone} alt="phone" className ="img-icon"/> 
                        <strong>Phone Number</strong> 
                    </Form.Label> 
                    <br/>  
                    <Form.Control
                        type="tel"  // Use "tel" type for phone input
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="custom-input" 
                        isValid={touched.phone && !errors.phone}
                        isInvalid={touched.phone && !!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                    {/* <input type="text" className="custom-input"/> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label column>
                        <img src={Birthday} alt="birthday" className ="img-icon"/> 
                        <strong>Birthdate</strong> 
                    </Form.Label> 
                    <br/>  
                    <Form.Control
                        type="date"
                        placeholder=""
                        name="birthdate"
                        value={values.birthdate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.birthdate && !errors.birthdate}
                        isInvalid={touched.birthdate && !!errors.birthdate}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.birthdate}
                    </Form.Control.Feedback>
                    {/* <input type="text" className="custom-input"/> */}
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <Button variant="secondary" type="reset" onClick={handleReset} className="rounded-5 px-4 edit-prof-sub-btn">
                        Reset
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit} className="btn-HHPurple rounded-5 edit-prof-sub-btn">
                        Save Changes
                    </Button>
                </div>
            </Form>
        </div>
    </div>
    );
};

export default EditProfilePage;
