import './App.css';
import TaskManager from './TaskManager';
import Header from './header';
import Footer from './footer';
import React from 'react';
import About from './about';
import Home from './home';
import Features from './features';
import 'semantic-ui-css/semantic.min.css'

function App() {

  return (

    <div className='app'>
    <Header />
    <Home />
    <About />
    <TaskManager />
    <Features />
    <Footer />
    </div>
  );
}

export default App;