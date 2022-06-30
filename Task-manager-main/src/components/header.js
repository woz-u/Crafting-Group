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
    
<div className = "container" >
    <header className="py-3 mb-3 border-bottom">
      <div className="container-fluid d-grid gap-3 align-items-center" >
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
            <svg className="bi me-2" width="40" height="32"></svg>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
            <li className="dropdown-item active"  aria-current="page">Overview</li>
            <li className="dropdown-item" >Projects</li>
            <li className="dropdown-item" >Shopping</li>
            <li className="dropdown-item" >Stash</li>
           <li><button onClick={logOut}>Log out</button></li>
           <li><button onClick={googleSignIn}> Sign in with Google</button></li>
          </ul>
          </div>
        </div>
     </header>
</div>
 
  );
}

export default Header
