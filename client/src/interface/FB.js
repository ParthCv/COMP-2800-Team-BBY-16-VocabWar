import React from "react";
import Navbar from "./Navbar";
import { FacebookProvider, Page } from "react-facebook";
import "./MainMenu.css";
export default function FB() {
  return (
    <div className='mainmenu'>
      <div className='header'>
        <h1>Vocab War</h1>
      </div>
      <FacebookProvider appId='318794693135340'>
        <Page href='https://www.facebook.com/dota2' tabs='timeline' />
      </FacebookProvider>
      <Navbar initial='0' />
    </div>
  );
}
