import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import "./Login.css";

const Login = ({ overlayCloseHandler }) => {
  const [user, setUser] = useState({
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
      .signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {})
      .catch((error) => {
        setUser({
          ...user,
          error: error.message,
        });
      });
  };

  return (
    <div className='overlayAuth'>
      <div className='authHB'>
        <button type='button' onClick={overlayCloseHandler}>
          X
        </button>
      </div>
      <form onSubmit={handleSubmit} className='authForm'>
        <input
          type='text'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
        />
        <br />
        <button type='submit'>LOG IN</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
    </div>
  );
};

export default Login;
