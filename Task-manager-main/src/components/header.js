// import {} from 'firebase';
import {auth, provider  } from './../firebase'
import {signInWithPopup, signOut}from 'firebase/auth'

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
  <div name="container">
    <div name="px-3 py-2 bg-dark text-white">
      <div name="container">
        <div name="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" name="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <svg name="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </a>

          <ul name="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
            <a href="#">Home</a>
            
            </li>
            <li><a href="#">Dash</a>
                         </li>
                     </ul>
        </div>
      </div>
    </div>
    <div name="px-3 py-2 border-bottom mb-3">
      <div name="container d-flex flex-wrap justify-content-center">
        <form name="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <input type="search" name="form-control" placeholder="Search..." aria-label="Search" />
        </form>

        <div name="text-end">
          {/* <button type="button" name="btn btn-light text-dark me-2">Login</button> */}
          <button onClick={googleSignIn}> Sign in with Google</button>
      <button onClick={logOut}>Log out</button>
      
        </div>
      </div>
    </div>
  </div>
  
  );
          }
  export default Header
  //needs the logic for routing pages
  //needs search logic
  //needs signin/out via google logic here?