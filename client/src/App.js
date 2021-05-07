//import logo from './logo.svg';
import './App.css';
import Timer from './game/Timer'
import "firebase/firestore";
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
  return (
   <>
   <FirebaseAppProvider firebaseConfig={firebaseConfig}>   
    <Timer minutes={0} seconds={10}></Timer>
    </FirebaseAppProvider>
  </>
  );
}

export default App;
