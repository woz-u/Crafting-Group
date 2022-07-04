import './App.css';
import './index.css';
import React from 'react';

import Header from './components/header'
import Footer from './components/footer'

import Home from './home';


function App() {
  return (
   
    <div className='app'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
