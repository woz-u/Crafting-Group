//snippets to keep for later

      //adding in future iteration
      // const [supply, setSupply] = useState('') // <-- added
      //   const [item, setAddSupply] = useState('') //adding a new supply item may move to secondary modal

       {/* <label>Supply List</label>
            **want a repeating single box to enter each item into the project & have an updating list (will likely go on a secondary modal as a simple task list for now use Stacie's work on this). Adding the potential for uploading a pic.(possibly on a third modal in the future.) (addTask shows on modal)
            {/* <button onClick={() => setAddSupply(true)}> */}
            {/* Add Supply item + (move to new modal) */}
            {/* </button> */} */}
            {/* <input type='text' name='supply' onChange={(e) => setSupply(e.target.value)}  */}
          {/* value={supply} placeholder='Enter Supplies Needed'/>      */}

                  // supply: supply, // <-- added


                    {/* <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
      
      
      
  

// import {HEADER, FOOTER, BREADCRUMB, PAGINATION, SIDENAV, SIGNINOUT} from '../components'


          {/* Change to next and link to second modal for supply list which links to second set of docs specifically for the stash area for later. */}





          ------------------------
          import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import Home from './home';
import About from './about';
import Features from './features';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";





// ReactDOM.render(
  // <React.StrictMode>
    const Routes = () => (
<Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
    </div>
  </Router>
    );
    export default Routes;
// </React.StrictMode>,
ReactDOM.render(<App />, document.getElementById('root'));


--------------
import './App.css';
import Home from './TaskManager'
import Header from './components/header'
import React from 'react'
import { Link } from "react-router-dom";

function App() {
  return (

    <div className='app'>
      <Header />
      <Home />
    </div>
  );
}
export default App;

      {/* <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}


// import { BrowserRouter as Router, Route } from 'react-router-dom';

// ReactDOM.render(
  // <React.StrictMode>
//     const Routes = () => (
// <Router>
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/features" component={Features} />
//     </div>
//   </Router>


//     );
//     export default Routes
// </React.StrictMode>,
// ReactDOM.render(<App />, document.getElementById('root'));




  // return (
  //   <header id="wrapper">
  //     <div className='taskManager' id='taskmanager 1'>
  //       <div id='A'>Craft Project
  //       <div className="px-3 py-2 bg-dark text-white" id='text white 2'>
  //       <div className="container" id='container 3'>
  //         <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" id='alignment 4'>
  //           <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
  //             <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
  //           </a>
  //           <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small" id ='menu'>
  //             <li id='home'>
  //               <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
  //                 <Link to="/">Home</Link>
  //             </li>
  //             <li id='dash'>
  //               {/* <a href="#" className="nav-link text-white"> */}
  //                 <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
  //                 Dashboard
  //               </a>
  //             </li>
  //             <li id ='features'>
  //               {/* <a href="#" className="nav-link text-white"> */}
  //                 <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
  //                 Features
  //               </a>
  //             </li>
  //             <li id='about'>
  //               {/* <a href="#" className="nav-link text-white" > */}
  //                 <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
  //                 About
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       </div>
  //       <div className="px-3 py-2 border-bottom mb-3" id='border bottom 5' >
  //       <div className="container d-flex flex-wrap justify-content-center" id='justify 6' >
  //         <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" id='search'>
  //           <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
  //         </form>

  //         <div class="text-end">
  //         {/* <button type="button" class="btn btn-light text-dark me-2">Login</button> */}
  //         <button onClick={googleSignIn}> Sign in with Google</button>
  //     <button onClick={logOut}>Log out</button>
      
  //         </div>
  //       </div>
  //       </div>
  //     </div>
  //     </div>
  //  </header>