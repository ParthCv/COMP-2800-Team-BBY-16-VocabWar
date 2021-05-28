import React from "react";
import classes from "./AboutUs.module.css";
import Parth from "../../assets/images/Parth_Avatar.png";
import Akshay from "../../assets/images/Akshay_Avatar.png";
import Eric from "../../assets/images/Eric_Avatar.png";
import Boki from "../../assets/images/Boki_Avatar.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

/* Component resposible for the about us page. */
const AboutUs = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes["us-container"]}>
        <div className={classes["us-header"]}>
          <h1>
            <Link to='/'>
              <ArrowBackIosIcon style={{ fontSize: 40 }} />
            </Link>
            About Us
          </h1>
        </div>
        <p className={classes.txt}>
          Vocab War was made on the belief that learning doesn’t have to
          compromise fun and enjoyment.
        </p>
      </div>
      <h2 className={classes.team}>Our Team</h2>
      <div className={classes.row}>
        <div className={classes.aboutcard}>
          <img className={classes.aboutimg} src={Parth} alt='Parth' />
          <div className={classes.aboutinfo}>
            <h2 className={classes.abouth2}>Parth Chaturvedi</h2>
            <p className={classes.abouttitle}>Coder</p>
          </div>
        </div>

        <div className={classes.aboutcard}>
          <img className={classes.aboutimg} src={Akshay} alt='Akshay' />
          <div className={classes.aboutinfo}>
            <h2 className={classes.abouth2}>Akshay Marwah</h2>
            <p className={classes.abouttitle}>Coder</p>
          </div>
        </div>

        <div className={classes.aboutcard}>
          <img className={classes.aboutimg} src={Eric} alt='Eric' />
          <div className={classes.aboutinfo}>
            <h2 className={classes.abouth2}>Eric Tan</h2>
            <p className={classes.abouttitle}>Scrum Master</p>
          </div>
        </div>

        <div className={classes.aboutcard}>
          <img className={classes.aboutimg} src={Boki} alt='Boki' />
          <div className={classes.aboutinfo}>
            <h2 className={classes.abouth2}>Borivoj Pantic</h2>
            <p className={classes.abouttitle}>Product Manager</p>
          </div>
        </div>
        <div className={classes.contactTeam}>
          <a
            href={`mailto: pchaturvedi@my.bcit.ca,amarwah4@my.bcit.ca,etan34@my.bcit.ca,bpantic@my.bcit.ca`}
          >
            <button className={classes.btn}>
              <h3>Contact Team</h3>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
