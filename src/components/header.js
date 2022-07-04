
import './../App.css';
import '../index.css';
import React from 'react';

import { auth, provider } from './../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

import Index from '../index';
import Home from '../home';
import Features from '../features';
import About from '../about';

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
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  {/* <Link to="./home" className="navbar-brand" >REPLACE WITH LOGO Crafting Project Manager (src/components/header.js/</Link> */}
  <Home />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        {/* <Link to="./index" className="nav-link active" aria-current="page" >Project Dashboard</Link> */}
        <Index />
        </li>
        <li className="nav-item">
        {/* <Link to="./features" className="nav-link">Features</Link> */}
        <Features />
        </li>
        <li className="nav-item">
        {/* <Link to="./about" className="nav-link">About</Link> */}
        <About />
        </li>
      </ul>
    </div>
  </div>



    <span className="navbar-text ">
        <button className="btn btn-primary " onClick={googleSignIn}> Sign in with Google</button>
        <button className="btn btn-primary " onClick={logOut}>Log out</button>
    </span>
    </nav> 
      </div>

    );
  }

export default Header;
