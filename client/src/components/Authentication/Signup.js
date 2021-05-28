import React, { useState, useRef } from "react";
import { useFirebaseApp, useFirestore } from "reactfire";
import "firebase/auth";
import classes from "./Signup.module.css";
import ClearIcon from "@material-ui/icons/Clear";

//Component resposible for signing up of new users
const Signup = ({ overlayCloseHandler }) => {
  const signButton = useRef();
  const usersRef = useFirestore().collection("Users");
  const [user, setUser] = useState({
    nickname: "",
    email: "",
    password: "",
    error: "",
  });

  // stores the input in signup form.

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const firebase = useFirebaseApp();

  // Registers the new user with firebase and catches any error.

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        usersRef.doc(result.user.uid).set({
          email: result.user.email,
          nickname: user.nickname,
          points: +0,
        });
      })
      .catch((error) => {
        signButton.current.innerHTML = "Email already in use";
        e.target.elements.email.focus();
      });
  };

  return (
    <div className={classes.overlayAuth_Sign}>
      <div className={classes.authHB}>
        <button type='button' onClick={overlayCloseHandler}>
          <ClearIcon />
        </button>
      </div>
      <form onSubmit={handleSubmit} className={classes.authForm_Sign}>
        <input
          type='text'
          placeholder='Nickname'
          name='nickname'
          pattern='[A-za-z0-9]{2,20}'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          pattern='[A-za-z0-9]{6,40}'
          onChange={handleChange}
        />
        <button ref={signButton} type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
