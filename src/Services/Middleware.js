import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import AuthService from './auth.service';


const Middleware = ({ component: Component, ...rest }) => {
  
  const [state, changeState] = useState(AuthService.userData());
  const history = useHistory();

  
  return (
    <Route {...rest} render={
      props => {
        if (state != null) {
          return <Component {...rest} {...props} />
        } else {
          history.push('/login');
        }
      }
    } />
  )
}

export default Middleware;