import React,{useState, useEffect} from "react";
import "./points.css";
import {
  useFirestoreDocData,
  useFirestore
} from 'reactfire';

export default function Points(props) {

    const [points, setPoints] = useState(0);
    const playerRef = useFirestore().collection('Player').doc(`Player${props.player}`);
    const player = useFirestoreDocData(playerRef).data;
    
    useEffect(() => {
        if (player) {
            setPoints(player.point);
        }
    })

    return (
        <div>
            <h1>Player {props.player}: {points}</h1>
        </div>
    );
}


