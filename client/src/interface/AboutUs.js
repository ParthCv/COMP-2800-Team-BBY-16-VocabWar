import React from "react";
import "./AboutUs.css";
import Parth from "../images/Parth_Avatar.png";
import Akshay from "../images/Akshay_Avatar.png";
import Eric from "../images/Eric_Avatar.png";
import Boki from "../images/Boki_Avatar.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function AboutUs({ setIsAboutUs }) {
  const backAboutHandler = () => {
    setIsAboutUs(false);
  };
  return (
    <div className='aboutContainer'>
      <div className='abouthead'>
        <h1 className='abouth1'>
          <Link to='/'>
            <ArrowBackIosIcon style={{ font: 40 }} />
          </Link>
          About Us
        </h1>
        <br />
        <p className='txt'>
          Vocab War was made on the belief that learning doesn’t have to
          compromise fun and enjoyment.
        </p>
        <p className='txt'>
          Launched with the enthusiastic spirit we bring to all our video games,
          we embarked on this project with a clear set of missions: to present
          the highest quality game environment to expand our English vocabulary,
          while offering users a fun and competitive experience.
        </p>
      </div>
      <h2 className='team'>Our Team</h2>
      <div className='row'>
        <div className='aboutcard'>
          <img className='aboutimg' src={Parth} alt='Parth' />
          <div className='aboutinfo'>
            <h2 className='abouth2'>Parth Chaturvedi</h2>
            <p className='abouttitle'>Coder</p>
            <a href={`mailto: pchaturvedi@my.bcit.ca`}>
              <button className='btn'>Contact</button>
            </a>
          </div>
        </div>

        <div className='aboutcard'>
          <img className='aboutimg' src={Akshay} alt='Akshay' />
          <div className='aboutinfo'>
            <h2 className='abouth2'>Akshay Marwah</h2>
            <p className='abouttitle'>Coder</p>
            <a href='mailto: amarwah4@my.bcit.ca'>
              <button className='btn'>Contact</button>
            </a>
          </div>
        </div>

        <div className='aboutcard'>
          <img className='aboutimg' src={Eric} alt='Eric' />
          <div className='aboutinfo'>
            <h2 className='abouth2'>Eric Tan</h2>
            <p className='abouttitle'>Scrum Master</p>
            <a href='mailto: etan34@my.bcit.ca'>
              <button className='btn'>Contact</button>
            </a>
          </div>
        </div>

        <div className='aboutcard'>
          <img className='aboutimg' src={Boki} alt='Boki' />
          <div className='aboutinfo'>
            <h2 className='abouth2'>Borivoj Pantic</h2>
            <p className='abouttitle'>Product Manager</p>
            <a href='mailto: bpantic@my.bcit.ca'>
              <button className='btn'>Contact</button>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Navbar initial='2' />
    </div>
  );
}
