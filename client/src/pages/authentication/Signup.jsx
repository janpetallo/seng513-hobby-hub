import "./Authentication.scss"
import Logo from "../../assets/authentication/mobile/logo.svg";
import DLogo from "../../assets/authentication/desktop/logo.svg"
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {SignupSchema} from "./schemas/SignupSchema.jsx";
import newRequest from "../../utilities/newRequest.js";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css';
import {useState} from "react";
import {formatNumber, isPossiblePhoneNumber, isValidPhoneNumber, validatePhoneNumberLength} from "libphonenumber-js";

const Signup = () => {

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
             try {
                 await newRequest.post("/auth/register", {username: values.username,
                     password: values.password, email: values.email, birthday: values.birthdate, phone: phoneNumber.number});

                navigate("/login"); // navigate to the login page
            }catch (err){
                console.log(err.response.data);
            }
            actions.resetForm();
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

    const [phoneError, setPhoneError] = useState(null);

    const {values, errors, touched, isSubmitting,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
            birthdate:"",
        },

        validationSchema: SignupSchema,

        onSubmit,
    })

    return (
        <Container fluid className="auth-container">

            <Row className="d-block d-sm-none m-logo-cont">
                <Col>
                    <img className="m-logo w-100" src={Logo} alt="Logo"/>
                </Col>
            </Row>

            <Row className="auth-form-row">
                <Col sm={2} xl={4} xxl={6} className="d-none d-sm-block position-relative rounded-start-5 d-side-img">
                    <img className="position-absolute" src={DLogo} alt="Logo"/>
                </Col>


                <Col sm={10} xl={8} xxl={6} className="auth-form-col rounded-end-5">
                    <Form className="auth-form" onSubmit={handleSubmit}>
                        <h1 className="d-none d-sm-block mb-2 auth-text">Create an account</h1>
                        <FloatingLabel
                            controlId="floating-username"
                            label="Username"
                            className="mb-3 auth-label"
                        >
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.username && !errors.username}
                                isInvalid={touched.username && !!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floating-email"
                            label="Email"
                            className="mb-3 auth-label"
                        >
                            <Form.Control
                                type="email"
                                placeholder=""
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.email && !errors.email}
                                isInvalid={touched.email && !!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <Form.Group className="phone-dropdown auth-label mb-3">
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

                        <FloatingLabel
                            controlId="floating-password"
                            label="Password"
                            className="mb-3 auth-label"
                        >
                            <Form.Control
                                type="password"
                                placeholder=""
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.password && !errors.password}
                                isInvalid={touched.password && !!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floating-confirm"
                            label="Confirm Password"
                            className="mb-3 auth-label"
                        >
                            <Form.Control
                                type="password"
                                placeholder=""
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.confirmPassword && !errors.confirmPassword}
                                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.confirmPassword}
                            </Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floating-bdate"
                            label="Birthdate"
                            className="mb-3 auth-label"
                        >
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
                        </FloatingLabel>

                        <Form.Group className="mb-3 auth-text auth-links">
                            <Form.Check
                                type="checkbox"
                                id="checkbox"
                                label={
                                    <>
                                        Agree to <Link to="/underdevelopment">Terms and Conditions</Link>
                                    </>
                                }
                                defaultChecked // force checkbox always checked for now
                            />
                        </Form.Group>

                        <Button className="btn-HHPurple d-block d-sm-none mb-3 w-75 auth-btn" type="submit" disabled={isSubmitting}>
                            <h5 className="m-0">Sign up</h5>
                        </Button>

                        <div className="d-none d-sm-flex align-items-center justify-content-center">
                            <Button className="btn-lg mb-3 w-50 auth-btn" variant="HHPurple" type="submit" disabled={isSubmitting}> {/* Disable the button when we submit */}
                                Sign Up
                            </Button>
                        </div>

                        <div className="auth-links auth-text">
                            Already have an account?{' '}
                            <Link to="/login">Login</Link>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;