
import {auth, provider} from './firebase'
import {signInWithPopup, signOut} from 'firebase/auth'

function google() {
    const googleSignIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((result) => {
            console.log(`I'm logged ${result}`);
        }).catch((error) => {
            console.log(error.message);
        },
    const logOut = () => {
        signOut(auth).then(() => {
            console.log("I'm logged out");
          }).catch((error) => {
              console.log(error.message);
      }
    }