import React from "react";
import "./AboutUs.css";
import Parth from "../images/Parth_Avatar.png"
import Akshay from "../images/Akshay_Avatar.png"
import Eric from "../images/Eric_Avatar.png"
import Boki from "../images/Boki_Avatar.png"
import Circle from '@material-ui/icons/FiberManualRecord';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function AboutUs(setIsAboutUs) {

    return (
        <>            
            <div className="abouthead">
                
                <h1 className='abouth1'><ArrowBackIosIcon
                    style={{font: 40}}
                    onClick={() => setIsAboutUs === false}
                />About Us</h1>
                <br />
                <p className='txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Circle style={{ fontSize: 15 }} /><Circle style={{ fontSize: 15 }} /><Circle style={{ fontSize: 15 }} />
            </div>
            <h2 className='team'>Our Team</h2>
            <div className='row'>
                <div className='aboutcard'>
                    <img className="aboutimg" src={Parth} alt='Parth' />
                    <div className='aboutinfo'>
                        <h2 className="abouth2">Parth Chaturvedi</h2>
                        <p className='abouttitle'>Coder</p>
                        {/* <a href={`mailto: pchaturvedi@my.bcit.ca`}><button className='btn'>Contact</button></a> */}
                    </div>
                </div>

                <div className='aboutcard'>
                    <img className="aboutimg" src={Akshay} alt='Akshay' />
                    <div className='aboutinfo'>
                        <h2 className="abouth2">Akshay Marwah</h2>
                        <p className='abouttitle'>Coder</p>
                        {/* <button className='btn'><a href='mailto: etan34@my.bcit.ca'>Contact</a></button> */}
                    </div>
                </div>


                <div className='aboutcard'>
                    <img className="aboutimg" src={Eric} alt='Eric' />
                    <div className='aboutinfo'>
                        <h2 className="abouth2">Eric Tan</h2>
                        <p className='abouttitle'>Scrum Master</p>
                        {/* <button className='btn'><a href='mailto: amarwah4@my.bcit.ca'>Contact</a></button> */}
                    </div>
                </div>

                <div className='aboutcard'>
                    <img className="aboutimg" src={Boki} alt='Boki' />
                    <div className='aboutinfo'>
                        <h2 className="abouth2">Borivoj Pantic</h2>
                        <p className='abouttitle'>Product Manager</p>
                        {/* <button className='btn'><a href='mailto: bpantic@my.bcit.ca'>Contact</a></button> */}
                    </div>
                </div>
                
            </div>
            <br />
            <br />
        </>
    )
}