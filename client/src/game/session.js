import React, { useState } from "react";
import { sendWord } from "./wordcheck.js";
import Timer from "./Timer";
import WinnerPoints from "./winner";
import { useFirestoreDocData } from "reactfire";
import Points from "./points.js";
import WordArray from "./WordArray.js";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import BackspaceIcon from "@material-ui/icons/Backspace";
import Surrender from "./surrender";
import "./session.css";
import useSound from "use-sound";
import Wrong from "./audio/wrong.mp3";
import Correct from "./audio/correct.mp3";

export default function Session({ gameRef, player, setIsCreating }) {
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);
  const isSound = localStorage.getItem("sound");
  const points = useFirestoreDocData(gameRef).data[`p${player}Points`];
  const letterArray = useFirestoreDocData(gameRef).data?.letters;
  const over = useFirestoreDocData(gameRef).data?.over;
  const [isSurrender, SetisSurrender] = useState(false);

  const [playWrong] = useSound(Wrong);
  const [playCorrect] = useSound(Correct);

  async function checkWord() {
    if (!words.includes(word)) {
      const result = await sendWord(word);
      if (result) {
        setWords([...words, word]);
        gameRef.set(
          {
            [`p${player}Points`]: points + word.length,
          },
          { merge: true }
        );
        document.getElementById("wordDisplay").style.borderBottom =
          "7px solid #2abc68";
        if (isSound === "true") {
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

  function backspace() {
    setWord((prev) => prev.substring(0, prev.length - 1));
  }

  function handleAddLetter(e) {
    document.getElementById("wordDisplay").style.borderBottom =
      "7px solid black";
    setWord((prev) => prev + e.target.value);
  }

  return (
    <div className='session'>
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
      <div className='points'>
        <Points gameRef={gameRef} id='player1' player='1' />
        <div className='centerTimer'>
          <Timer minutes={50} seconds={30} gameRef={gameRef}></Timer>
          <button type='button' onClick={() => SetisSurrender(true)}>
            Surrender
          </button>
        </div>
        <Points gameRef={gameRef} id='player2' player='2' />
      </div>
      <WordArray words={words} />

      <div className='wordControls'>
        <h2 id='wordDisplay'>{word || <>&nbsp;</>}</h2>
        <button
          id='backspace'
          className='wordButton'
          type='button'
          onClick={backspace}
        >
          <BackspaceIcon className='inputIcons' fontSize='large' />
        </button>
        <button
          id='submitWord'
          className='wordButton'
          type='button'
          onClick={checkWord}
        >
          <KeyboardReturnIcon className='inputIcons' fontSize='large' />
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
