import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Header from './components/header.js';
// import FOOTER from 'footer';
// import BREADCRUMB from 'breadcrumb';
// import PAGINATION from 'pagination'; 
// import SIDENAV from 'sidenav';

ReactDOM.render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <BREADCRUMB /> */}
    {/* <SIDENAV /> */}
    <App />
    {/* <PAGINATION /> */}
    {/* <FOOTER /> */}
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();