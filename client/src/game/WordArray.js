import React from "react";
import Fade from "@material-ui/core/Fade";

import "./WordArray.css";
export default function WordArray({ words }) {
  return (
    <div className='wordArray'>
      {words.length === 0 && <h2>No Words Formed Yet</h2>}
      {words.map((word) => {
        return (
          <Fade in key={word}>
            <p>{word}</p>
          </Fade>
        );
      })}
    </div>
  );
}
