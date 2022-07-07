// import {} from 'firebase';
import { auth, provider  } from './firebase'
import { signInWithPopup, signOut}from 'firebase/auth'
import * as React from 'react';
import { Home } from './home';
import { About} from './about';
// import { Render } from 'react-dom';

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
        <div id='A'>Craft Project
        <div className="px-3 py-2 bg-dark text-white" id='text white 2'>
        <div className="container" id='container 3'>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" id='alignment 4'>
    
          <button className="ui button">Open first Modal</button>
               <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" id ='menu'>
              <li id='home'>
              
Home<Home />
        </li>
            <li id='about'>
                 About
                <About />
              </li>
            </ul>
          </div>
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
        </div>
    </div>

    )
  };
          
  export default Header
