import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/auth.service';
 
// handle the public routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => AuthService.getCurrentUser() ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />}
    />
  )
}
 
export default PublicRoute;