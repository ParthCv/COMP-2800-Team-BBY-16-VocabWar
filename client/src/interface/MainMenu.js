import React, { useState, useEffect } from "react";
import CreateLobby from "./CreateLobby";
import JoinLobby from "./JoinLobby";
import Navbar from "./Navbar";
import "./MainMenu.css";
import { useFirestore, useAuth, useFirestoreDocData } from "reactfire";
import AboutUs from "./AboutUs";
import FB from "./FB";
import Reddit from "./Reddit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LeaderBoard from "./LeaderBoard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function MainMenu() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/fb' exact component={FB} />
        <Route path='/reddit' exact component={Reddit} />
        <Route path='/leaderboard' exact component={LeaderBoard} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  const auth = useAuth();
  const [isCreating, setIsCreating] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [gameID, setGameID] = useState();
  const [player, setPlayer] = useState(1);
  const gameRef = useFirestore().collection("Games");
  const user = useFirestore().collection("Users").doc(auth.currentUser.uid);
  const userData = useFirestoreDocData(user).data;

  const createLobby = () => {
    setPlayer(1);
    setIsCreating(true);
    setGameID(Math.random().toString(36).substr(2, 6));
  };

  const logoutHandler = () => {
    auth.signOut();
  };

  useEffect(() => {
    const continents = "BCDFGHJKLMNPQRSTVWXYZ";
    const vowels = "AEIOU";

    if (isCreating && player === 1) {
      setIsJoining(false);
      let array = [];
      let lastletter = null;
      while (array.length <= 5) {
        if (array.length % 2 === 0) {
          let randomCharacter =
            continents[Math.floor(Math.random() * continents.length)];
          while (
            array[0] === randomCharacter ||
            array[1] === randomCharacter ||
            array[2] === randomCharacter ||
            array[3] === randomCharacter ||
            array[4] === randomCharacter ||
            array[5] === randomCharacter
          ) {
            randomCharacter =
              continents[Math.floor(Math.random() * continents.length)];
          }
          if (lastletter !== randomCharacter)
            array = [...array, randomCharacter];
        }
        if (array.length % 2 !== 0) {
          let randomCharacter =
            vowels[Math.floor(Math.random() * vowels.length)];
          while (
            array[0] === randomCharacter ||
            array[1] === randomCharacter ||
            array[2] === randomCharacter ||
            array[3] === randomCharacter ||
            array[4] === randomCharacter ||
            array[5] === randomCharacter
          ) {
            randomCharacter = vowels[Math.floor(Math.random() * vowels.length)];
          }
          if (lastletter !== randomCharacter)
            array = [...array, randomCharacter];
        }
        lastletter = array[array.length - 1];
      }
      gameRef.doc(gameID).set({
        code: gameID,
        p1: auth.currentUser.uid,
        p1Name: userData.nickname,
        p1Points: 0,
        p2Points: 0,
        start: false,
        letters: array,
      });
    }
  }, [gameID]);

  useEffect(() =>
    document
      .querySelector(":root")
      .style.setProperty("--vh", window.innerHeight + "px")
  );
  return (
    <div className='mainmenu'>
      <div className='header'>
        <h1>Vocab War</h1>
      </div>
      {!isCreating ? (
        <>
          <div className='lobbyButtons'>
            <button onClick={createLobby}>
              <span className='lobbyIcon'>
                <AddCircleOutlineIcon style={{ fontSize: 50 }} />
              </span>
              Create Lobby
            </button>
            <button
              onClick={() => {
                setIsJoining((prevState) => !prevState);
                setPlayer(2);
              }}
            >
              <span className='lobbyIcon'>
                <PersonAddIcon style={{ fontSize: 50 }} />
              </span>
              Join Lobby
            </button>
            <button id='logoutButton' type='button' onClick={logoutHandler}>
              <span className='lobbyIcon'>
                <ExitToAppIcon style={{ fontSize: 50 }} />
              </span>
              Logout
            </button>
            {isJoining && (
              <JoinLobby
                setIsJoining={setIsJoining}
                setIsCreating={setIsCreating}
                setGameID={setGameID}
              />
            )}
          </div>
          <Navbar initial='0' />
        </>
      ) : (
        <CreateLobby
          gameID={gameID}
          setIsCreating={setIsCreating}
          player={player}
        />
      )}
    </div>
  );
};

// isAboutUs ? (
//   <AboutUs isAboutUs={isAboutUs} setIsAboutUs={setIsAboutUs} />
// ) :
