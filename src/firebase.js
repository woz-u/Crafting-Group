//FIRST initialize, add LIBRARIES and add config
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"; //add

// App's Firebase configuration from settings
const firebaseConfig = {
  apiKey: "AIzaSyCIyZnXpjje_FIiztLI03zXysgBP8A0G0c",
  authDomain: "crafting-pm.firebaseapp.com",
  projectId: "crafting-pm",
  storageBucket: "crafting-pm.appspot.com",
  messagingSenderId: "858385904193",
  appId: "1:858385904193:web:f7d2acd04ddc8d1246ccc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//add
const db = getFirestore(app)

export {db}

//if getting a permissions error check that the advanced settings for users has the person as an owner. will need to look at the rules further for other users.