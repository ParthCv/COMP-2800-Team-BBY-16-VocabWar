import React, { useState, useEffect } from "react";
import MaterialIcon from "material-icons-react";
import CreateLobby from "./CreateLobby";
import JoinLobby from "./JoinLobby";
import "./MainMenu.css";
import { useFirestore, useAuth } from "reactfire";
import AboutUs from "./AboutUs";

export default function MainMenu() {
  const auth = useAuth();
  const [isCreating, setIsCreating] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [isAboutUs, setIsAboutUs] = useState(false);
  const [gameID, setGameID] = useState();
  const [player, setPlayer] = useState(1);
  const gameRef = useFirestore().collection("Games");
  const createLobby = () => {
    setPlayer(1);
    setIsCreating(true);
    setGameID(Math.random().toString(36).substr(2, 6));
  };

  const logoutHandler = () => {
    auth.signOut();
  };

  useEffect(() => {
    const continents = "BCDFGHJKLMNPQRSTVWXYZ";
    const vowels = "AEIOU";

    if (isCreating && player === 1) {
      setIsJoining(false);
      let array = [];
      let lastletter = null;
      while (array.length <= 5) {
        if (array.length % 2 === 0) {
          let randomCharacter =
            continents[Math.floor(Math.random() * continents.length)];
          while (
            array[0] === randomCharacter ||
            array[1] === randomCharacter ||
            array[2] === randomCharacter ||
            array[3] === randomCharacter ||
            array[4] === randomCharacter ||
            array[5] === randomCharacter
          ) {
            randomCharacter =
              continents[Math.floor(Math.random() * continents.length)];
          }
          if (lastletter !== randomCharacter)
            array = [...array, randomCharacter];
        }
        if (array.length % 2 !== 0) {
          let randomCharacter =
            vowels[Math.floor(Math.random() * vowels.length)];
          while (
            array[0] === randomCharacter ||
            array[1] === randomCharacter ||
            array[2] === randomCharacter ||
            array[3] === randomCharacter ||
            array[4] === randomCharacter ||
            array[5] === randomCharacter
          ) {
            randomCharacter = vowels[Math.floor(Math.random() * vowels.length)];
          }
          if (lastletter !== randomCharacter)
            array = [...array, randomCharacter];
        }
        lastletter = array[array.length - 1];
      }
      gameRef.doc(gameID).set({
        code: gameID,
        p1: auth.currentUser.uid,
        p1Points: 0,
        p2Points: 0,
        start: false,
        letters: array,
      });
    }
  }, [gameID]);

  useEffect(() =>
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight + "px")
  );

  return (isAboutUs? <AboutUs isAboutUs={isAboutUs}/> :(
    <div className='mainmenu'>
      <div className='header'>
        <h1>Vocab War</h1>
      </div>
      {!isCreating ? (
        <div className='lobbyButtons'>
          <button onClick={createLobby}>
            <span className='lobbyIcon'>
              <MaterialIcon icon='gamepad' invert />
            </span>
            Create a Lobby
          </button>
          <button
            onClick={() => {
              setIsJoining((prevState) => !prevState);
              setPlayer(2);
            }}
          >
            <span className='lobbyIcon'>
              <MaterialIcon icon='person_add' invert />
            </span>
            Join a Lobby
          </button>
          <button id='logoutButton' type='button' onClick={logoutHandler}>
            Logout
          </button>
          <button id='logoutButton' type='button' onClick={()=>{setIsAboutUs(true);}}>
            About Us
          </button>
          {isJoining && (
            <JoinLobby
              setIsJoining={setIsJoining}
              setIsCreating={setIsCreating}
              setGameID={setGameID}
            />
          )}
        </div>
      ) : (
        <CreateLobby
          gameID={gameID}
          setIsCreating={setIsCreating}
          player={player}
        />
      )}
     
    </div>
  ));
}
