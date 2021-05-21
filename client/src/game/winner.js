import React, { useEffect } from "react";
import "./winner.css";
import { useFirestore, useFirestoreDocData, useAuth } from "reactfire";

// fetches the points from both players
function WinnerPoints(props) {
  const auth = useAuth();
  const incrementer = useFirestore.FieldValue;
  const user = useFirestore().collection("Users").doc(auth.currentUser.uid);
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
      console.log(winner, props.player);
    }
  }, [props.over]);

  return (
    <div className='overlay_results'>
      <div>
        {winner !== 3 ? (
          winner === props.player ? (
            <>
              <h1 id='resultText'>You win</h1>
              <div className='resultLine win'></div>
            </>
          ) : (
            <>
              <h1 id='resultText'>You lose</h1>
              <div className='resultLine lose'></div>
            </>
          )
        ) : (
          <>
            <h1 id='resultText'>Game Tied</h1>
            <div className='resultLine tied'></div>
          </>
        )}
        <div className='scoreResult'>
          <h2 className='playerResult'>Player 1</h2>
          <h2>{points1}pts</h2>
        </div>
        <div className='scoreResult'>
          <h2 className='playerResult'>Player 2</h2>
          <h2>{points2}pts</h2>
        </div>
      </div>
      <button className='leaveLobbyResult' onClick={leaveLobbyResults}>
        Leave Lobby
      </button>
    </div>
  );
}
export default WinnerPoints;
