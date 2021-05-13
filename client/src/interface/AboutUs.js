import React from "react";
import "./AboutUs.css";
import Parth from "../images/Parth_Avatar.png"
import Akshay from "../images/Akshay_Avatar.png"
import Eric from "../images/Eric_Avatar.png"
import Boki from "../images/Boki_Avatar.png"
import GitHubIcon from '@material-ui/icons/GitHub';

export default function AboutUs() {
    return (
        <>
            <div className="head">
                <h1>About Us</h1>
                <br />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <br />
                <GitHubIcon/>
            </div>
            <h2 className='team'>Our Team</h2>
            <div className='row'>  
                    <div className='card'>
                        <img src={Parth} alt='Parth' />
                        <div className='content'>
                            <h2>Parth Chaturvedi</h2>
                            <p className='title'>Coder</p>
                            <button className='btn'>Contact</button>
                        </div>
                 
                </div>
                
                    <div className='card'>
                        <img src={Akshay} alt='Akshay' />
                        <div className='content'>
                            <h2>Akshay Marwah</h2>
                            <p className='title'>Coder</p>
                            <button className='btn'>Contact</button>
                        </div>
                    </div>
                
                
                    <div className='card'>
                        <img src={Eric} alt='Eric' />
                        <div className='content'>
                            <h2>Eric Tan</h2>
                            <p className='title'>Scrum Master</p>
                            <button className='btn'>Contact</button>
                        </div>
                    </div>
                
                
                    <div className='card'>
                        <img src={Boki} alt='Boki' />
                        <div className='content'>
                            <h2>Borivoj Pantic</h2>
                            <p className='title'>Product Manager</p>
                            <button className='btn'>Contact</button>
                        </div>
                    </div>
                
            </div>
        </>
    )
}