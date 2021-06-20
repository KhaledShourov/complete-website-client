import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import firebaseConfig from "./firebase.config";


firebase.initializeApp(firebaseConfig);
const LoginForm = () => {
  const [user, setUser] = useState({})
  var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user)
        setUser(user)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
      });
  }
  return (
    <div className="login-page container">
    
      <div div className = "row align-items-center d-flex justify-content-center"
      style = {
        {
          height: "100vh"
        }
      } >
        <div className="col-md-12 w-75 shadow p-5">
        <h3>{user.email}</h3>
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;