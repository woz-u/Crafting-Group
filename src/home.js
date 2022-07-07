import React from 'react';
import App from './App';
// import Index from './index';

export const Home = () => (
  <div>
    <h2>Home</h2>
    <p>This should be our home page</p>
    <button className="ui button">Open first Modal</button>
    <App />
  </div>
);

export default Home;