import React, { useEffect } from "react";
import MainMenu from "./components/Layout/MainMenu";
import "./App.css";
import StartPage from "./components/Authentication/StartPage";
import { AuthCheck } from "reactfire";

// Component resposible for displaying whole App
const App = () => {
  // Sets global height variable to display game properly
  useEffect(() => {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight + "px");
    localStorage.setItem("sound", true);
  }, []);

  //Checks for login status
  return (
    <AuthCheck fallback={<StartPage />}>
      <MainMenu />
    </AuthCheck>
  );
};

export default App;
