import "./MAuthentication.scss"
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../../../assets/authentication/mobile/logo.svg";
import Background from "../../../assets/authentication/mobile/background.svg"

const MLogin = () => {
    return(
        <Container fluid
                   className="d-flex justify-content-center align-items-center flex-column vh-100 position-relative overflow-hidden">
            <img className="position-absolute m-bg-img" src={Background} alt="Logo"/>

            <Row className="m-logo-row">
                <Col className="d-flex justify-content-center align-items-center">
                    <img className="w-100" src={Logo} alt="Logo"/>
                </Col>
            </Row>

            <Row className="w-100">
                <Col>
                    <Form className="d-flex justify-content-center align-items-center flex-column">
                        <FloatingLabel
                            controlId="m-floating-username"
                            label="Username"
                            className="mb-3 m-form-label"
                        >
                            <Form.Control type="text" placeholder="" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="m-floating-password"
                            label="Password"
                            className="mb-3 m-form-label"
                        >
                            <Form.Control type="password" placeholder="" />
                        </FloatingLabel>

                        <div className="text-white mb-2">
                            Forgot{' '}
                            <Link to="/underdevelopment">Username</Link>
                            {' '}or{' '}
                            <Link to="/underdevelopment">Password</Link>
                            ?
                        </div>

                        <Button className="text-HHPurple fw-bolder mb-2 w-75 m-auth-btn" variant="light" type="submit">
                            <h1 className="m-0">Login</h1>
                        </Button>

                        <div className="text-white">
                            Don't have an account?{' '}
                            <Link to="/signup">Sign up!</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default MLogin