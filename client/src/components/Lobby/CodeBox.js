import React from "react";
import classes from "./CodeBox.module.css";

const CodeBox = (props) => {

  //Use navigator.share() method of the Web Share API to share game code.

  const shareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: "Vocab War Game",
        text: `Compete with me at VocabWar, code: ${props.gameID}. Play here -> https://vocabwar.netlify.app/`,
      });
    }
  };

  return (
    <div className={classes.codeBox}>
      <h1>Lobby Code</h1>
      <div>
        <h2>{props.gameID}</h2>
      </div>
      <button onClick={shareCode}>Share</button>
    </div>
  );
};

export default CodeBox;
