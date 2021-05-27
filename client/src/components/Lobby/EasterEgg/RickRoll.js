import React, { useEffect } from "react";
import Gif from "../../../assets/images/rickroll.gif";
import Rick from "../../../assets/sounds/rickroll.mp3";
import useSound from "use-sound";
import classes from "./RickRoll.module.css";

const RickRoll = ({ SetIsRickRoll }) => {
  const [rickroll, data] = useSound(Rick);

  useEffect(() => {
    rickroll();
  });
  return (
    <div
      className={classes.rickroll}
      onClick={() => {
        SetIsRickRoll(false);
        data.stop();
      }}
    >
      <img src={Gif} alt='rickroll' />
    </div>
  );
};

export default RickRoll;
