import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // can add the list of .css files here or combine them into a single file (my preference)
import App from './App';
// import firebase from './controllers/firebase'


const myFirstElement = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

