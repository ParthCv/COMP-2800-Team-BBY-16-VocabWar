import React from "react";
import { AddCircleOutline, PersonAdd, ExitToApp } from "@material-ui/icons";
import classes from "./MainMenuButtons.module.css";

const MainMenuButtons = ({
  createLobby,
  setIsJoining,
  setPlayer,
  logoutHandler,
}) => {
  return (
    <div className={classes.lobbyButtons}>
      <button onClick={createLobby}>
        <span className={classes.lobbyIcon}>
          <AddCircleOutline style={{ fontSize: 50 }} />
        </span>
        Create Lobby
      </button>
      <button
        onClick={() => {
          setIsJoining((prevState) => !prevState);
          setPlayer(2);
        }}
      >
        <span className={classes.lobbyIcon}>
          <PersonAdd style={{ fontSize: 50 }} />
        </span>
        Join Lobby
      </button>
      <button id='logoutButton' type='button' onClick={logoutHandler}>
        <span className={classes.lobbyIcon}>
          <ExitToApp style={{ fontSize: 50 }} />
        </span>
        Logout
      </button>
    </div>
  );
};

export default MainMenuButtons;
