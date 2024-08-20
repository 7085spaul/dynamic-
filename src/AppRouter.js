// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Widget from './components/Widget';
import AddWidget from './components/AddWidget';
import Navbar from './components/Navbar';

const AppRouter = () => (
  <Router>
    <div>
      <Navbar />
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/widget">Widget</Link>
          </li>
          <li>
            <Link to="/addwidget">Add Widget</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/widget" component={Widget} />
        <Route path="/addwidget" component={AddWidget} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;