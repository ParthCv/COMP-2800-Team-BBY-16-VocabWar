import React, { useState, useEffect } from "react";
import { useFirestore, useAuth, useFirestoreDocData } from "reactfire";
import SettingsIcon from "@material-ui/icons/Settings";
import ClearIcon from "@material-ui/icons/Clear";
import Switch from "@material-ui/core/Switch";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Settings.css";
import { Link } from "react-router-dom";

export default function Profile({ setValue, initial }) {
    const auth = useAuth();
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
            <div className='setngContent proBtn'>
                <Link to='/aboutus' onClick={() => setProfile(false)}><button  className='setngButton'>AboutUs</button></Link>
                <button className='setngButton' onClick={() => auth.signOut()}>
                    Logout
            </button>
            </div>
        </div>
    )
}