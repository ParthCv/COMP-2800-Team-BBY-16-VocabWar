import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./MainMenu.css";
import "./Reddit.css";

export default function Reddit() {
  const [post, setPost] = useState([]);
  useEffect(async () => {
    const response = await fetch("https://www.reddit.com/r/VocabWar/hot.json");
    const info = await response.json();
    const data = info.data.children;
    setPost(data);
  }, []);
  return (
    <div className='mainmenu'>
      <div className='header'>
        <h1>Sub-Reddit</h1>
      </div>
      <div className='reddit'>
        {post.map((post) => {
          return (
            <div
              className='redditCard'
              key={post.data.created_utc + post.data.author}
            >
              <h5>Posted by {post.data.author}</h5>
              <a href={post.data.url} target='_blank'>
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
}
