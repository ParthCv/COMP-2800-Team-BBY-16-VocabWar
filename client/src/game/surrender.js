import React, { useEffect } from "react";
import "./surrender.css";
import { useFirestore, useFirestoreDocData, useAuth } from "reactfire";

function Surrender(props) {
  const surrenderHandler = () => {
    if (props.player === 1) {
      props.gameRef.set(
        {
          over: true,
          winner: 2,
        },
        { merge: true }
      );
      return;
    }
    props.gameRef.set(
      {
        over: true,
        winner: 1,
      },
      { merge: true }
    );
    return;
  };
  return (
    <div>
      <div id='surrender-container'>
        <div id='surrender-overlay' onClick={() => props.SetisSurrender(false)}>
          <div id='surrender-text'>Surrender the game?</div>
          <div id='surrenderButtons'>
            <button className='surrender-button yes' onClick={surrenderHandler}>
              Yes
            </button>
            <button className='surrender-button no'>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Surrender;
