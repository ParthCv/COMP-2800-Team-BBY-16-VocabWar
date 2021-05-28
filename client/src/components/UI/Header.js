import React from "react";
import classes from "./Header.module.css";

//Reusable wrapper component for heading
const Header = (props) => {
  return <div className={classes.header}>{props.children}</div>;
};

export default Header;
