import React, { useEffect } from "react";
import "firebase/firestore";
import Session from "./game/session.js";
import "./App.css";
import StartPage from "./auth/StartPage";
import { useUser, AuthCheck } from "reactfire";
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
  useAuth,
} from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyD7RM--kySDQtpuFkxa9IImfEl-4hlFo3k",
  authDomain: "vocabwar.firebaseapp.com",
  projectId: "vocabwar",
  storageBucket: "vocabwar.appspot.com",
  messagingSenderId: "919676092490",
  appId: "1:919676092490:web:9a950472fcc297688626b3",
};

function App() {
  const auth = useAuth();
  const user = useUser();
  console.log(user.displayName);
  console.log(user.uuid);
  useEffect(() => {
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight + "px");
  }, []);

  const logoutHandler = () => {
    auth.signOut();
  };
  return (
    <AuthCheck fallback={<StartPage />}>
      <button type='button' onClick={logoutHandler}>
        Logout
      </button>
    </AuthCheck>
  );
}

export default App;
