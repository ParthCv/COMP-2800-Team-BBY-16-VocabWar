import React, { useState, useEffect } from 'react';
import "./timer.css"

function Timer({ minutes = 0, seconds = 30 }) {
    const [over, setOver] = useState(false);
    const [[m, s], setTime] = useState([minutes, seconds]);
    const [remainingTime, setRemainingTime] = useState(false);

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
        //console.log("min",m,"sec",s);
    };

    useEffect(() => {
        const timerInterval = setInterval(() => changeTime(), 1000);
        return () => clearInterval(timerInterval);
    });

    const stopTimer = () => {
        setOver(true);
        setRemainingTime(true);
        console.log(m, "minutes",s,"seconds");
    }

    return (
        <>
            <h1>Timer</h1>
            <h1 className='time'>{over ? "Times's Up" : `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</h1>
            <button className="stopBtn" onClick={stopTimer}>&#10148;</button>
            <p>{remainingTime ? `You finished ${m} minutes and ${s} seconds before` : ""}</p>
        </>
    )
}

export default Timer;