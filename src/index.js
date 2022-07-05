import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import React from 'react';
import './index.css';
import Home from './home';
import About from './about';
import Features from './features';
import TaskManager from './TaskManager';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Index = ({ pathname }) => {
  switch (pathname) {
    case '/about':
      return <About />;
    case '/features':
      return <Features />;
    case '/home':
      return <Home />  
    default:
      return <TaskManager />;
  }};


let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});
const App = () => (
  <Router>
    <div className='container'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
    </div>
  </Router>
);

// render(<App />, document.getElementById('root'));

export default Index;

