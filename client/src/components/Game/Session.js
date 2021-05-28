import React, { useState, useEffect } from "react";
import { sendWord } from "./wordcheck.js";
import Timer from "./Timer/Timer";
import WinnerPoints from "./WinnerOverlay/Winner";
import { useFirestoreDocData, useFirestore } from "reactfire";
import Points from "./Points/Points";
import WordArray from "./WordArray/WordArray";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import BackspaceIcon from "@material-ui/icons/Backspace";
import Surrender from "./Surrender/Surrender";
import classes from "./Session.module.css";
import useSound from "use-sound";
import Wrong from "../../assets/sounds/wrong.mp3";
import Correct from "../../assets/sounds/correct.mp3";

const Session = ({ gameRef, player, setIsCreating }) => {
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);
  const isSound = localStorage.getItem("sound");
  const incrementer = useFirestore.FieldValue;
  const letterArray = useFirestoreDocData(gameRef).data?.letters;
  const over = useFirestoreDocData(gameRef).data?.over;
  const [isSurrender, SetisSurrender] = useState(false);

  const [playWrong] = useSound(Wrong);
  const [playCorrect] = useSound(Correct);

  // To prevent reloading by accident during the game.

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  // Check is word is valid using the sendWord function from wordcheck.js
  // Plays the sound and changes the color of the line based upon the response.
  // Stores the word in the array if correct.

  async function checkWord() {
    if (!words.includes(word)) {
      const result = await sendWord(word);
      if (result) {
        setWords([...words, word]);
        gameRef.set(
          {
            [`p${player}Points`]: incrementer.increment(word.length),
          },
          { merge: true }
        );
        document.getElementById("wordDisplay").style.borderBottom =
          "7px solid #2abc68";
        if (isSound) {
          playCorrect();
        }
      } else {
        document.getElementById("wordDisplay").style.borderBottom =
          "7px solid #e74c3c";
        if (isSound) {
          playWrong();
        }
      }
    } else {
      document.getElementById("wordDisplay").style.borderBottom =
        "7px solid #e74c3c";
      if (isSound) {
        playWrong();
      }
    }
    setWord("");
  }

  // function to act as a backspace when button is clicked.

  function backspace() {
    setWord((prev) => prev.substring(0, prev.length - 1));
  }

  // function to handle letter addition.

  function handleAddLetter(e) {
    document.getElementById("wordDisplay").style.borderBottom =
      "7px solid black";
    setWord((prev) => prev + e.target.value);
  }

  return (
    <div className={classes.session}>
      <div className={classes.points}>
        <Points gameRef={gameRef} id='player1' player='1' />
        <div className={classes.centerTimer}>
          <Timer minutes={1} seconds={30} gameRef={gameRef}></Timer>
          <button type='button' onClick={() => SetisSurrender(true)}>
            Surrender
          </button>
        </div>
        <Points gameRef={gameRef} id='player2' player='2' />
      </div>
      <WordArray words={words} />
      <div className={classes.wordControls}>
        <h2 id='wordDisplay' className={classes.wordDisplay}>
          {word || <>&nbsp;</>}
        </h2>
        <button
          id={classes.backspace}
          className={classes.wordButton}
          type='button'
          onClick={backspace}
        >
          <BackspaceIcon className='inputIcons' fontSize='large' />
        </button>
        <button
          id={classes.submitWord}
          className={classes.wordButton}
          type='button'
          onClick={checkWord}
        >
          <KeyboardReturnIcon className={classes.inputIcons} fontSize='large' />
        </button>
      </div>
      {letterArray && (
        <div className={classes["grid-cointainer"]}>
          {letterArray.map((letter, index) => {
            return (
              <button onClick={handleAddLetter} value={letter} key={index}>
                {letter}
              </button>
            );
          })}
        </div>
      )}
      {over && (
        <WinnerPoints
          over={over}
          setIsCreating={setIsCreating}
          gameRef={gameRef}
          player={player}
        />
      )}
      {isSurrender && (
        <Surrender
          SetisSurrender={SetisSurrender}
          gameRef={gameRef}
          player={player}
        />
      )}
    </div>
  );
};

export default Session;
