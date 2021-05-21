import React, { useState, useEffect } from "react";
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
  console.log(auth2.currentUser);
  const provider = new auth.GoogleAuthProvider();
  const incrementer = useFirestore.FieldValue;
  const signInWithGoogle = (e) => {
    auth2.signInWithRedirect(provider);
  };

  useEffect(() => {
    auth2
      .getRedirectResult()
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
      .catch((error) => {});
  }, []);
  return (
    <div>
      <button className='myform-btn' onClick={signInWithGoogle}>
        Continue With Google
      </button>
    </div>
  );
}
