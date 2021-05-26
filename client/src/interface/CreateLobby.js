import React from "react";
import "./CreateLobby.css";
import Session from "../game/session";
import { useFirestore, useFirestoreDocData } from "reactfire";

export default function CreateLobby({ gameID, setIsCreating, player }) {
  const gameRef = useFirestore().collection("Games").doc(gameID);
  const gameData = useFirestoreDocData(gameRef);
  const p2 = gameData.data?.p2;
  const deleteKey = useFirestore.FieldValue.delete();
  const start = gameData.data?.start;
  const leaveLobby = () => {
    if (player === 1) {
      gameRef.delete();
    } else {
      gameRef.update({
        p2: deleteKey,
        p2Name: deleteKey,
      });
    }
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
        <Session
          gameRef={gameRef}
          setIsCreating={setIsCreating}
          gameData={gameData}
          player={player}
        />
      ) : (
        <div className='createLobby'>
          <div className='gameBox'>
            <h1>Game Lobby</h1>
            <div className='playerStatus'>
              <h2>{gameData.data?.p1Name || <>Player One</>}</h2>
            </div>
            <div className='playerStatus'>
              <h2>{gameData.data?.p2Name || <>Player Two</>}</h2>
            </div>
            <div className='inlobbyButtons'>
              <button onClick={leaveLobby}>Leave Lobby</button>
              {p2 ? (
                <button id='readyButton' onClick={startGame}>
                  Start
                </button>
              ) : (
                <button>Waiting For Friend</button>
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
