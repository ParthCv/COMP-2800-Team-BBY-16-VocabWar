import React, { useEffect } from "react";
import MainMenu from "./components/Layout/MainMenu";
import "./App.css";
import StartPage from "./components/Authentication/StartPage";
import { AuthCheck } from "reactfire";

const App = () => {
  useEffect(() => {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight + "px");
    localStorage.setItem("sound", true);
  }, []);

  return (
    <AuthCheck fallback={<StartPage />}>
      <MainMenu />
    </AuthCheck>
  );
};

export default App;
