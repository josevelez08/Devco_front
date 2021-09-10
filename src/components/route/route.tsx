import React from 'react';
import Home from '../../pages/home/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function RouteChess() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/board">Board</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}