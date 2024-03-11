import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import "./LoginDesktop.scss"
import {Link} from "react-router-dom";
import Logo from "../../../assets/login/desktop/logo.svg"

const LoginDesktop = () => {
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center vh-100 d-login-container"
        >

            <Row className="rounded-5 shadow d-login-row">
                <Col sm={2} xl={4} xxl={6} className="rounded-start-5 position-relative d-login-left">
                    <img className="position-absolute" src={Logo} alt="Logo"/>
                </Col>

                <Col sm={10} xl={8} xxl={6} className="d-flex justify-content-center align-items-center rounded-end-5 bg-light">
                    <Form className="d-login-form">
                        <h1>Login</h1>
                        <FloatingLabel
                            controlId="d-floating-username"
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="d-floating-password"
                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control type="password" placeholder="" />
                        </FloatingLabel>

                        <div className="mb-2">
                            Forgot{' '}
                            <Link to="">Username</Link>
                            {' '}or{' '}
                            <Link to="">Password</Link>
                            ?
                        </div>

                        <div className="d-flex align-items-center justify-content-center">
                            <Button className="btn-lg mb-2 w-75" variant="HHPurple" type="submit">
                                Login
                            </Button>
                        </div>

                        <div className="mb-2">
                            Don't have an account?{' '}
                            <Link to="">Sign up!</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginDesktop
