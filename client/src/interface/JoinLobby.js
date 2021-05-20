import React, { useState } from "react";
import "firebase/firestore";
import {
  useFirestore,
  useAuth,
  useFirestoreDocOnce,
  useFirestoreDocData,
} from "reactfire";
import "./joinLobby.css";
import ClearIcon from "@material-ui/icons/Clear";
import RickRoll from "./RickRoll.js";

const JoinLobby = ({ setIsJoining, setIsCreating, setGameID }) => {
  const [code, setCode] = useState("");
  const [isRickRoll, SetIsRickRoll] = useState(false);
  const gameRef = useFirestore().collection("Games");
  const auth = useAuth();
  const user = useFirestore().collection("Users").doc(auth.currentUser.uid);
  const userData = useFirestoreDocData(user).data;
  async function checkCode(e) {
    e.preventDefault();
    if (code === "vocab") {
      SetIsRickRoll(true);
      if (isRickRoll === true) {
        setTimeout(() => SetIsRickRoll(false), 7000);
      }
      return;
    }
    if (code) {
      try {
        let gameDoc = await gameRef.doc(code).get();
        let p1 = await gameDoc.data().p1;
        let p2 = await gameDoc.data().p2;
        if (p2) {
          document.getElementById("joinBtn").innerHTML = "Lobby Full";
          document.getElementById("joinBtn").style.backgroundColor = "#E74C3C";
          setTimeout(() => {
            document.getElementById("joinBtn").innerHTML = "Join";
            document.getElementById("joinBtn").style.backgroundColor =
              "#E67E22";
          }, 1000);
          setCode("");
        }
        if (p1) {
          gameRef.doc(code).set(
            {
              p2: auth.currentUser.uid,
              p2Name: userData.nickname,
            },
            { merge: true }
          );
          setIsJoining(false);
          setIsCreating(true);
          setGameID(code);
          console.log("correct code=> " + code);
        }
      } catch (err) {
        console.log("game not found", err);
        document.getElementById("joinBtn").innerHTML = "Wrong Code";
        document.getElementById("joinBtn").style.backgroundColor = "#E74C3C";
        setTimeout(() => {
          document.getElementById("joinBtn").innerHTML = "Join";
          document.getElementById("joinBtn").style.backgroundColor = "#E67E22";
        }, 1000);
        setCode("");
      }
    } else {
      console.log("empty value");
    }
  }

  return (
    <>
      {isRickRoll && <RickRoll SetIsRickRoll={SetIsRickRoll} />}
      <div className='overlay'>
        <ClearIcon
          style={{
            color: "white",
            fontSize: 35,
            position: "absolute",
            right: 20,
            top: 20,
          }}
          onClick={() => setIsJoining(false)}
        />
        <div className='content'>
          <h1>Join Lobby</h1>
          <div className='lbHead'>
            <p>Lobby Code</p>
          </div>
          <div>
            <input
              type='text'
              id='codeInput'
              name='code'
              value={code}
              onChange={(e) => setCode(e.target.value.trim().toLowerCase())}
              maxLength='7'
              minLength='6'
            />
          </div>
          <button
            id='joinBtn'
            className='sub'
            type='submit'
            onClick={checkCode}
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinLobby;
