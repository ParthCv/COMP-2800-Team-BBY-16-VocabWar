import React from "react";
import { useFirestore, useFirestoreCollection } from "reactfire";
import Header from "../UI/Header";
import classes from "./Leaderboard.module.css";
import Navbar from "../UI/Navbar";

//LeaderBoard function gets the top 20 users based upon the points from the Users collection.
// Then stores the data of each user in the top array.

const LeaderBoard = () => {
  const users = useFirestore()
    .collection("Users")
    .orderBy("points", "desc")
    .limit(20);
  const userArray = useFirestoreCollection(users).data?.docs;

  const top = [];
  userArray?.forEach((user) => {
    top.push({
      id: user.id,
      nickname: user.data().nickname,
      points: user.data().points,
    });
  });

  // Component for the Leaderboard header.

  const ColumnHeader = () => {
    return (
      <div className={classes.colheader}>
        <div className='col1'>Rank</div>
        <div className='col2'>Name</div>
        <div className='col3'>Points</div>
      </div>
    );
  };

  return (
    <div className={classes["leader-mainmenu"]}>
      <Header>
        <h1>Leader Board</h1>
      </Header>
      <div className={classes["leader-container"]}>
        <ColumnHeader />
        {top.map((item, index) => (
          <div className={classes.list} key={item.id}>
            <h3>{index + 1}</h3>
            <h3>{item.nickname}</h3>
            <h3>{item.points}</h3>
          </div>
        ))}
      </div>
      <Navbar initial='1' />
    </div>
  );
};

export default LeaderBoard;
