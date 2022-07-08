import './App.css';
import Home from './TaskManager'
import Header from './header'
import Footer from './footer'
import * as React from 'react'
// import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
function App() {

  return (

    <div className='app'>
    <Header />
    <nav>
      <Link to="/home">Home</Link> | {" Home "}
    </nav>
    <Home />
    <Footer />
    </div>
  );
}

export default App;