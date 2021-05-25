import React, { useState, useEffect } from "react";
import { useFirestore, useAuth, useFirestoreDocData } from "reactfire";
import ClearIcon from "@material-ui/icons/Clear";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Settings.css";
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
    WhatsappIcon
} from "react-share";
import { Container } from "@material-ui/core";

export default function Profile({ setValue, initial }) {
    const auth = useAuth();
    const user = useFirestore().collection("Users").doc(auth.currentUser.uid);
    const userData = useFirestoreDocData(user).data;
    const [profile, setProfile] = useState(true);

    return profile && (
        <div className='setngOverlay'>
            <h1 className='setngH1'>
                <AccountCircleIcon
                    style={{ fontSize: 35 }}
                />{" "}
            Profile
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
                <h3 className='proHead'>Hello, Player!</h3>
            </div>
            <div className='proBtn' style={{ position: 'relative', left: 0, top: 0 }}>
                <Link to='/aboutus'><button className='proButton'>
                    <AccountBoxIcon style={{ fontSize: 35 }} />AboutUs
                </button></Link>

                <button className='proButton' onClick={() => auth.signOut()}>
                    <ExitToAppIcon style={{ fontSize: 35 }} /> Logout
                </button>
            </div>
            <Container style={{ position: 'absolute', bottom: 30 }}>
                <p className='proName'>Share our game on Social Media</p>
                <TwitterShareButton
                    url="https://vocabwar.netlify.app/"
                    title="Battle with words with your friends"
                    className='socialIcons'
                    style={{ paddingRight: 35 }}
                >
                    <TwitterIcon size={45} round={true} />
                </TwitterShareButton>

                <FacebookShareButton
                    url="https://vocabwar.netlify.app/"
                    quote={"Battle with words with your friends"}
                    hashtag='#game'
                    className='socialIcons'
                    style={{ paddingRight: 35 }}
                    iconFillColor='red'
                >
                    <FacebookIcon size={45} round={true} />
                </FacebookShareButton>

                <WhatsappShareButton
                    url="https://vocabwar.netlify.app/"
                    title="Battle with words with your friends"
                    className='socialIcons'
                    style={{ paddingRight: 35 }}
                >
                    <WhatsappIcon size={45} round={true} />
                </WhatsappShareButton>

                <RedditShareButton
                    title="Battle with words with your friends"
                    url=" https://vocabwar.netlify.app/"
                    className='socialIcons'
                >
                    <RedditIcon size={45} round={true} />
                </RedditShareButton>
            </Container>
        </div>
    )
}