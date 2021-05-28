import React from "react";
import classes from "./Profile.module.css";
import { Reddit, Info, AccountCircle, Clear } from "@material-ui/icons/";
import { Link } from "react-router-dom";
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

// Uses React Share to let user share through social media.
// Let users access /aboutus and /reddit routes.
const Profile = ({ setValue, initial }) => {
  return (
    <div className={classes.setngOverlay}>
      <h1 className={classes.setngH1}>
        <AccountCircle style={{ fontSize: 40 }} /> About
      </h1>
      <Clear
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
      <div className={classes.setngContent}>
        <Link to='/aboutus' style={{ textDecoration: "none" }}>
          <button className={classes.proButton}>
            <Info style={{ fontSize: 45 }} /> <h2>About Us</h2>
          </button>
        </Link>
      </div>
      <Link to='/reddit' style={{ textDecoration: "none" }}>
        <button className={classes.proButton}>
          <Reddit style={{ fontSize: 45 }} /> <h2>Subreddit</h2>
        </button>
      </Link>
      <Container style={{ position: "absolute", bottom: 30 }}>
        <p className={classes.proName}>Share our game on Social Media</p>
        <TwitterShareButton
          url='https://vocabwar.netlify.app/'
          title='Battle with words with your friends'
          className={classes.socialIcons}
          style={{ paddingRight: 35 }}
        >
          <TwitterIcon size={45} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          url='https://vocabwar.netlify.app/'
          quote={"Battle with words with your friends"}
          hashtag='#game'
          className={classes.socialIcons}
          style={{ paddingRight: 35 }}
          iconfillcolor='red'
        >
          <FacebookIcon size={45} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton
          url='https://vocabwar.netlify.app/'
          title='Battle with words with your friends'
          className={classes.socialIcons}
          style={{ paddingRight: 35 }}
        >
          <WhatsappIcon size={45} round={true} />
        </WhatsappShareButton>
        <RedditShareButton
          title='Battle with words with your friends'
          url=' https://vocabwar.netlify.app/'
          className={classes.socialIcons}
        >
          <RedditIcon size={45} round={true} />
        </RedditShareButton>
      </Container>
    </div>
  );
};

export default Profile;
