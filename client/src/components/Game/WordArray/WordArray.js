import React from "react";
import FadeIn from "react-fade-in";
import classes from "./WordArray.module.css";

//Component resposible for displaying already formed words
const WordArray = ({ words }) => {
  return (
    <div className={classes.wordArray}>
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
};

export default WordArray;
