import React, { useEffect } from "react";
import "./surrender.css";
import { useFirestore, useFirestoreDocData, useAuth } from "reactfire";

function surrender(props) {
    const auth = useAuth();
    const user = useFirestore().collection("Users").doc(auth.currentUser.uid);
    const surrendered = useFirestoreDocData(props.gameRef).data?.surrendered;
    const surrenderResults = () => {
        props.over(true);
    }
    function on() {
        document.getElementById("surrender-overlay").style.display = "block";  
    }
    function off() {
        document.getElementById("surrender-overlay").style.display = "none";
    };
    useEffect(() => {
        if (props.over) {}
    });

return (
    <div>
        <div id = "surrender-container">
    <div id = "surrender-overlay" onclick = "off()">
        <div id = "surrender-text">Surrender the game?</div>
        <button className = "surrender-button yes" onClick = {surrenderResults}>Yes</button>
        <button className = "surrender-button no">No</button>
    </div>
    </div>
    <button onclick = "on()">
        Surrender
    </button>
    </div>
);
}
export default surrender;
