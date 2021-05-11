import React, { useState, useEffect } from "react";
import "./points.css";
import { useFirestoreDocData, useFirestore } from "reactfire";

export default function Points(props) {
  const points = useFirestoreDocData(props.gameRef).data[
    `p${props.player}Points`
  ];
  const id = `player${props.player}`;

  return (
    <div id={id}>
      <h2>Player {props.player}</h2>
      <h2>{points}</h2>
    </div>
  );
}
