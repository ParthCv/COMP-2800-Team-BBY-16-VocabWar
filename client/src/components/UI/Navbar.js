import React, { useState, useEffect } from "react";
import Settings from "../Settings/Settings";
import Profile from "../About/Profile";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import TuneIcon from "@material-ui/icons/Tune";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#d35400",
    height: 65,
    position: "sticky",
    bottom: 0,
    zIndex: 2,
    "&$selected": {
      color: "red",
    },
  },
  selected: {
    color: "red",
  },
});

const Navbar = (props) => {
  const [value, setValue] = useState(parseInt(props.initial));
  const [isSettings, setIsSettings] = useState(true);
  const [isProfile, setIsProfile] = useState(true);
  const classes = useStyles();

  const settingsHandler = () => {
    if (isSettings) {
      setValue(parseInt(props.initial));
    }
    setIsSettings((prev) => !prev);
  };

  const profileHandler = () => {
    if (isProfile) {
      setValue(parseInt(props.initial));
    }
    setIsProfile((prev) => !prev);
  };

  useEffect(() => {
    switch (value) {
      case 0:
        setIsProfile(false);
        setIsSettings(false);
        break;
      case 1:
        setIsProfile(false);
        setIsSettings(false);
        break;
      case 2:
        setIsSettings(false);
        setIsProfile(true);
        break;
      case 3:
        setIsProfile(false);
        setIsSettings(true);
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <div>
      {isSettings && (
        <Settings
          setIsSettings={setIsSettings}
          setValue={setValue}
          initial={parseInt(props.initial)}
        />
      )}
      {isProfile && (
        <Profile
          setIsProfile={setIsProfile}
          setValue={setValue}
          initial={parseInt(props.initial)}
        />
      )}
      <BottomNavigation
        className={classes.root}
        showLabels
        value={value}
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          minHeight: "70px",
          height: "9%",
          zIndex: 1,
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className='nav-label'
          label='Home'
          icon={<HomeIcon style={{ fontSize: 35, color: "primary" }} />}
          component={Link}
          to='/'
        />
        <BottomNavigationAction
          className='nav-label'
          label='Leaderboard'
          icon={<BarChartIcon style={{ fontSize: 35, color: "primary" }} />}
          component={Link}
          to='/leaderboard'
        />
        <BottomNavigationAction
          className='nav-label'
          label='About'
          onClick={profileHandler}
          icon={
            <AccountCircleIcon style={{ fontSize: 35, color: "primary" }} />
          }
        />
        <BottomNavigationAction
          className='nav-label'
          label='Settings'
          onClick={settingsHandler}
          icon={<TuneIcon style={{ fontSize: 35, color: "primary" }} />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Navbar;
