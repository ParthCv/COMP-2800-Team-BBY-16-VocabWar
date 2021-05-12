import React, { useState, useRef } from "react";
import 'firebase/firestore';
import {
    FirebaseAppProvider,
    SuspenseWithPerf,
    useFirestore,
    useFirestoreCollectionData,
    useFirestoreDocData,
} from "reactfire";
import "./joinLobby.css"
//import * as firebase from 'firebase';
//import { checkCode } from "./CodeCheck";

const JoinLobby = () => {
    const [code, setCode] = useState('');
    const overlay = useRef(0);
    const gameRef = useFirestore().collection("Games");

    const showOverlay = () => {
        if (overlay.current.style.display === 'none') {
            overlay.current.style.display = 'inline'
        } else {
            overlay.current.style.display = 'none'
        }
    }

    function checkCode(e) {
        e.preventDefault();
        if (code) {
            try {
                if (gameRef.doc(code).data().p1) {
                    gameRef.doc(code).set(
                        {
                            p2: "hey",
                        },
                        { merge: true }
                    );                      
                }
            } catch (err) {
                console.log("game not found", err);
                document.getElementById('joinBtn').innerHTML = "Worng Code";
                document.getElementById('joinBtn').style.backgroundColor = "#E74C3C";
                setTimeout(() => {
                    document.getElementById('joinBtn').innerHTML = "Join";
                    document.getElementById('joinBtn').style.backgroundColor = "#E67E22";
                }, 1000);
            }
            setCode('');
        } else {
            console.log('empty value');


        }
    }

    return (
        <>
            <button className='lobbyBtn' onClick={showOverlay}>Join a Lobby</button>
            <div className='overlay' ref={overlay}>
                <div className='content'>
                    <h1>Join Lobby</h1>
                    <div className='lbHead'>
                        <p>Lobby Code</p>
                    </div>
                    <div>
                        <input type='text' name="code" value={code} onChange={(e) => setCode(e.target.value)} maxLength="7" minLength="6" />
                    </div>
                    <br />
                    <button id='joinBtn' className='sub' type='submit' onClick={checkCode}>Join</button>
                </div>
            </div>
        </>
    )
}

export default JoinLobby