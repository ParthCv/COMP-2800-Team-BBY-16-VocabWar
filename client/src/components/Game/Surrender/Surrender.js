import React from "react";
import classes from "./Surrender.module.css";

const Surrender = (props) => {
  const surrenderHandler = () => {
    if (props.player === 1) {
      props.gameRef.set(
        {
          over: true,
          winner: 2,
        },
        { merge: true }
      );
      return;
    }
    props.gameRef.set(
      {
        over: true,
        winner: 1,
      },
      { merge: true }
    );
    return;
  };
  return (
    <div>
      <div className={classes.surrender}>
        <div
          className={classes["surrender-overlay"]}
          onClick={() => props.SetisSurrender(false)}
        >
          <div className={classes["surrender-text"]}>Surrender the game?</div>
          <div className={classes["surrenderButtons"]}>
            <button
              className={`${classes["surrender-button"]} ${classes.yes}`}
              onClick={surrenderHandler}
            >
              Yes
            </button>
            <button className={`${classes["surrender-button"]} ${classes.no}`}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Surrender;
