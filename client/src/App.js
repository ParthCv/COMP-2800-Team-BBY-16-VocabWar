import React from "react";
import "firebase/firestore";
// import Session from "./game/session.js";
import "./App.css";
import Signup from './auth/Signup';
import Login from './auth/Login';
import Logout from './auth/Logout';
import { useUser } from 'reactfire';
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
  const user = useUser();
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <div className="App">
      {
        !user &&
        <Logout />
      }
      {
        user &&
        <>
          <Signup />
          <Login />
        </>
      }
    </div>
    </FirebaseAppProvider>
  );
}

export default App;
