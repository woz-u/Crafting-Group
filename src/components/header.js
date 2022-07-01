// import {} from 'firebase';
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
  

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">REPLACE WITH LOGO Crafting Project Manager (Task-manager-main/src/components/header.js/</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="features">Future Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
      </ul>
      <span class="navbar-text m-2">
        <button class="btn btn-primary mr-3" onClick={googleSignIn}> Sign in with Google</button>
        <button class="btn btn-primary ml-3" onClick={logOut}>Log out</button>
              </span>
    </div>
 
 </div>
 </nav>
 
 );
  }

export default Header
