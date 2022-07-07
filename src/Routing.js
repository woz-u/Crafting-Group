import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
    </div>
  );
};