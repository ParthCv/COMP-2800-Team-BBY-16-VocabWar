import React from "react";
import "./CreateLobby.css";
import Session from "../game/session";
import { useFirestore, useFirestoreDocData } from "reactfire";

export default function CreateLobby({ gameID, setIsCreating }) {
  const gameRef = useFirestore().collection("Games").doc(gameID);
  const gameData = useFirestoreDocData(gameRef);
  const p2 = gameData.data?.p2;
  const start = gameData.data?.start;

  const leaveLobby = () => {
    gameRef.delete();
    setIsCreating(false);
  };

  const startGame = () => {
    gameRef.set(
      {
        start: true,
      },
      { merge: true }
    );
  };

  const shareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: "Vocab War Game",
        text: `Compete with me at VocabWar, code: ${gameID}`,
      });
    }
  };

  return (
    <>
      {start ? (
        <Session gameRef={gameRef} gameData={gameData} player='1' />
      ) : (
        <div className='createLobby'>
          <div className='gameBox'>
            <h1>Game Lobby</h1>
            <div className='playerStatus'>
              <h2>Player One</h2>
            </div>
            <div className='playerStatus'>
              <h2>Player Two</h2>
            </div>
            <div className='inlobbyButtons'>
              <button onClick={leaveLobby}>Leave Lobby</button>
              {p2 ? (
                <button id='readyButton' onClick={startGame}>
                  Start
                </button>
              ) : (
                <button>Waiting</button>
              )}
            </div>
          </div>
          <div className='codeBox'>
            <h1>Lobby Code</h1>
            <div>
              <h2>{gameID}</h2>
            </div>
            <button onClick={shareCode}>Share</button>
          </div>
        </div>
      )}
    </>
  );
}
