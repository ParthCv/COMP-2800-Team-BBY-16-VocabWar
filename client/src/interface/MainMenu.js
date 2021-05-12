import React, { useState, useEffect } from "react";
import MaterialIcon from "material-icons-react";
import CreateLobby from "./CreateLobby";
import "./MainMenu.css";
import { useFirestore } from "reactfire";

export default function MainMenu() {
  const [isCreating, setIsCreating] = useState(false);
  const [gameID, setGameID] = useState();
  const gameRef = useFirestore().collection("Games");

  const createLobby = () => {
    setIsCreating(true);
    setGameID(Math.random().toString(36).substr(2, 6));
  };

  useEffect(() => {
    const continents = "BCDFGHJKLMNPQRSTVWXYZ";
    const vowels = "AEIOU";

    if (isCreating) {
      let array = [];
      let lastletter = null;
      while (array.length <= 5) {
        if (array.length % 2 == 0) {
          let randomCharacter =
            continents[Math.floor(Math.random() * continents.length)];
          if (lastletter != randomCharacter)
            array = [...array, randomCharacter];
        }
        if (array.length % 2 != 0) {
          let randomCharacter =
            vowels[Math.floor(Math.random() * vowels.length)];
          if (lastletter != randomCharacter)
            array = [...array, randomCharacter];
        }
        lastletter = array[array.length - 1];
      }
      gameRef.doc(gameID).set({
        code: gameID,
        p1: "hey",
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

  return (
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
          <button>
            <span className='lobbyIcon'>
              <MaterialIcon icon='person_add' invert />
            </span>
            Join a Lobby
          </button>
        </div>
      ) : (
        <CreateLobby gameID={gameID} setIsCreating={setIsCreating} />
      )}
    </div>
  );
}
