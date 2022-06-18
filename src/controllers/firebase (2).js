//FIRST initialize, add LIBRARIES and add config
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"; //add

// App's Firebase configuration from settings
const firebaseConfig = {
  apiKey: "AIzaSyDRVhGt_KxRfNnMrt0J3KMA0lGXJcHZcMo",
  authDomain: "task-manager-f109d.firebaseapp.com",
  projectId: "task-manager-f109d",
  storageBucket: "task-manager-f109d.appspot.com",
  messagingSenderId: "312667133109",
  appId: "1:312667133109:web:a4ffa96b0549f6469adafc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//add
const db = getFirestore(app)

export {db}

//if getting a permissions error check that the advanced settings for users has the person as an owner. will need to look at the rules further for other users.