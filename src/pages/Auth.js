import React, { useContext, useState } from "react";
import { AuthContext } from "../store/auth-ctx";

import classes from "./Auth.module.css";

const Auth = () => {
  const authCtx = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const emailIsValid = email.includes("@");
  const passwordIsValid = password.trim().length > 5;

  const emailIsInvalid = emailTouched && !emailIsValid;
  const passwordIsInvalid = passwordTouched && !passwordIsValid;

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const emailInputHandler = (event) => {
    setEmail(event.target.value);

    if (event.target.value === "") {
      setEmailTouched(false);
    }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);

    if (event.target.value === "") {
      setPasswordTouched(false);
    }
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();

    setEmailTouched(true);
    setPasswordTouched(true);

    if (!emailIsValid) {
      setEmail("");
      setEmailTouched(true);
      return;
    }

    if (!passwordIsValid) {
      setPassword("");
      setPasswordTouched(true);
      return;
    }

    authCtx.loggedIn();

    setEmail("");
    setPassword("");
    setEmailTouched(false);
    setPasswordTouched(false);
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={authSubmitHandler}>
        <div className={classes.input}>
          <label htmlFor="Username">Email</label>
          <input
            type="email"
            id="email"
            onChange={emailInputHandler}
            value={email}
          />
          {emailIsInvalid && <p>Please enter a valid email</p>}
        </div>
        <div className={classes.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordHandler}
            value={password}
          />
          {passwordIsInvalid && <p>Password must be 6 characters</p>}
        </div>
        <div className={classes.actions}>
          <button disabled={!formIsValid}>Login</button>
        </div>
        <div>

        </div>
      </form>
    </section>
  );
};

export default Auth;
