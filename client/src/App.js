import React, { useEffect } from "react";
import "firebase/firestore";
import MainMenu from "./interface/MainMenu";
import "./App.css";
import StartPage from "./auth/StartPage";
import { AuthCheck } from "reactfire";

function App({ usersID }) {
  // const usersData = useFirestoreDocData(gameRef);

  useEffect(() => {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight + "px");
  }, []);

  return (
    <AuthCheck fallback={<StartPage />}>
      <MainMenu />
    </AuthCheck>
  );
}

export default App;
