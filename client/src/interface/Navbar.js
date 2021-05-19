import React, { useState, useEffect } from 'react'
import Settings from './Settings'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import { BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import TuneIcon from '@material-ui/icons/Tune';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#dbdbdb",
        height: 65,
        position: 'sticky',
        bottom: 0,
        zIndex: 2,
        "&$selected": {
            color: "red"
        }
    },
    selected: {
        color: "red"
    }
})


function Navbar() {

    const [value, setValue] = useState(0);
    const [isSettings, setIsSettings] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        switch (value) {
            case 0:
                console.log('home');
                setIsSettings(false);
                break;
            case 1:
                console.log('shop');
                setIsSettings(false);
                break;
            case 2:
                console.log('stats');
                setIsSettings(false);
                break;
            case 3:
                console.log('settings');
                // setIsSettings((prevState) => !prevState);
                setIsSettings(true);
                break;
            default:
                break;
        }
    }, [value])

    return (
        <div>
            {isSettings && <Settings setIsSettings={setIsSettings} setValue={setValue} />}
            <BottomNavigation
                className={classes.root}
                showLabels
                value={value}
                style={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    height: '60px',
                    zIndex: 1
                }}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    // console.log(event);
                    // event.target.label.style.color = "primary";
                    // console.log(event.target);
                    // console.log(document.querySelector("#root > div > div:nth-child(3) > div > button.MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected > span.MuiBottomNavigationAction-wrapper > span"));
                }}
            >
                <BottomNavigationAction label='home' icon={<HomeIcon style={{ fontSize: 35, color: 'primary' }} />} />
                <BottomNavigationAction label='shop' icon={<ShoppingCartIcon style={{ fontSize: 35, color: 'primary' }} />} />
                <BottomNavigationAction label='stats' icon={<BarChartIcon style={{ fontSize: 35, color: 'primary' }} />} />
                <BottomNavigationAction label='settings' icon={<TuneIcon style={{ fontSize: 35, color: 'primary' }} />} />
            </BottomNavigation>
        </div>
    )
}

export default Navbar