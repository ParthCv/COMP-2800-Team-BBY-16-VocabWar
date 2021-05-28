import React from "react";
import Header from "../UI/Header";
import classes from "./NoMatchPage.module.css";
import Navbar from "../UI/Navbar";
import sad from "../../assets/images/sad.png";

// 404 Error Page.

export default function NoMatchPage() {
  return (
    <div className={classes.container}>
      <Header>
        <h1>Vocab War</h1>
      </Header>
      <div className={classes.error}>
        <img src={sad} alt='sadEmoji' />
        <h2>Oops!</h2>
        <h3>We can't seem to find the page you're looking for.</h3>
      </div>
      <Navbar initial='0' />
    </div>
  );
}
