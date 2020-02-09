import React from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home';
import { Service } from './Service';
import { Contact } from './Contact';
import { Header } from './Header';

export function App() {
  return (
    <div>
      <Header />
      <Router>
        <div className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Service">Service</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Service">
            <Service />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
