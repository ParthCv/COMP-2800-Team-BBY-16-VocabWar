import React, { useState, useEffect } from "react";
import MaterialIcon from "material-icons-react";
import { sendWord } from "./wordcheck.js";
import Timer from "./Timer";
import { useFirestoreDocData, useFirestore } from "reactfire";
import Points from "./points.js";
import RandLetters from './Letters/randLetters'
import {v4 as uuidv4} from 'uuid'
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

  // LETTERS //////////////////////

  const LOCAL_STORAGE_KEY = 'letterApp.letters'
const continents = "BCDFGHJKLMNPQRSTVWXZ"
const vowels = "AEIOUY"
const randomCharacter = continents[Math.floor(Math.random() * continents.length)]
const randomCharacter2 = continents[Math.floor(Math.random() * continents.length)]
const randomCharacter3 = continents[Math.floor(Math.random() * continents.length)]
const randomCharacter4 = vowels[Math.floor(Math.random() * vowels.length)]
const randomCharacter5 = vowels[Math.floor(Math.random() * vowels.length)]
const randomCharacter6 = vowels[Math.floor(Math.random() * vowels.length)]

  const[letters, setLetters] = useState([])

  useEffect(() => {
     const storedLetters = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
     if (storedLetters) setLetters(storedLetters)
     //console.log(storedLetters.value);
  }, []) 
 
  useEffect(() => {
    
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(letters))
   console.log();
  }, [letters])
 
  function handleAddLetter(e) { 
     setLetters(previousLetters => {
       return[...previousLetters, {id: uuidv4(), letter: randomCharacter}]
     })
  }
 
  function handleAddLetter2(e) {
   setLetters(previousLetters => {
     return[...previousLetters, {id: uuidv4(), letter: randomCharacter2}]
   })
 }
 
 function handleAddLetter3(e) {
   setLetters(previousLetters => {
     return[...previousLetters, {id: uuidv4(), letter: randomCharacter3}]
   })
 }
 
 function handleAddLetter4(e) {
   setLetters(previousLetters => {
     return[...previousLetters, {id: uuidv4(), letter: randomCharacter4}]
   })
 }
 
 function handleAddLetter5(e) {
   setLetters(previousLetters => {
     return[...previousLetters, {id: uuidv4(), letter: randomCharacter5}]
   })
 }
 
 function handleAddLetter6(e) {
   setLetters(previousLetters => {
     return[...previousLetters, {id: uuidv4(), letter: randomCharacter6}]
   })
 }
 
   function handleClearAll(id) {
     const newLetters = letters.filter(letters => letters === id)
     setLetters(newLetters)
 }

 // END OF LETTERS
 

  useEffect(() => {
    console.log(words);
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
        <button className='wordButton'>
          <MaterialIcon icon='backspace' invert />
        </button>
        <h2 id='wordDisplay'>{word || <>&nbsp;</>}</h2>
        <button className='wordButton' type='button' onClick={checkWord}>
          <MaterialIcon icon='keyboard_return' invert />
        </button>
      </div>
      <div>
        <RandLetters letters={letters}/>
          {/* <button onClick={handleClearAll}>Clear</button> */}
        <div className="grid-cointainer">
          <button onClick={handleAddLetter}>{randomCharacter}</button>
          <button onClick={handleAddLetter2}>{randomCharacter2}</button>
          <button onClick={handleAddLetter3}>{randomCharacter3}</button>
          <button onClick={handleAddLetter4}>{randomCharacter4}</button>
          <button onClick={handleAddLetter5}>{randomCharacter5}</button>
          <button onClick={handleAddLetter6}>{randomCharacter6}</button>
        </div>
      </div>
    </div>
  );
};

export default Session;
