import React, { useState, useEffect } from "react";
import { useFirestore, useAuth, useFirestoreDocData } from "reactfire";
import ClearIcon from "@material-ui/icons/Clear";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Settings.css";
import { Link } from "react-router-dom";
import RedditIconMaterial from "@material-ui/icons/Reddit";
import InfoIcon from "@material-ui/icons/Info";
import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { Container } from "@material-ui/core";

export default function Profile({ setValue, initial }) {
  const auth = useAuth();
  const user = useFirestore().collection("Users").doc(auth.currentUser.uid);
  const userData = useFirestoreDocData(user).data;
  const [profile, setProfile] = useState(true);

  return (
    profile && (
      <div className='setngOverlay'>
        <h1 className='setngH1'>
          <AccountCircleIcon style={{ fontSize: 40 }} /> About
        </h1>
        <ClearIcon
          style={{
            color: "white",
            fontSize: 35,
            position: "absolute",
            right: 20,
            top: 25,
          }}
          onClick={() => {
            setValue(initial);
          }}
        />
        <div className='setngContent'>
          <Link to='/aboutus'>
            <button className='proButton'>
              <InfoIcon style={{ fontSize: 45 }} /> <h2>About Us</h2>
            </button>
          </Link>
        </div>

        <Link to='/reddit'>
          <button className='proButton'>
            <RedditIconMaterial style={{ fontSize: 45 }} /> <h2>Subreddit</h2>
          </button>
        </Link>
        <Container style={{ position: "absolute", bottom: 30 }}>
          <p className='proName'>Share our game on Social Media</p>
          <TwitterShareButton
            url='https://vocabwar.netlify.app/'
            title='Battle with words with your friends'
            className='socialIcons'
            style={{ paddingRight: 35 }}
          >
            <TwitterIcon size={45} round={true} />
          </TwitterShareButton>

          <FacebookShareButton
            url='https://vocabwar.netlify.app/'
            quote={"Battle with words with your friends"}
            hashtag='#game'
            className='socialIcons'
            style={{ paddingRight: 35 }}
            iconfillcolor='red'
          >
            <FacebookIcon size={45} round={true} />
          </FacebookShareButton>

          <WhatsappShareButton
            url='https://vocabwar.netlify.app/'
            title='Battle with words with your friends'
            className='socialIcons'
            style={{ paddingRight: 35 }}
          >
            <WhatsappIcon size={45} round={true} />
          </WhatsappShareButton>

          <RedditShareButton
            title='Battle with words with your friends'
            url=' https://vocabwar.netlify.app/'
            className='socialIcons'
          >
            <RedditIcon size={45} round={true} />
          </RedditShareButton>
        </Container>
      </div>
    )
  );
}
