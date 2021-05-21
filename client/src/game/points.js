import React, { useState, useEffect } from "react";
import "./points.css";
import { useFirestoreDocData } from "reactfire";

export default function Points(props) {
  const points = useFirestoreDocData(props.gameRef).data[
    `p${props.player}Points`
  ];
  const [name, setName] = useState("Player");
  const gameData = useFirestoreDocData(props.gameRef).data;
  useEffect(() => {
    if (props.player == 1) {
      setName(gameData.p1Name);
    } else {
      setName(gameData.p2Name);
    }
  }, [gameData]);
  const id = `player${props.player}`;

  return (
    <div id={id}>
      <div>
        <h2>{name}</h2>
        <h2>{points}</h2>
      </div>
    </div>
  );
}
