import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AboutMe} from '../pages/index';

class Routes extends Component {
  render() {
    return (
      <Switch>
        
        <Route exact path="/">
          <AboutMe />
        </Route>

      </Switch>
    );
  }
}

export default Routes;