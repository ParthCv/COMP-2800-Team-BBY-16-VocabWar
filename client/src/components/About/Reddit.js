import React, { useEffect, useState } from "react";
import Header from "../UI/Header";
import Navbar from "../UI/Navbar";
import classes from "./Reddit.module.css";

const Reddit = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchReddit = async () => {
      const response = await fetch(
        "https://www.reddit.com/r/VocabWar/hot.json"
      );
      const info = await response.json();
      setPost(info.data.children);
    };
    fetchReddit();
  }, []);

  return (
    <div className={classes.redditPage}>
      <Header>
        <h1>Sub-Reddit</h1>
      </Header>
      <div className={classes.reddit}>
        {post.map((post) => {
          return (
            <div
              className={classes.redditCard}
              key={post.data.created_utc + post.data.author}
            >
              <h5>Posted by {post.data.author}</h5>
              <a href={post.data.url} target='_blank' rel='noreferrer'>
                <h4>{post.data.title}</h4>
              </a>
              <p>{post.data.selftext}</p>
            </div>
          );
        })}
      </div>
      <Navbar initial='0' />
    </div>
  );
};

export default Reddit;
