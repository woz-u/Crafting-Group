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


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
