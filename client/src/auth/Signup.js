import React, { useState } from "react";
import { useFirebaseApp, useFirestore } from "reactfire";
import "firebase/auth";
import "./Signup.css";
import ClearIcon from "@material-ui/icons/Clear";

const Signup = ({ overlayCloseHandler }) => {
  const usersRef = useFirestore().collection("Users");
  const [user, setUser] = useState({
    nickname: "",
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const firebase = useFirebaseApp();

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
      });
  };

  return (
    <div className='overlayAuth_Sign'>
      <div className='authHB'>
        <button type='button' onClick={overlayCloseHandler}>
          <ClearIcon />
        </button>
      </div>
      <form onSubmit={handleSubmit} className='authForm'>
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
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          pattern='[A-za-z0-9]{6,40}'
          onChange={handleChange}
        />
        <button type='submit'>Sign Up</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
    </div>
  );
};

export default Signup;
