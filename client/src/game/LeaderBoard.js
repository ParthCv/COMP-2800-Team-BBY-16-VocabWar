import React, { useEffect } from "react";
import {
  useFirestoreDocData,
  useFirestore,
  useAuth,
  useFirestoreCollection,
} from "reactfire";
import "./leaderboard.css";

export default function LeaderBoard({ props }) {
  // const points = useFirestoreDocData(usersRef).data?.points;
  // const auth = useAuth();
  // const users = useFirestore().collection("Users");
  // const userArray = useFirestoreCollection(users).data?.docs;
  // const points = useFirestoreDocData(userArray).data[`points`];

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

  console.log(top);

  // userArray.forEach((user) => {
  //   name.push(<li>{user.data().nickname}</li>);
  //   })

  // useEffect(() => {
  //   document
  //     .querySelector(":root")
  //     .style.setProperty("--vh", window.innerHeight + "px");
  //   console.log(userArray);

  // });
  const LeaderboardHeader = () => {
    return (
      <div className='leadheader'>
        <h2>Leaderboard</h2>
      </div>
    );
  };

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
      <div className='leader-container'>
        <LeaderboardHeader />
        <ColumnHeader />
        {top.map((item, index) => (
          <div className='list' key={item.id}>
            <h3>{index + 1}</h3>
            <h3>{item.nickname}</h3>
            <h3>{item.points}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
