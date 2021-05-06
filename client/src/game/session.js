import React, { useState, useEffect } from "react";
import MaterialIcon from "material-icons-react";
import { sendWord } from "./wordcheck.js";
import "./session.css";

const Session = () => {
  const [points, setPoints] = useState(0);
  const [word, setWord] = useState("Helldsdsds");
  const [words, setWords] = useState([]);

  async function checkWord() {
    const result = await sendWord(word);
    if (result) {
      setWords([...words, document.getElementById("wordDisplay").innerHTML]);
      setPoints((prev) => prev + word.length);
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
      <h1>{points}</h1>
    </div>
  );
};

export default Session;
