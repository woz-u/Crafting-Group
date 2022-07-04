import './App.css';
import Home from './TaskManager'
import Header from './components/header'
import React from 'react'
import ReactDOM from 'react-dom'

function App() {

  return (

    <div className='app'>
    <Header />
    <Home />
    
    </div>
  );
}

export default App;