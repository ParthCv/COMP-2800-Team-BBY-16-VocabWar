import React, { useEffect } from "react";
import "firebase/firestore";
import Session from "./game/session.js";
<<<<<<< HEAD
import MainMenu from "./interface/MainMenu";
=======
import JoinLobby from "./game/JoinLobby"
>>>>>>> Parth_joinLobby
import "./App.css";
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
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
  useEffect(() => {
    window.addEventListener("resize", () => {
      document
        .querySelector(":root")
        .style.setProperty("--vh", window.innerHeight / 100 + "px");
    });
  }, []);
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
<<<<<<< HEAD
      <MainMenu />
=======
      {/* <Session /> */}
      <JoinLobby/>
>>>>>>> Parth_joinLobby
    </FirebaseAppProvider>
  );
}

export default App;
