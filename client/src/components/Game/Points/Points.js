import React, { useState, useEffect } from "react";
import { useFirestoreDocData } from "reactfire";
import classes from "./Points.module.css";

const Points = (props) => {
  const points = useFirestoreDocData(props.gameRef).data[
    `p${props.player}Points`
  ];
  const [name, setName] = useState("Player");
  const gameData = useFirestoreDocData(props.gameRef).data;
  useEffect(() => {
    if (Number(props.player) === 1) {
      setName(gameData.p1Name);
    } else {
      setName(gameData.p2Name);
    }
  }, [gameData, props.player]);

  return (
    <div className={classes.points}>
      <div>
        <h2>{name}</h2>
        <h2>{points}</h2>
      </div>
    </div>
  );
};

export default Points;
