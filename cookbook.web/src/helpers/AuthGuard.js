import React from "react";
import { Route, Redirect } from "react-router-dom";

import AuthenticationService from "../services/AuthenticationService";

export const AuthGuard = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = AuthenticationService.currentUserValue;
      if (!currentUser) {
        return (
          <Redirect
            to={{ pathname: "/account", state: { from: props.location } }}
          />
        );
      }

      if (roles && roles.indexOf(currentUser.role) === -1) {
        return <Redirect to={{ pathname: "/" }} />;
      }

      return <Component {...props} />;
    }}
  />
);
