import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '@src/components/PrivateRoute/PrivateRoute';
import LaunchScreen from '@src/components/LaunchScreen/LaunchScreen';

const LoginPage = lazy(() => import('@src/containers/pages/LoginPage/LoginPage'));
const WelcomePage = lazy(() => import('@src/containers/pages/WelcomePage/WelcomePage'));
const DashboardPage = lazy(() => import('@src/containers/pages/DashboardPage/DashboardPage'));

const Main = () => <Suspense fallback={<LaunchScreen />}>
  <Switch>
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
  </Switch>
</Suspense>;

export default Main;
