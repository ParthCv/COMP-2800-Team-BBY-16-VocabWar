import React, { useEffect } from "react";
import "./surrender.css";
import { useFirestore, useFirestoreDocData, useAuth } from "reactfire";

function surrender(props) {
    const auth = useAuth();
    const surrenderer = useFirestore.FieldValue;
    const user = useFirestore().collection("Users").doc(auth.currentUser.uid);
    const surrenders = useFirestoreDocData(props.gameRef).data?.surrenders;
    const surrenderResults = () => {
        props.over(true);
    }
    function on(e) {
        document.getElementById("surrender-overlay").style.display = "block";  
    }
    function off(e) {
        document.getElementById("surrender-overlay").style.display = "none";
    };
    useEffect(() => {
        if (props.player === 1) {
            user.set({
                surrendered: surrenderer.increment(1),
            },
            { merge: true }
            );
        }
        if (props.player === 2) {
            user.set({
                surrendered: surrenderer.increment(2),
            },
            { merge: true }
            );
        }
        if (props.over) {
            if (surrender === 1) {
                props.gameRef.set(
                    {
                      winner: 2,
                    },
                    { merge: true }
                  );
                } else if (surrender === 2) {
                  props.gameRef.set(
                    {
                      winner: 1,
                    },
                    { merge: true }
                  );
            } 
        }
    });

return (
    <div>
        <div id = "surrender-container">
    <div id = "surrender-overlay" onClick = {off}>
        <div id = "surrender-text">Surrender the game?</div>
        <button className = "surrender-button yes" onClick = {surrenderResults}>Yes</button>
        <button className = "surrender-button no">No</button>
    </div>
    </div>
    <button onClick = {on}>
        Surrender
    </button>
    </div>
);
}
export default surrender;
