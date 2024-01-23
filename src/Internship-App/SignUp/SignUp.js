// SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Replace the following code with your actual sign-up logic
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);

        // Assuming registration is successful, navigate to SignIn page
        navigate('/signin');
    };

    return (
        <Container className="signup-container">
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col md={6} className="signup-form">
                    <h2 className="mb-4 text-center signup-heading">Create your account</h2>
                    <Form onSubmit={handleSignUp}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formFirstName">
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="signup-input"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formLastName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="signup-input"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="signup-input"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="signup-input"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" block className="signup-btn">
                            Next
                        </Button>
                    </Form>

                    <p className="mt-3 text-center signup-footer">
                        Already have an account? <Link to="/signin" className="signin-link">Sign In</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
