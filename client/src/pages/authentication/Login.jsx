import "./Authentication.scss"
import Logo from "../../assets/authentication/mobile/logo.svg";
import DLogo from "../../assets/authentication/desktop/logo.svg"
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import {LoginSchema} from "./schemas/LoginSchema.jsx";
import axios from "axios";

const Login = () => {

    // send password and username to the server upon submit
    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login", {
                username: values.username,
                password: values.password
            }, {withCredentials: true});
            console.log(res.data);
        }catch (err){
            console.log(err);
        }
        actions.resetForm();
    }

    const {values, errors, touched, isSubmitting,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            username:"",
            password:"",
        },

        validationSchema: LoginSchema,

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
                        <h1 className="d-none d-sm-block auth-text">Login</h1>
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

                        <div className="mb-3 auth-text auth-links">
                            Forgot{' '}
                            <Link to="/underdevelopment">Username</Link>
                            {' '}or{' '}
                            <Link to="/underdevelopment">Password</Link>
                            ?
                        </div>

                        <Button className="btn-HHPurple d-block d-sm-none mb-3 w-75 auth-btn" type="submit" disabled={isSubmitting}>
                            <h5 className="m-0">Login</h5>
                        </Button>

                        <div className="d-none d-sm-flex align-items-center justify-content-center">
                            <Button className="btn-lg mb-2 w-50" variant="HHPurple" type="submit" disabled={isSubmitting}>
                                Login
                            </Button>
                        </div>

                        <div className="auth-text auth-links">
                            Don't have an account?{' '}
                            <Link to="/signup">Sign up!</Link>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;