import React from 'react';
import Home from '../../pages/home/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Questions } from '../../pages/questions/questions';


export default function RouteApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/questions">Questions</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/questions">
            <Questions/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}