//Crafting PM Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// FireStore Import
import { getFirestore } from "firebase/firestore"

//Google Auth Import


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIyZnXpjje_FIiztLI03zXysgBP8A0G0c",
  authDomain: "crafting-pm.firebaseapp.com",
  projectId: "crafting-pm",
  storageBucket: "crafting-pm.appspot.com",
  messagingSenderId: "858385904193",
  appId: "1:858385904193:web:f7d2acd04ddc8d1246ccc0"
};

//CRUD for FireStore

//POPUP Auth for Google
import { GoogleAuthProvider } from "firebase/auth";

var provider = new firebase.auth.GoogleAuthProvider();

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

export {db}
