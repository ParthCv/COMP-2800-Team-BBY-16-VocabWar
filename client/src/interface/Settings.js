import React, { useState } from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import ClearIcon from "@material-ui/icons/Clear";
import Switch from '@material-ui/core/Switch';
import './Settings.css'

export default function Settings({ setIsSettings, setValue }) {

    const [isSound, setIsSound] = useState(true);

    const handleSound = (e) => {        
        setIsSound((prevState) => !prevState);        
    }

    return (
        <div className='setngOverlay'>
            <h1 className='setngH1'><SettingsIcon style={{ fontSize: 35 }} /> Settings</h1>
            <ClearIcon
                style={{
                    color: "white",
                    fontSize: 35,
                    position: "absolute",
                    right: 20,
                    top: 25,
                }}
                onClick={() => { setIsSettings(false); setValue(0) }}
            />
            <div className='setngContent'>
                <div className='setngSound'>
                    <span style={{marginRight: '55%'}}>Sound</span>
                    <Switch
                        checked={isSound}
                        onChange={handleSound}
                        color='primary'
                        name='sound'
                        style={{
                            
                        }}
                    />                    
                </div>
                <button className='setngButton'>Report an Error</button>
                <button className='setngButton'>Contact Us</button>
            </div>
        </div>
    )
}
