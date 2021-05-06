import React, { useState, useEffect } from "react";
import { sendWord } from "./wordcheck.js";

const Session = () => {
  const [points, setPoints] = useState(0);

  async function checkWord(e) {
    e.preventDefault();
    const result = await sendWord(e.target.elements.word.value);
    if (result) {
      setPoints((prev) => prev + e.target.elements.word.value.length);
    }
  }

  return (
    <>
      <form onSubmit={checkWord}>
        <input type='text' id='word' name='word' />
        <input type='submit' />
      </form>
      <h1>{points}</h1>
    </>
  );
};

export default Session;
