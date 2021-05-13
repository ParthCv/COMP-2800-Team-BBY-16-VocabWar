import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { useUser } from "reactfire";
import "./StartPage.css";
import logo from "./BottomLogo.png";

export default function StartPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleLoginPage = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };
  const handleSignUpPage = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const closeOverlay = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };
  const user = useUser();
  return (
    <div className='authControls'>
      <h1 className='appName'> Vocab War </h1>
      <img src={logo} className='logo' />
      {!showLogin && !showSignUp && (
        <div className='myform-button'>
          <button className='myform-btn' onClick={handleLoginPage}>
            Login
          </button>
          <button className='myform-btn' onClick={handleSignUpPage}>
            Create Account
          </button>
          <button className='myform-btn'>Continue With Google</button>
        </div>
      )}
      {showLogin && <Login overlayCloseHandler={closeOverlay} />}
      {showSignUp && <Signup overlayCloseHandler={closeOverlay} />}
    </div>
  );
}
