import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import './Signup.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    error: '',
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: '',
    })
  };


  const firebase = useFirebaseApp();
  const handleSubmit = e => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(result => {
      })
      .catch(error => {
        setUser({
          ...user,
          error: error.message,
        })
      })
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
        <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        <button type="submit">Log in</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
    </>
  )
};

export default Login;