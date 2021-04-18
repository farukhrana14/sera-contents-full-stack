import React from 'react';
import './LogIn.css';
import { useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
import {UserContext} from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import google from '../../images/googleIcon.png';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: '/'}};

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email: email }
            setLoggedInUser(signedInUser);
            console.log(result);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
            });
    }
  
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      }




    return (
        <div className="sign-in-div container">
      <div onClick={handleGoogleSignIn} className="google-sign-in">
        <div className="google-img">
          <img className='img-fluid' src={google} alt="" />
        </div>

        <div className="google-text">
          <p>Continue with Google</p>
        </div>
      </div>
    </div>
    );
};

export default LogIn;