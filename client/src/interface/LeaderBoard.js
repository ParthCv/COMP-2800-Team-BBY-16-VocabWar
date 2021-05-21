import React, { useEffect } from "react";
import {
  useFirestoreDocData,
  useFirestore,
  useAuth,
  useFirestoreCollection,
} from "reactfire";
import "./leaderboard.css";
import Navbar from "./Navbar";

export default function LeaderBoard({ props }) {
  const users = useFirestore()
    .collection("Users")
    .orderBy("points", "desc")
    .limit(10);
  const userArray = useFirestoreCollection(users).data?.docs;

  const top = [];
  userArray?.forEach((user) => {
    top.push({
      id: user.id,
      nickname: user.data().nickname,
      points: user.data().points,
    });
  });

  const ColumnHeader = () => {
    return (
      <div className='colheader'>
        <div className='col1'>Rank</div>
        <div className='col2'>Name</div>
        <div className='col3'>Points</div>
      </div>
    );
  };

  return (
    <div className='leader-mainmenu'>
      <div className='header'>
        <h1>Leader Board</h1>
      </div>
      <div className='leader-container'>
        <ColumnHeader />
        {top.map((item, index) => (
          <div className='list' key={item.id}>
            <h3>{index + 1}</h3>
            <h3>{item.nickname}</h3>
            <h3>{item.points}</h3>
          </div>
        ))}
      </div>
      <Navbar initial='1' />
    </div>
  );
}
