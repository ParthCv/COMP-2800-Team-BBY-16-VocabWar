import React, { useState, useRef } from "react";
import "./joinLobby.css"

const JoinLobby = () => {
    const [code, setCode] = useState('');
    const overlay = useRef(0);

    const showOverlay = () => {
        if(overlay.current.style.display === 'none'){
            overlay.current.style.display = 'inline'
        } else {
            overlay.current.style.display = 'none' 
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (code) {
            console.log("code=" + code);
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
                        <input type='text' name="code" value={code} onChange={(e) => setCode(e.target.value)} />
                    </div>
                    <br />
                    <button className='sub' type='submit' onClick={handleSubmit}>Join</button>
                </div>
            </div>
        </>
    )
}

export default JoinLobby