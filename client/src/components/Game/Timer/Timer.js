import React, { useState, useEffect } from "react";
import * as workerTimers from "worker-timers";
import classes from "./Timer.module.css";

const Timer = ({ minutes = 0, seconds = 30, gameRef }) => {
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({ minutes, seconds });
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
    return () => {
      workerTimers.clearInterval(interval);
    };
  }, [over]);

  useEffect(() => {
    if (over) {
      gameRef.set(
        {
          over: "true",
        },
        { merge: true }
      );
    }
  }, [over, gameRef]);

  return (
    <>
      <h1 className={classes.time}>
        {over
          ? "OVER"
          : `${time.minutes.toString().padStart(2, "0")}:${time.seconds
              .toString()
              .padStart(2, "0")}`}
      </h1>
    </>
  );
};

export default Timer;
