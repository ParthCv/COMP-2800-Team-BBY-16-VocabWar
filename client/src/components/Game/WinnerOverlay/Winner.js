import React, { useEffect } from "react";
import classes from "./Winner.module.css";
import { useFirestore, useFirestoreDocData, useAuth } from "reactfire";

// fetches the points from both players
const WinnerPoints = (props) => {
  const auth = useAuth();
  const incrementer = useFirestore.FieldValue;
  const user = useFirestore().collection("Users").doc(auth.currentUser.uid);
  const p1Name = useFirestoreDocData(props.gameRef).data[`p1Name`];
  const p2Name = useFirestoreDocData(props.gameRef).data[`p2Name`];
  const points1 = useFirestoreDocData(props.gameRef).data[`p1Points`];
  const points2 = useFirestoreDocData(props.gameRef).data[`p2Points`];
  const winner = useFirestoreDocData(props.gameRef).data?.winner;
  const leaveLobbyResults = () => {
    props.setIsCreating(false);
  };
  useEffect(() => {
    if (props.player === 1) {
      user.set(
        {
          points: incrementer.increment(points1),
        },
        { merge: true }
      );
    }
    if (props.player === 2) {
      user.set(
        {
          points: incrementer.increment(points2),
        },
        { merge: true }
      );
    }
    if (props.over) {
      if (winner) {
        return;
      }
      if (points1 > points2) {
        props.gameRef.set(
          {
            winner: 1,
          },
          { merge: true }
        );
      } else if (points2 > points1) {
        props.gameRef.set(
          {
            winner: 2,
          },
          { merge: true }
        );
      } else {
        props.gameRef.set(
          {
            winner: 3,
          },
          { merge: true }
        );
      }
    }
  }, [props.over]);

  return (
    <div className={classes.overlay_results}>
      <div>
        {winner !== 3 ? (
          winner === props.player ? (
            <>
              <h1 id={classes.resultText}>You win</h1>
              <div className={`${classes.resultLine} ${classes.win}`}></div>
            </>
          ) : (
            <>
              <h1 id={classes.resultText}>You lose</h1>
              <div className={`${classes.resultLine} ${classes.lose}`}></div>
            </>
          )
        ) : (
          <>
            <h1 id={classes.resultText}>Game Tied</h1>
            <div className={`${classes.resultLine} ${classes.tied}`}></div>
          </>
        )}
        <div className={classes.scoreResult}>
          <h2 className={classes.playerResult}>{p1Name}</h2>
          <h2>{points1}pts</h2>
        </div>
        <div className={classes.scoreResult}>
          <h2 className={classes.playerResult}>{p2Name}</h2>
          <h2>{points2}pts</h2>
        </div>
      </div>
      <button className={classes.leaveLobbyResult} onClick={leaveLobbyResults}>
        Leave Lobby
      </button>
    </div>
  );
};
export default WinnerPoints;
