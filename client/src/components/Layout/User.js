import React from "react";
import classes from "./User.module.css";

// Displays the user info fetched from firebase.

const User = (props) => {
  return (
    <div className={classes.userDetails}>
      <h2 className={classes.nickname}>
        Welcome <span>{props.nickname}</span>
      </h2>
      <div className={classes.levelProgress}>
        <h2 className={classes.leveltext}>
          Level {Math.floor(props.points / 20) + 1}
        </h2>
        <div className={classes.level}>
          <div
            className={classes.levelInner}
            style={{ width: `${(props.points % 20) * 5}%` }}
          ></div>
        </div>
        <h2 className={classes.leveltext}>Points {props.points}</h2>
      </div>
    </div>
  );
};

export default User;
