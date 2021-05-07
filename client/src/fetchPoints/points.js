import { firebase } from "src/App";
import React, { useState, useEffect } from "react";

const db = firebase.firestore();

function Points(props) {
    return (
        <div>
            <h1>Player {props.player}: </h1>
            <h1>Player {props.player}: </h1>
        </div>
    );
}

function App() {
    const [point, setPoint] = useState(0);
    const fetchPoints = async() => {
        const playerPoints = db.collection('Player');
        const data = await playerPoints.get();
        data.docs.forEach(item => {
            setPoint(item.data())
        })
    }
    useEffect(() => {
        fetchPoints();
    })
    return (
        <div>
            <Points player="1" />
            <Points player="2" />
        </div>
    );
}


