// import {} from 'firebase';
import './../App.css';
import * as React from 'react';
import { auth, provider } from './../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

function Header() {

  const googleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(`I'm logged ${result}`);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const logOut = () => {
    signOut(auth).then(() => {
      console.log("I'm logged out");
    }).catch((error) => {
      console.log(error.message);
    });
 
  };

  return (
    <div>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  {/* <Link to="./home" className="navbar-brand" >REPLACE WITH LOGO Crafting Project Manager (src/components/header.js/</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        {/* <Link to="./index" className="nav-link active" aria-current="page" >Project Dashboard</Link> */}
        </li>
        <li class="nav-item">
        {/* <Link to="./features" className="nav-link">Features</Link> */}
        </li>
        <li class="nav-item">
        {/* <Link to="./about" className="nav-link">About</Link> */}
        </li>
      </ul>
    </div>
  </div>



    <span class="navbar-text ">
        <button class="btn btn-primary " onClick={googleSignIn}> Sign in with Google</button>
        <button class="btn btn-primary " onClick={logOut}>Log out</button>
    </span>
    </nav> 
      </div>

    );
  }

export default Header
