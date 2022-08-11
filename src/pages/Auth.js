import React, { useRef, useContext, useState } from "react";

import { Link } from "react-router-dom";

import AuthContext from "../store/auth-ctx";

import { Form, Button, Card, Container, Alert } from "react-bootstrap";

import classes from "./Auth.module.css";

const Auth = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const passwordHandler = (e) => {
    setPasswordInput(e.target.value);
    setError("");
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      setError("");
      setIsLoading(true);
      await authCtx.login(
        emailInputRef.current.value,
        passwordInputRef.current.value
      );
    } catch {
      setError("Failed to sign in");
      setIsLoading(true);
    }
    setIsLoading(false);
  };

  return (
    <Container className={`w-100 ${classes["sign-up"]}`}>
      <Card>
        <Card.Body>
          <Form onSubmit={loginHandler}>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailInputRef} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                ref={passwordInputRef}
                onChange={passwordHandler}
                value={passwordInput}
              />
            </Form.Group>
            <Button disabled={isLoading} type="submit" className="w-100 text-center">
              Log In
            </Button>
          </Form>
        </Card.Body>
        <div className={`w-100 text-center mt-2 ${classes.alt}`}>
          Don't have an account?{" "}
          <Link className="text-decoration-none" to="/signup">
            Sign Up
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default Auth;
