import React from "react";
import classes from "./CreateLobby.module.css";
import Session from "../Game/Session";
import CodeBox from "./CodeBox";
import { useFirestore, useFirestoreDocData } from "reactfire";

//Component resposible for displaying lobby page, changes behaviour depending on player 1 or player 2
const CreateLobby = ({ gameID, setIsCreating, player }) => {
  const gameRef = useFirestore().collection("Games").doc(gameID);
  const gameData = useFirestoreDocData(gameRef);
  const p2 = gameData.data?.p2;
  const deleteKey = useFirestore.FieldValue.delete();
  const start = gameData.data?.start;

  // leave Lobby function deletes the doc from the collection with the id of the game code.
  // Redirects back to the home page.
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

  // Sets the start to true in the Games collection doc of the current game ID.
  const startGame = () => {
    gameRef.set(
      {
        start: true,
      },
      { merge: true }
    );
  };

  // Displays the Game Session.
  if (start) {
    return (
      <Session
        gameRef={gameRef}
        setIsCreating={setIsCreating}
        gameData={gameData}
        player={player}
      />
    );
  }
  return (
    <div className={classes.createLobby}>
      <div className={classes.gameBox}>
        <h1>Game Lobby</h1>
        <div className={classes.playerStatus}>
          <h2>{gameData.data?.p1Name || <>Player One</>}</h2>
        </div>
        <div className={classes.playerStatus}>
          <h2>{gameData.data?.p2Name || <>Player Two</>}</h2>
        </div>
        <div className={classes.inlobbyButtons}>
          <button onClick={leaveLobby}>Leave Lobby</button>
          {p2 ? (
            <button id={classes.readyButton} onClick={startGame}>
              Start
            </button>
          ) : (
            <button>Waiting For Friend</button>
          )}
        </div>
      </div>
      <CodeBox gameID={gameID} />
    </div>
  );
};

export default CreateLobby;
