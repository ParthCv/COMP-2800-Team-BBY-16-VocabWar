import React, { useState, useRef } from "react";
import "firebase/firestore";
import { useFirestore, useAuth, useFirestoreDocData } from "reactfire";
import classes from "./JoinLobby.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import RickRoll from "./EasterEgg/RickRoll";

//Component resposible for displaying JoinLobby overlay
const JoinLobby = ({ setIsJoining, setIsCreating, setGameID }) => {
  const joinButton = useRef();
  const [code, setCode] = useState("");
  const [isRickRoll, SetIsRickRoll] = useState(false);
  const gameRef = useFirestore().collection("Games");
  const auth = useAuth();
  const user = useFirestore().collection("Users").doc(auth.currentUser.uid);
  const userData = useFirestoreDocData(user).data;

  // checkCode takes an code and check in the Games collection to see if such game exists.
  // if the code is 'vocab' it displays the easter egg.
  // also checks if the lobby is already full or not.
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
          joinButton.current.innerHTML = "Lobby Full";
          joinButton.current.style.backgroundColor = "#E74C3C";
          setCode("");
        }
        if (p1 && !p2) {
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
        }
      } catch (err) {
        joinButton.current.innerHTML = "Wrong Code";
        joinButton.current.style.backgroundColor = "#E74C3C";
        setCode("");
      }
    } else {
    }
  }

  return (
    <>
      {isRickRoll && <RickRoll SetIsRickRoll={SetIsRickRoll} />}
      <div className={classes.overlay}>
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
        <div className={classes.content}>
          <h1>Join Lobby</h1>
          <div>
            <input
              type='text'
              id={classes.codeInput}
              name='code'
              placeholder='Enter Lobby Code'
              value={code}
              onChange={(e) => setCode(e.target.value.trim().toLowerCase())}
              maxLength='7'
              minLength='6'
            />
          </div>
          <button
            id='joinBtn'
            className={classes.sub}
            type='submit'
            onClick={checkCode}
            ref={joinButton}
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinLobby;
