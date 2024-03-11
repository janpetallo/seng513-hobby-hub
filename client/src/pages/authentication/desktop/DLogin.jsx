import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import "./DAuthentication.scss"
import {Link} from "react-router-dom";
import Logo from "../../../assets/authentication/desktop/logo.svg"

const DLogin = () => {
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center d-auth-container"
        >

            <Row className="rounded-5 shadow d-auth-row">
                <Col sm={2} xl={4} xxl={6} className="rounded-start-5 position-relative d-auth-left">
                    <img className="position-absolute" src={Logo} alt="Logo"/>
                </Col>

                <Col sm={10} xl={8} xxl={6} className="d-flex justify-content-center align-items-center rounded-end-5 bg-light">
                    <Form className="d-auth-form">
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
                            <Link to="/underdevelopment">Username</Link>
                            {' '}or{' '}
                            <Link to="/underdevelopment">Password</Link>
                            ?
                        </div>

                        <div className="d-flex align-items-center justify-content-center">
                            <Button className="btn-lg mb-2 w-50" variant="HHPurple" type="submit">
                                Login
                            </Button>
                        </div>

                        <div className="mb-2">
                            Don't have an account?{' '}
                            <Link to="/signup">Sign up!</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default DLogin
