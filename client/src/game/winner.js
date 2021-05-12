import React, { useState, useEffect } from "react";
import "./winner.css";
import { useFirestoreDocData, useFirestore } from "reactfire";

// fetches the points from both players
function WinnerPoints(props) {
  const points1 = useFirestoreDocData(props.gameRef).data[
    `p1Points`
  ];
  const points2 = useFirestoreDocData(props.gameRef).data[
    `p2Points`
  ];
  const id = `player${props.player}`;
}
  // make it so when the timer runs out, this function is called.
  // return true if player 1 points > player 2 points and vice versa
  function Winner() {
    const [winner1, setWinner1] = useState(false);
    const [winner2, setWinner2] = useState(false);
    const chooseWinner = () => {
      if (points1 > points2) {
        setWinner1(true);
      } else if (points2 > points1) {
        setWinner2(true);
      }
    }
  }
  // need to make it so if player 1 = true, display you win and green line.
  useEffect(() => {

    });
  return (
    <div className = 'overlay'>
      <div id = "text">
        <h1>You win</h1>
      <div class = "win"></div>
      <div id={id}>
      <h2>Player {props.player}</h2>
      <h2>{points1}</h2>
    </div>
    </div>
    <button class = "button">Leave Lobby</button>
    </div>
  );

export default WinnerPoints;