import React from "react";
import { useFirestore, useAuth } from "reactfire";
import classes from "./StartPage.module.css";
import "firebase/auth";

const GoogleAuth = () => {
  const usersRef = useFirestore().collection("Users");
  const auth = useAuth;
  const auth2 = useAuth();

  const provider = new auth.GoogleAuthProvider();
  const incrementer = useFirestore.FieldValue;

  // Handles authentication with google and updates the Users collection.

  const signInWithGoogle = (e) => {
    auth2
      .signInWithPopup(provider)
      .then((result) => {
        usersRef.doc(result.user.uid).set(
          {
            email: result.user.email,
            nickname: result.user.displayName,
            points: incrementer.increment(0),
          },
          { merge: true }
        );
        auth2.signInWithCredential(result.credential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button className={classes["myform-btn"]} onClick={signInWithGoogle}>
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleAuth;
