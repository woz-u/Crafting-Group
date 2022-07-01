// import {} from 'firebase';
import * as React from 'react';
import { auth, provider } from './../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import {Link} from 'react-router-dom';

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

  // const Router = ('link') did this 

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  {/* <Link to="/index" className="navbar-brand" >REPLACE WITH LOGO Crafting Project Manager (Task-manager-main/src/components/header.js/</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/index" className="nav-link active" aria-current="page" >Project Dashboard</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
   
      <span class="navbar-text ">
        <button class="btn btn-primary " onClick={googleSignIn}> Sign in with Google</button>
        <button class="btn btn-primary " onClick={logOut}>Log out</button>
              </span>
    </div>
 </div>
 </nav>
 );
  }

export default Header
