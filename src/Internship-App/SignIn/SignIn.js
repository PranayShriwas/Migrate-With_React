// SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        // Replace the following code with your actual sign-in logic
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container className="signin-container">
            <Row className="justify-content-center align-items-center min-vh-100">
                <Col md={6} className="signin-form">
                    <h2 className="mb-4 text-center signin-heading">Welcome back!</h2>
                    <Form onSubmit={handleSignIn}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="signin-input"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="signin-input"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" block className="signin-btn">
                            Sign In
                        </Button>
                    </Form>

                    <p className="mt-3 text-center signin-footer">
                        Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;
