import { useContext, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../store/auth-ctx";

import { Form, Button, Card, Container, Alert } from "react-bootstrap";

import classes from "./SignUp.module.css";

const SignUp = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();

  const [error, setError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const passwordHandler = (e) => {
    setPasswordInput(e.target.value);
    setError("");
  };
  const ConfirmPasswordHandler = (e) => {
    setConfirmPasswordInput(e.target.value);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordInputRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setIsLoading(true);
      await authCtx.Signup(
        emailInputRef.current.value,
        passwordInputRef.current.value
      );
    } catch {
      setError("Failed to create an account");
      setIsLoading(true);
    }
    setIsLoading(false);
  };

  return (
    <Container className={`w-100 ${classes["sign-up"]}`}>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Sign Up</h2>
            <p>{authCtx.newUser && authCtx.newUser.emaii}</p>
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
            <Form.Group id="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                required
                ref={confirmPasswordRef}
                onChange={ConfirmPasswordHandler}
                value={confirmPasswordInput}
              />
            </Form.Group>
            <Button
              disabled={isLoading}
              type="submit"
              className="w-100 text-center"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className={`w-100 text-center mt-2 ${classes.alt}`}>
          Already have an account?{" "}
          <Link className="text-decoration-none" to="/login">
            Log In
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default SignUp;
