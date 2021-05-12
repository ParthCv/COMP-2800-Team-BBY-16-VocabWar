import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
import './Signup.css';

const Signup = () => {
  const [user, setUser] = useState({
    nickname: '',
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
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(result => {
        result.user.updateProfile({
          displayName: user.nickname,
        });

        const myURL = { url: 'http://localhost:3000/' }

        result.user.sendEmailVerification(myURL)
          .then(() => {
            setUser({
              ...user,
            
            })
          })
          .catch(error => {
            setUser({
              ...user,
              error: error.message,
            })
          })

        firebase.auth().signOut();
      }).catch(error => {
        setUser({
          ...user,
          error: error.message,
        })
      })
  }

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nickname" name="nickname" onChange={handleChange}/><br />
        <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
        <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        <button type="submit">Sign Up</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
    </>
  )
};

export default Signup;