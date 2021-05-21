import React, {useState} from 'react'
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
    const signInWithGoogle = (e) => {
      auth2.signInWithPopup(provider)
      .then((result) => {

        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });

      auth2.
   getRedirectResult()
  .then((result) => {
    if (result.credential) {
      var credential = result.credential;

      var token = credential.accessToken;
    }

    var user = result.user;
  }).catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });

  e.preventDefault();
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then((result) => {
      usersRef.doc(result.user.uid).set({
        email: result.user.email,
        nickname: user.nickname,
        points: +0,
      });
    });
    
    };

    
  
    return (
        <div>
              <button className='myform-btn' onClick={signInWithGoogle}>
              {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          /> */}
            Continue With Google</button>
        </div>
    )
}
