import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as React from 'react';
import Home from './home';
import About from './about';
import Features from './features';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// ReactDOM.render(
  // <React.StrictMode>
    const Routes = () => (
<Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
    </div>
  </Router>


    );
    export default Routes
// </React.StrictMode>,
ReactDOM.render(<App />, document.getElementById('root'));


