import React from "react";
import FadeIn from "react-fade-in";

import "./WordArray.css";
export default function WordArray({ words }) {
  return (
    <div className='wordArray'>
      {words.length === 0 && <h2>No Words Formed Yet</h2>}
      {words.map((word) => {
        return (
          <FadeIn key={word} childTag='span' wrapperTag='p'>
            {word}
          </FadeIn>
        );
      })}
    </div>
  );
}
