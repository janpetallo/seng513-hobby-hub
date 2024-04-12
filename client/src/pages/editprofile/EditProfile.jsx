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
import {FormikContext, useFormik, useFormikContext} from "formik";
import {UserSchema} from "../editprofile/UserSchema.jsx";
import { useNavigate} from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css';
import {formatNumber, isPossiblePhoneNumber, isValidPhoneNumber, validatePhoneNumberLength} from "libphonenumber-js";
import newRequest from "../../utilities/newRequest.js";
import ImageModal from "../../../src/components/desktop/post/ImageModal.jsx";
import ProfileImageModal from "../../../src/components/ProfileToggle/profileImageModal.jsx"
import * as yup from "yup";

const oneUpper = /(?=.*[A-Z])/;
const oneLower = /(?=.*[a-z])/;
const oneDigit = /(?=.*\d)/;
const oneSymbol = /(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=/"'])/;


const EditProfilePage = () => {

    const [image, setImage] = useState(localStorage.getItem("profileImage") || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        const imgURL = URL.createObjectURL(selectedImage);
        setImage(imgURL);
        localStorage.setItem("profileImage", imgURL);
    };
    const [showModal, setShowModal] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState("");

    const toggleModal = (imageUrl) => {
        setShowModal(!showModal);
        setModalImageUrl(imageUrl);
    };




    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const currentUser = localStorage.getItem("currentUser");
    const [phoneError, setPhoneError] = useState(null);
    const [isdisabled, setdisabled] = useState(true);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    // Parse the JSON string back into a JavaScript object
    const userData = JSON.parse(currentUser);

    const [editing, setEditing] = useState(false);

    const handleEditClick = () => {
        setdisabled(false);

        setEditing(true);
        setConfirmPasswordVisible(true);
    };

    const handleSaveCancelClick = () => {
        // Handle save logic
        setdisabled(true);
        handleReset(); // Reset the form
        setEditing(false);
        setConfirmPasswordVisible(false);

        navigate("/editprofile");
    };

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

            } else {
                pass = false
                setPhoneError("Invalid phone number")
            }
        }

        // If the phone number is entered and invalid then throw error
        // If the phone number is empty it is okay (not required)
        if(pass) {
            try {
                await newRequest.post(`/users/editUser/${userData._id}`, {
                    username:userData.username,
                    password: values.password, email: values.email, phone: phoneNumber.number,
                    userId: userData._id,
                });
                setEmailErrors({message: "", status: false}); // clear email errors
                setUsernameErrors({message: "", status: false}); // clear username errors
                handleSaveCancelClick();
                // handleReset();

            }catch (err) {
                console.log(err);
                if (err.response && err.response.status === 400) {
                    if (err.response.data === "Username is already in use.") {
                        setUsernameErrors({message: "Username is already in use.", status: true});
                        setEmailErrors({message: "", status: false}); // clear email errors

                    } else if (err.response.data === "Email is already in use.") {
                        setUsernameErrors({message: "", status: false}); // clear username errors
                        setEmailErrors({message: "Email is already in use.", status: true});
                    }
                } else {
                    console.log(err);
                }
            }
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



    const UserEditSchema = yup.object().shape({
        username: yup.string().min(4, "Username must be 4 or more characters"),
        email: yup.string().email("Please enter a valid email"),
        password: yup
            .string()
            .min(4, "Password must be 4 or more characters")
            .matches(oneUpper, { message: "Password should contain at least one uppercase letter" })
            .matches(oneLower, { message: "Password should contain at least one lowercase letter" })
            .matches(oneDigit, { message: "Password should contain at least one digit" })
            .matches(oneSymbol, { message: "Password should contain at least one special character" }),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
        birthdate: yup.date().max(new Date(new Date().getFullYear() - 12, new Date().getMonth(), new Date().getDate()), "Website's age restriction is 12"),
        phone: yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    });






    //
    //
    // console.log("user data is ", userData);
    // console.log(" email is ", new Date(userData.birthday).toLocaleDateString());
    // console.log(" number is ", userData.username)
    const {values,
        errors,
        touched, isSubmitting,
        handleBlur,
        handleReset,
        handleChange, handleSubmit
    } = useFormik({
        initialValues: {
            username:userData.username,
            email:userData.email,
            password:"",
            confirmPassword:"",
            setPhoneNumber:phoneNumber.phone
        },

        validationSchema: UserEditSchema,

        onSubmit,
    });


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
                        <img src={image} alt="profile img" className ="img-user"
                             onClick={() => toggleModal(image)}
                        />
                        <input type="file" onChange={handleImageChange} style={{ display: "none" }} />
                        <button className="change-img-btn mb-3 " onClick={() => document.querySelector('input[type="file"]').click()}>Change Profile Picture</button>
                    </div>
                </div>
                <hr></hr>

                <Form className="profile-form-section m-2" onSubmit={handleSubmit} onReset={handleReset}>
                    <Form.Group className="mb-3">
                        <Form.Label column>
                            <img src={Username} alt="username" className ="img-icon"/>
                            <strong>Username</strong>
                        </Form.Label>
                        <br/>
                        <Form.Control
                            type="text"
                            placeholder={userData.username}
                            name="username"
                            // value={values.username}
                            onBlur={handleBlur}
                            isValid={touched.username && !errors.username}
                            isInvalid={touched.username && (!!errors.username || usernameErrors.status)}
                            disabled={true}
                            className="disable-input"
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
                            type="password"
                            name="password"
                            placeholder="Enter your new password"
                            value={values.password || ''}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            isValid={touched.password && !errors.password}
                            isInvalid={touched.password && !!errors.password}
                            disabled={isdisabled}

                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>

                        {/* <input type="text" className="custom-input"/> */}
                    </Form.Group>
                    {confirmPasswordVisible && (
                        <Form.Group className="mb-3">
                        <Form.Label column>
                        <img src={Password} alt="password" className ="img-icon"/>
                        <strong>Confirm Password</strong>
                        </Form.Label>
                        <br/>

                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            placeholder="Enter your new password"
                            value={values.confirmPassword || ''}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            isValid={touched.confirmPassword && !errors.confirmPassword}
                            isInvalid={touched.confirmPassword && !!errors.confirmPassword}

                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>

                        {/* <input type="text" className="custom-input"/> */}
                    </Form.Group>
                        )}
                    <Form.Group className="mb-3">
                        <Form.Label column>
                            <img src={Email} alt="email" className ="img-icon"/>
                            <strong>Email</strong>
                        </Form.Label>
                        <br/>
                        <Form.Control
                            type="email"
                            placeholder={userData.email}
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && (!!errors.email || emailErrors.status)}
                            disabled={isdisabled}

                        />
                        <Form.Control.Feedback type="invalid">
                            {touched.email && errors.email ? (
                                <div>{errors.email}</div>
                            ) : null}
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
                            placeholder="enter number"
                            value={phoneNumber.number}
                            country={'ca'}
                            onChange={handlePhone}
                            disabled={isdisabled}

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
                            placeholder={new Date(userData.birthday).toLocaleDateString()}
                            name="birthdate"
                            value={new Date(userData.birthday).toLocaleDateString()}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.birthdate && !errors.birthdate}
                            isInvalid={touched.birthdate && !!errors.birthdate}
                            disabled={true}
                            className="disable-input"

                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.birthdate}
                        </Form.Control.Feedback>
                        {/* <input type="text" className="custom-input"/> */}
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        {editing ? (
                            <>
                                <Button variant="secondary" type="reset" onClick={handleReset} className="rounded-5 px-4 edit-prof-sub-btn" id="reset-button">
                                    Reset
                                </Button>
                                <Button variant="secondary" type="reset" onClick={handleSaveCancelClick} className="rounded-5 px-4 edit-prof-sub-btn" id="cancel-button">
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit" onClick={onSubmit} className="btn-HHPurple rounded-5 edit-prof-sub-btn" id="save-button">
                                    Save Changes
                                </Button>
                            </>
                        ) : (
                            <Button variant="secondary" type="button" onClick={handleEditClick} className="rounded-5 px-4 edit-prof-sub-btn" id="edit-button">
                                Edit
                            </Button>
                        )}
                    </div>
                </Form>
            </div>
            {showModal && <ProfileImageModal imageUrl={modalImageUrl} onClose={toggleModal} />}

        </div>
    );
};

export default EditProfilePage;
