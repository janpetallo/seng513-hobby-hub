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
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css';
import {formatNumber, isPossiblePhoneNumber, isValidPhoneNumber, validatePhoneNumberLength} from "libphonenumber-js";


const EditProfilePage = () => {

    const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    const currentUser = localStorage.getItem("currentUser");

    // Parse the JSON string back into a JavaScript object
    const userData = JSON.parse(currentUser);



    const [emailErrors, setEmailErrors] = useState({message: "", status: false});
    const [usernameErrors, setUsernameErrors] = useState({message: "", status: false});

    // navigation hook
    const navigate = useNavigate();

    // register user function
    const onSubmit = async (values, actions) => {

        let pNumber = "";
        let pass = true;

        //  if the phone number is not empty, user is trying to give a number then check it otherwise, make account
        if(phoneNumber.cc !== "") {
            // Pare and format the phone number input, remove the dialcode, so when formatting the dial code can be put
            // back in
            pNumber = formatNumber(
                {
                    country: phoneNumber.cc.countryCode.toUpperCase(),
                    phone: phoneNumber.number.slice(phoneNumber.cc.dialCode.length)
                },
                'INTERNATIONAL'
            );

            //  Check validity
            if(
                (((isPossiblePhoneNumber(pNumber) &&
                    isValidPhoneNumber(pNumber) &&
                    validatePhoneNumberLength(pNumber) === undefined))) ||
                (pNumber.length === phoneNumber.cc.dialCode.length + 1)
            )
            {
                setPhoneError("")
                // console.log("YES")
                // console.log(pNumber)
            } else {
                pass = false
                setPhoneError("Invalid phone number")
            }
        }

        // If the phone number is entered and invalid then throw error
        // If the phone number is empty it is okay (not required)
        if(pass) {

        }
    }

    // Store phone number
    const [phoneNumber, setPhoneNumber] = useState({
        number: '',
        cc: ''
    });

    // Store phone number
    const handlePhone = (value, country) => {
        setPhoneError("")
        setPhoneNumber({
            number: value,
            cc: country
        });
    };

    const handlePhoneReset = () => {
        setPhoneNumber({
            number: '1',
            cc: 'ca',
        });
    };

    const [phoneError, setPhoneError] = useState(null);

    const {values, errors, touched, isSubmitting,handleBlur,handleReset,handleChange, handleSubmit} = useFormik({
        initialValues: {
            username:"",
            email:"",
            password:"",
            birthdate:"",
            setPhoneNumber:""
        },

        validationSchema: UserSchema,

        onSubmit,
    })



    const goBack = () => {
        navigate(-1); // This will navigate back one page
    };

    return (
        <div className="edit-prof-background pb-3">
            <div className="edit-prof-backbutton" onClick={goBack}>
                <img src={Back} alt="back button" className ="img-icon mt-4"/>
            </div>
            <div className="edit-prof-container">
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
                            placeholder=""
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.username && !errors.username}
                            isInvalid={touched.username && (!!errors.username || usernameErrors.status)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.username || usernameErrors.message}
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
                            type="email"
                            placeholder=""
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && (!!errors.email || emailErrors.status)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email || emailErrors.message}
                        </Form.Control.Feedback>
                        {/* <input type="text" className="custom-input"/> */}
                    </Form.Group>
                    <Form.Group className="phone-dropdown mb-3">
                        <Form.Label column>
                            <img src={Phone} alt="phone" className ="img-icon"/>
                            <strong>Phone Number</strong>
                        </Form.Label>
                        <br/>
                        <PhoneInput
                            value={phoneNumber.number}
                            country={'ca'}
                            onChange={handlePhone}
                        />
                        {phoneError &&
                            <Form.Text className="text-danger">
                                {phoneError}
                            </Form.Text>
                        }
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
                        <Button variant="secondary" type="reset" onClick={()=>{handleReset();handlePhoneReset()}} className="rounded-5 px-4 edit-prof-sub-btn">
                            Reset
                        </Button>
                        <Button variant="primary" type="submit" onClick={onSubmit} className="btn-HHPurple rounded-5 edit-prof-sub-btn">
                            Save Changes
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default EditProfilePage;
