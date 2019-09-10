import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '@src/components/PrivateRoute/PrivateRoute';
import WelcomePage from '@src/containers/pages/WelcomePage/WelcomePage';
import LoginPage from '@src/containers/pages/LoginPage/LoginPage';
import DashboardPage from '@src/containers/pages/DashboardPage/DashboardPage';

const Main = () => <Switch>
  <Route
    exact
    path='/'
    component={WelcomePage}
  />
  <Route
    path='/login'
    component={LoginPage}
  />
  <PrivateRoute
    path='/dashboard'
    component={DashboardPage}
  />
  <Route
    render={() => <div>404</div>}
  />
</Switch>;

export default Main;
