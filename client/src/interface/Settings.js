import React,{useState} from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import ClearIcon from "@material-ui/icons/Clear";
import './Settings.css'

export default function Settings({setIsSettings,setValue}) {
    return (
        <div className='setngOverlay'>
            <h1 className='setngH1'><SettingsIcon style={{fontSize: 35}}/> Settings</h1>
            <ClearIcon
            style={{
                color: "white",
                fontSize: 35,
                position: "absolute",
                right: 20,
                top: 25,
              }}
              onClick={() => {setIsSettings(false);setValue(0)}}
            />
        </div>
    )
}
