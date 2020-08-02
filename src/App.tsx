import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import routes from './routes';
import './App.css';

const routesComponent = routes.map((route) => (
  <Route
    path={route.url}
    component={route.component}
    exact={route.exact}
    key={route.url}
  />
));

export const App = () => {
  return (
    <Router>
      <header className={'header'}>
        <nav className={'header-navigation'}>
          <ul>
            <li>
              <NavLink
                className={'nav-item'}
                to="/"
                exact
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'nav-item'}
                to="/clickcounter"
                activeClassName="active"
              >
                Click Counter
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'nav-item'}
                to="/jotto"
                activeClassName="active"
              >
                Jotto
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>{routesComponent}</Switch>
    </Router>
  );
};
