import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import "./StartPage.css";
import logo from "./BottomLogo.png";
import GoogleAuth from "./GoogleAuth";

export default function StartPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showGoogle, setShowGoogle] = useState(false);

  const handleLoginPage = () => {
    setShowSignUp(false);
    setShowLogin(true);
    setShowGoogle(false);
  };
  const handleSignUpPage = () => {
    setShowLogin(false);
    setShowSignUp(true);
    setShowGoogle(false);
  };

  const closeOverlay = () => {
    setShowLogin(false);
    setShowSignUp(false);
    setShowGoogle(false);
  };
  return (
    <div className='authControls'>
      <h1 className='appName'> Vocab War </h1>
      <img alt='logo' src={logo} className='logo' />
      {!showLogin && !showSignUp && (
        <div className='myform-button'>
          <button className='myform-btn' onClick={handleLoginPage}>
            Login
          </button>
          <button className='myform-btn' onClick={handleSignUpPage}>
            Create Account
          </button>
          <GoogleAuth />
        </div>
      )}
      {showLogin && <Login overlayCloseHandler={closeOverlay} />}
      {showSignUp && <Signup overlayCloseHandler={closeOverlay} />}
      {showGoogle && <GoogleAuth overlayCloseHandler={closeOverlay} />}
    </div>
  );
}
