import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import GoogleAuth from "./GoogleAuth";
import classes from "./StartPage.module.css";
import logo from "../../assets/images/BottomLogo.png";

//Component resposible for Showing authentication options
const StartPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showGoogle, setShowGoogle] = useState(false);

  //Overlay handlers
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
    <div className={classes.authControls}>
      <h1 className={classes.appName}> Vocab War </h1>
      <img alt='logo' src={logo} className={classes.logo} />
      {!showLogin && !showSignUp && (
        <div className={classes["myform-button"]}>
          <button className={classes["myform-btn"]} onClick={handleLoginPage}>
            Login
          </button>
          <button className={classes["myform-btn"]} onClick={handleSignUpPage}>
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
};

export default StartPage;
