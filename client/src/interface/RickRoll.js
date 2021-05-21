import React, { useEffect } from "react";
import Gif from "../images/rickroll.gif";
import Rick from "./rickroll.mp3";
import useSound from "use-sound";
import "./RickRoll.css";
export default function RickRoll({ SetIsRickRoll }) {
  const [rickroll, data] = useSound(Rick);

  useEffect(() => {
    rickroll();
  });
  return (
    <div
      className='rickroll'
      onClick={() => {
        SetIsRickRoll(false);
        data.stop();
      }}
    >
      <img src={Gif} alt='' />
    </div>
  );
}
