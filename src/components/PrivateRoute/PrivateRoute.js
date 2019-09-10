import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '@src/models/context/UserContext/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const { authenticated } = useContext(UserContext);

  return <Route
    {...rest}
    render={props => (
      authenticated
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />;
};

export default PrivateRoute;
