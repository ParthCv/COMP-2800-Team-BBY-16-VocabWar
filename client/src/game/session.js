import React, { useState, useEffect } from "react";
import MaterialIcon from "material-icons-react";
import { sendWord } from "./wordcheck.js";
import { useFirestoreDocData, useFirestore } from "reactfire";
import Points from "./points.js";
import "./session.css";

const Session = () => {
  const [word, setWord] = useState("extraction");
  const [words, setWords] = useState([]);

  const playerRef = useFirestore().collection("Player").doc(`Player1`);
  const points = useFirestoreDocData(playerRef).data;

  async function checkWord() {
    const result = await sendWord(word);
    if (result) {
      setWords([...words, document.getElementById("wordDisplay").innerHTML]);
      playerRef.set(
        {
          point: points.point + word.length,
        },
        { merge: true }
      );
      document.getElementById("wordDisplay").style.borderBottom =
        "7px solid #2ecc71";
      setTimeout(() => {
        document.getElementById("wordDisplay").style.borderBottom =
          "7px solid black";
        document.getElementById("wordDisplay").style.color = "white";
        setTimeout(() => setWord(""), 300);
      }, 1000);
      document.getElementById("wordDisplay").style.color = "black";
    } else {
      document.getElementById("wordDisplay").style.borderBottom =
        "7px solid #e74c3c";
      setTimeout(() => {
        document.getElementById("wordDisplay").style.borderBottom =
          "7px solid black";
        document.getElementById("wordDisplay").style.color = "white";
        setTimeout(() => setWord(""), 300);
      }, 1000);
      document.getElementById("wordDisplay").style.color = "black";
    }
  }

  useEffect(() => {
    console.log(words);
  });

  return (
    <div className='session'>
      <div className='points'>
        <Points id='player1' player='1' />
        <Points id='player2' player='2' />
      </div>
      <h2 className='instruct'>Form Words Using These Letters</h2>
      <div className='wordControls'>
        <button className='wordButton'>
          <MaterialIcon icon='backspace' invert />
        </button>
        <h2 id='wordDisplay'>{word || <>&nbsp;</>}</h2>
        <button className='wordButton' type='button' onClick={checkWord}>
          <MaterialIcon icon='keyboard_return' invert />
        </button>
      </div>
    </div>
  );
};

export default Session;
