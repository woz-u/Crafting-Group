// Import the functions you need from the SDKs you need
import { initializeApp } from "/firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "/firebase/auth";
import { getFirestore } from "/firebase/firestore";

// Your web app's Firebase configuration for Crafters PM
const firebaseConfig = {
  apiKey: "AIzaSyDKrwvJZc8yt1OWuS992xO1dNAiGuaNsh0",
  authDomain: "crafters-pm.firebaseapp.com",
  projectId: "crafters-pm",
  storageBucket: "crafters-pm.appspot.com",
  messagingSenderId: "1096507400942",
  appId: "1:1096507400942:web:9010c10809725443ad49ff"
};

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

//   const firebase = require("firebase");
// // Required for side-effects
// require("/firebase/firestore");

// const db = getFirestore(app);

// const app = initializeApp(firebaseConfig);