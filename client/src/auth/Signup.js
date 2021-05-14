import React, { useState } from "react";
import { useFirebaseApp, useFirestore } from "reactfire";
import "firebase/auth";
import "./Signup.css";

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
        });
      });
  };

  return (
    <div className='overlayAuth_Sign'>
      <div className='authHB'>
        <button type='button' onClick={overlayCloseHandler}>
          X
        </button>
      </div>
      <form onSubmit={handleSubmit} className='authForm'>
        <input
          type='text'
          placeholder='Nickname'
          name='nickname'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
        />
        <button type='submit'>Sign Up</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
    </div>
  );
};

export default Signup;
