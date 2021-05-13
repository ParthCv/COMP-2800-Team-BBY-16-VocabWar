import React, { useState, useEffect } from "react";
import MaterialIcon from "material-icons-react";
import { sendWord } from "./wordcheck.js";
import Timer from "./Timer";
import WinnerPoints from "./winner";
import { useFirestoreDocData, useFirestore } from "reactfire";
import Points from "./points.js";
<<<<<<< HEAD
import "./session.css";

export default function Session({ gameRef, player }) {
=======
//import { v4 as uuidv4 } from "uuid";
import "./session.css";

const Session = () => {
>>>>>>> Parth_joinLobby
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);

  const points = useFirestoreDocData(gameRef).data[`p${player}Points`];
  const letterArray = useFirestoreDocData(gameRef).data?.letters;
  const over = useFirestoreDocData(gameRef).data?.over;

  async function checkWord() {
    const result = await sendWord(word);
    if (result) {
      setWords([...words, document.getElementById("wordDisplay").innerHTML]);
      gameRef.set(
        {
          [`p${player}Points`]: points + word.length,
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

<<<<<<< HEAD
=======
  // LETTERS //////////////////////

  const continents = "BCDFGHJKLMNPQRSTVWXYZ";
  const vowels = "AEIOU";

  useEffect(() => {
    if (letterArray) {
      let array = letterArray && letterArray.letters;
      let lastletter = null;
      while (array.length <= 5) {
        if (array.length % 2 === 0) {
          let randomCharacter =
            continents[Math.floor(Math.random() * continents.length)];
          if (lastletter !== randomCharacter)
            array = [...array, randomCharacter];
        }
        if (array.length % 2 !== 0) {
          let randomCharacter =
            vowels[Math.floor(Math.random() * vowels.length)];
          if (lastletter !== randomCharacter)
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

>>>>>>> Parth_joinLobby
  function handleAddLetter(e) {
    setWord((prev) => prev + e.target.value);
  }

  return (
    <div className='session'>
      {over && <WinnerPoints over={over} gameRef={gameRef} player={player} />}
      <div className='points'>
        <Points gameRef={gameRef} id='player1' player='1' />
        <Points gameRef={gameRef} id='player2' player='2' />
      </div>
      <Timer minutes={0} seconds={10} gameRef={gameRef}></Timer>
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
          <button onClick={handleAddLetter} value={letterArray[0]}>
            {letterArray[0]}
          </button>
          <button onClick={handleAddLetter} value={letterArray[1]}>
            {letterArray[1]}
          </button>
          <button onClick={handleAddLetter} value={letterArray[2]}>
            {letterArray[2]}
          </button>
          <button onClick={handleAddLetter} value={letterArray[3]}>
            {letterArray[3]}
          </button>
          <button onClick={handleAddLetter} value={letterArray[4]}>
            {letterArray[4]}
          </button>
          <button onClick={handleAddLetter} value={letterArray[5]}>
            {letterArray[5]}
          </button>
        </div>
      )}
    </div>
  );
}
