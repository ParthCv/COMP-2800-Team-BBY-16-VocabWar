import React, { useState, useEffect } from "react";
import CreateLobby from "../Lobby/CreateLobby";
import JoinLobby from "../Lobby/JoinLobby";
import Header from "../UI/Header";
import Navbar from "../UI/Navbar";
import LeaderBoard from "../Leaderboard/LeaderBoard";
import AboutUs from "../About/AboutUs";
import Reddit from "../About/Reddit";
import classes from "./MainMenu.module.css";
import { useFirestore, useAuth, useFirestoreDocData } from "reactfire";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import randomLetters from "./RandomLetters";
import User from "./User";
import MainMenuButtons from "./MainMenuButtons";
import NoMatchPage from "./NoMatchPage";

const MainMenu = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/reddit' exact component={Reddit} />
        <Route path='/leaderboard' exact component={LeaderBoard} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  );
};

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
    if (isCreating && player === 1) {
      setIsJoining(false);
      gameRef.doc(gameID).set({
        code: gameID,
        p1: auth.currentUser.uid,
        p1Name: userData.nickname,
        p1Points: 0,
        p2Points: 0,
        start: false,
        letters: randomLetters(),
      });
    }
  }, [
    gameID,
    auth.currentUser.uid,
    gameRef,
    isCreating,
    player,
    userData?.nickname,
  ]);

  if (isCreating) {
    return (
      <div className={classes.mainmenu}>
        <Header>
          <h1>Vocab War</h1>
          <h4>Battle with Words</h4>
        </Header>
        <CreateLobby
          gameID={gameID}
          setIsCreating={setIsCreating}
          player={player}
        />
      </div>
    );
  }

  return (
    <div className={classes.mainmenu}>
      <Header>
        <h1>Vocab War</h1>
        <h4>Battle with Words</h4>
      </Header>
      <User nickname={userData?.nickname} points={userData?.points} />
      <MainMenuButtons
        createLobby={createLobby}
        setIsJoining={setIsJoining}
        setPlayer={setPlayer}
        logoutHandler={logoutHandler}
      />
      {isJoining && (
        <JoinLobby
          setIsJoining={setIsJoining}
          setIsCreating={setIsCreating}
          setGameID={setGameID}
        />
      )}
      <Navbar initial='0' />
    </div>
  );
};

export default MainMenu;
