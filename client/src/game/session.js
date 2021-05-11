import React, { useState, useEffect } from "react";
import MaterialIcon from "material-icons-react";
import { sendWord } from "./wordcheck.js";
import Timer from "./Timer";
import { useFirestoreDocData, useFirestore } from "reactfire";
import Points from "./points.js";
import { v4 as uuidv4 } from "uuid";
import "./session.css";

const Session = () => {
<<<<<<< HEAD
  const [points, setPoints] = useState(0);
  const [word, setWord] = useState("All");
=======
  const [word, setWord] = useState("extraction");
>>>>>>> a8640b2e7ebc07db30d019cb6df0ed3f618f5471
  const [words, setWords] = useState([]);

  const playerRef = useFirestore().collection("Player").doc(`Player1`);
  const points = useFirestoreDocData(playerRef).data;
  const gameRef = useFirestore().collection("game").doc(`uzMaOwhU3YcKafFkVwZ7`);
  const letterArray = useFirestoreDocData(gameRef).data;
  console.log(letterArray);

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
      setTimeout(() => {
        document.getElementById("wordDisplay").style.color = "black";
      }, 1010);
    } else {
      document.getElementById("wordDisplay").style.borderBottom =
        "7px solid #e74c3c";
      setTimeout(() => {
        document.getElementById("wordDisplay").style.borderBottom =
          "7px solid black";
        document.getElementById("wordDisplay").style.color = "white";
        setTimeout(() => setWord(""), 300);
      }, 1000);
      setTimeout(() => {
        document.getElementById("wordDisplay").style.color = "black";
      }, 1010);
    }
  }

  function backspace() {
    setWord((prev) => prev.substring(0, prev.length - 1));
  }

  // LETTERS //////////////////////

  const continents = "BCDFGHJKLMNPQRSTVWXYZ";
  const vowels = "AEIOU";

  useEffect(() => {
    if (letterArray) {
      let array = letterArray && letterArray.letters;
      let lastletter = null;
      while (array.length <= 5) {
        if (array.length % 2 == 0) {
          let randomCharacter =
            continents[Math.floor(Math.random() * continents.length)];
          if (lastletter != randomCharacter)
            array = [...array, randomCharacter];
        }
        if (array.length % 2 != 0) {
          let randomCharacter =
            vowels[Math.floor(Math.random() * vowels.length)];
          if (lastletter != randomCharacter)
            array = [...array, randomCharacter];
        }
        lastletter = array[array.length - 1];
        console.log(array);
      }
      gameRef.set(
        {
          letters: array,
        },
        { merge: true }
      );
    }
  });

  function handleAddLetter(e) {
    setWord((prev) => prev + e.target.value);
  }

  // END OF LETTERS

  useEffect(() => {
    console.log(words);
    console.log(letterArray && letterArray.letters.length);
  });

  return (
    <div className='session'>
      <div className='points'>
        <Points id='player1' player='1' />
        <Points id='player2' player='2' />
      </div>
      <Timer minutes={1} seconds={30}></Timer>
      <h2 className='instruct'>Form Words Using These Letters</h2>
      <div className='wordControls'>
        <button className='wordButton' type='button' onClick={backspace}>
          <MaterialIcon icon='backspace' invert />
        </button>
        <h2 id='wordDisplay'>{word || <>&nbsp;</>}</h2>
        <button className='wordButton' type='button' onClick={checkWord}>
          <MaterialIcon icon='keyboard_return' invert />
        </button>
      </div>
      {letterArray && (
        <div className='grid-cointainer'>
          <button onClick={handleAddLetter} value={letterArray.letters[0]}>
            {letterArray.letters[0]}
          </button>
          <button onClick={handleAddLetter} value={letterArray.letters[1]}>
            {letterArray.letters[1]}
          </button>
          <button onClick={handleAddLetter} value={letterArray.letters[2]}>
            {letterArray.letters[2]}
          </button>
          <button onClick={handleAddLetter} value={letterArray.letters[3]}>
            {letterArray.letters[3]}
          </button>
          <button onClick={handleAddLetter} value={letterArray.letters[4]}>
            {letterArray.letters[4]}
          </button>
          <button onClick={handleAddLetter} value={letterArray.letters[5]}>
            {letterArray.letters[5]}
          </button>
        </div>
      )}
    </div>
  );
};

export default Session;
