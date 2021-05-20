import React, {useEffect} from "react";
import {useFirestoreDocData, useFirestore, useAuth, useFirestoreCollection } from "reactfire";
import Points from "./points";
import "./LeaderBoard.css";

export default function LeaderBoard({ props }) {

  // const points = useFirestoreDocData(usersRef).data?.points;
  // const auth = useAuth();
  // const users = useFirestore().collection("Users");
  // const userArray = useFirestoreCollection(users).data?.docs;
  // const points = useFirestoreDocData(userArray).data[`points`];

  const users = useFirestore().collection("Users").orderBy("points", "desc").limit(10);
  const userArray = useFirestoreCollection(users).data?.docs;

  const points = []
  const name = []
  userArray.forEach((user) => {
  points.push(<li key="{points}"> <b>name:</b>{user.data().nickname}  <b>points:</b> {user.data().points}</li>);
  })

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
      <h1> Top 10 LeaderBoards  </h1>
      <div id="listItems">
        {points}
      </div>
     </div>
    );
  }
