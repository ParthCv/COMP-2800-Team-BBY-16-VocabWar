import React, { useState, useEffect } from "react";
import "./timer.css";

function Timer({ minutes = 0, seconds = 30, gameRef }) {
  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([minutes, seconds]);

  const changeTime = () => {
    if (over) {
      return;
    }
    if (m === 0 && s === 0) {
      setOver(true);
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  useEffect(() => {
    const timerInterval = setInterval(() => changeTime(), 1000);
    return () => clearInterval(timerInterval);
  });

  useEffect(() => {
    if (over) {
      gameRef.set(
        {
          over: "true",
        },
        { merge: true }
      );
    }
  }, [over]);

  return (
    <>
      <h1 className='time'>
        {over
          ? "Times's Up"
          : `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`}
      </h1>
    </>
  );
}

export default Timer;
