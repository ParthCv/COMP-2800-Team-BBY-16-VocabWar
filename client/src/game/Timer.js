import React, { useState, useEffect } from "react";
import * as workerTimers from "worker-timers";
import "./timer.css";

function Timer({ minutes = 0, seconds = 30, gameRef }) {
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({ minutes, seconds });
  const [timerID, setTimerID] = useState(0);
  useEffect(() => {
    const interval = workerTimers.setInterval(() => {
      if (!over) {
        setTime((prev) => {
          if (prev.minutes === 0 && prev.seconds === 0) {
            setOver(true);
            return { minutes: 0, seconds: 0 };
          } else if (prev.minutes > 0 && prev.seconds === 0) {
            return { minutes: prev.minutes - 1, seconds: 59 };
          } else {
            return { minutes: prev.minutes, seconds: prev.seconds - 1 };
          }
        });
      }
    }, 1000);
    setTimerID(interval);
  }, []);

  // const changeTime = () => {
  //   if (over) {
  //     return;
  //   }
  //   if (m === 0 && s === 0) {
  //     setOver(true);
  //   } else if (s === 0) {
  //     setTime([m - 1, 59]);
  //   } else {
  //     setTime([m, s - 1]);
  //   }
  // };

  // useEffect(() => {
  //   const timerInterval = workerTimers.setInterval(() => changeTime(), 1000);
  //   return () => workerTimers.clearInterval(timerInterval);
  // });

  useEffect(() => {
    if (over) {
      workerTimers.clearInterval(timerID);
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
          : `${time.minutes.toString().padStart(2, "0")}:${time.seconds
              .toString()
              .padStart(2, "0")}`}
      </h1>
    </>
  );
}

export default Timer;
