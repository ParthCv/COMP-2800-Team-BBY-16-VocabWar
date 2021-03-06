import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import classes from "./Login.module.css";
import ClearIcon from "@material-ui/icons/Clear";

//Component resposible for logging in user using credential
const Login = ({ overlayCloseHandler }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
  });

  // stores the input in login form

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const firebase = useFirebaseApp();

  // Handles login with email and password on submit.

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {})
      .catch((error) => {
        setUser({
          ...user,
          error: error.message,
        });
        document.getElementById("emailLogin").style.border =
          "2px solid #e74c3c";
        document.getElementById("passLogin").style.border = "2px solid #e74c3c";
        document.getElementById("loginButton").innerHTML = "Try again";
        document.getElementById("loginButton").style.backgroundColor =
          "#e74c3c";
      });
  };

  return (
    <div className={classes.overlayAuth}>
      <div className={classes.authHB}>
        <button type='button' onClick={overlayCloseHandler}>
          <ClearIcon />
        </button>
      </div>
      <form onSubmit={handleSubmit} className={classes.authForm}>
        <input
          id='emailLogin'
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <br />
        <input
          id='passLogin'
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
        />
        <br />
        <button type='submit' id='loginButton'>
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default Login;
