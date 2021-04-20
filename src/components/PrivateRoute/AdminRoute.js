import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RoleContext, UserContext } from '../../App';

const AdminRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminRole, setAdminRole] = useContext(RoleContext);
    console.log(adminRole);
    return (
        <Route 
        {...rest}
        render={({ location }) =>
        (adminRole) ? (
            children
        ) : (
    <Redirect
        to={{
          pathname: "/restricted",
          state: { from: location }
        }}
      />
    )
  }
/>
    );
};

export default AdminRoute;