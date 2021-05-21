import React, { useState } from "react";
import { useFirebaseApp, useFirestore, useAuth } from "reactfire";
import "firebase/auth";

export default function GoogleAuth() {
  const usersRef = useFirestore().collection("Users");
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
  });

  const firebase = useFirebaseApp();

  const auth = useAuth;
  const auth2 = useAuth();
  const provider = new auth.GoogleAuthProvider();
  const incrementer = useFirestore.FieldValue;
  const signInWithGoogle = (e) => {
    auth2
      .signInWithPopup(provider)
      .then((result) => {
        usersRef.doc(result.user.uid).set(
          {
            email: result.user.email,
            nickname: result.user.displayName,
            points: incrementer.increment(0),
            photoURL: result.user.photoURL,
          },
          { merge: true }
        );
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  return (
    <div>
      <button className='myform-btn' onClick={signInWithGoogle}>
        {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          /> */}
        Continue With Google
      </button>
    </div>
  );
}
