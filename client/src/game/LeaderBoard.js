import React, { useEffect } from "react";
import {
  useFirestoreDocData,
  useFirestore,
  useAuth,
  useFirestoreCollection,
} from "reactfire";
import Points from "./points";
import "./LeaderBoard.css";

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

  return (
    <div>
      <h1> Top 10 LeaderBoards </h1>
      <div id='listItems'>
        {top.map((item) => (
          <h1 key={item.id}>
            {item.nickname}
            {item.points}
          </h1>
        ))}
      </div>
    </div>
  );
}
