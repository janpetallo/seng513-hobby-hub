import "./Authentication.scss"
import Logo from "../../assets/authentication/mobile/logo.svg";
import DLogo from "../../assets/authentication/desktop/logo.svg"
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {

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
                    <Form className="auth-form">
                        <h1 className="d-none d-sm-block">Login</h1>
                        <FloatingLabel
                            controlId="floating-username"
                            label="Username"
                            className="mb-3 auth-label"
                        >
                            <Form.Control
                                type="text"
                                placeholder=""
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floating-password"
                            label="Password"
                            className="mb-3 auth-label"
                        >
                            <Form.Control type="password"
                                          placeholder=""
                            />
                        </FloatingLabel>

                        <div className="mb-3 auth-links">
                            Forgot{' '}
                            <Link to="/underdevelopment">Username</Link>
                            {' '}or{' '}
                            <Link to="/underdevelopment">Password</Link>
                            ?
                        </div>

                        <Button className="d-block d-sm-none text-HHPurple mb-3 w-75 auth-btn" variant="light" type="submit">
                            <h1 className="m-0">Login</h1>
                        </Button>

                        <div className="d-none d-sm-flex align-items-center justify-content-center">
                            <Button className="btn-lg mb-2 w-50" variant="HHPurple" type="submit">
                                Login
                            </Button>
                        </div>

                        <div className="auth-links">
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