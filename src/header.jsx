// import {} from 'firebase';
import {auth, provider  } from './firebase';
import {signInWithPopup, signOut}from 'firebase/auth';
import * as React from 'react';
// import { Link } from 'react-router-dom';
// import render from 'react-dom';
// import ReactDom from 'react-dom';

import Home from './home';
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
  };
  
  return (
    <div className='taskManager' id='taskmanager 1'>
        <header id='A'>Craft Project
        <div className="px-3 py-2 bg-dark text-white" id='text white 2'>
        <div className="container" id='container 3'>
          <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" id='alignment 4'>
            <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
      {/* <span><Link to="/home"> Home</Link></span> */}
      <span className="text-white"><Home />Home</span>
            </div>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small" id ='menu'>
              <li className="nav-link text-secondary" id='home'>
              {/* <span><Link to="/home"> Home</Link></span> */}
              </li>
              <li className="nav-link text-white" id='dash'>
              {/* <div><Link to="/dash">Dashboard </Link></div> */}
               
              </li>
              <li className="nav-link text-white" id ='features'>
              {/* <div><Link to="/home">Features </Link></div> */}
                  
                 </li>
              <li className="nav-link text-white" id='about'>
              {/* <div><Link to="/home">About </Link></div> */}
              </li>
            </ul>
          </nav>
        </div>
        </div>
        <div className="px-3 py-2 border-bottom mb-3" id='border bottom 5'>
        <div className="container d-flex flex-wrap justify-content-center" id='justify 6'>
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" id='search'>
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
          <button onClick={googleSignIn}> Sign in with Google</button>
      <button onClick={logOut}>Log out</button>
      
          </div>
        </div>
        </div>
        </header>
    </div>
  
  );
}
          
  export default Header
