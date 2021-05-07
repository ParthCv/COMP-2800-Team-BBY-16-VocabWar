import React, { useState, useEffect } from "react";
import "./points.css";
import { useFirestoreDocData, useFirestore } from "reactfire";

export default function Points(props) {
  const [points, setPoints] = useState(0);
  const playerRef = useFirestore()
    .collection("Player")
    .doc(`Player${props.player}`);
  const player = useFirestoreDocData(playerRef).data;
  const id = `player${props.player}`;

  useEffect(() => {
    if (player) {
      setPoints(player.point);
    }
  });

  return (
    <div id={id}>
      <h2>Player {props.player}</h2>
      <h2>{points}</h2>
    </div>
  );
}
