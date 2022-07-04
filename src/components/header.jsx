// import {} from 'firebase';
import {auth, provider  } from '../firebase'
import {signInWithPopup, signOut}from 'firebase/auth'
import React from 'react'
function Header() {

  const googleSignIn =(e) =>{
  
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then((result)=>{
      console.log(`I'm logged ${result}`);
    })
    .catch((error) =>{
      console.log(error.message);
    })
  }

  const logOut =()=>{
    signOut(auth).then(()=>{
      console.log("I'm logged out");
}).catch((error)=>{
      console.log(error.message);
    });
  }
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar w/ text
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
        <span className="navbar-text">
          <button onclick="{googleSignIn}"> Sign in with Google</button>
          <button onclick="{logOut}">Log out</button>{" "}
        </span>
      </div>
    </div>
  </nav>
  
    
    );
  }

    export default Header
