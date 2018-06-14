import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Authenticate } from "./Authenticator";

const AuthRoute = props => {
  return (
    <Authenticate>
      {authProps => {
        const { user, loading } = authProps;

        console.log(authProps);

        if (loading) return null;

        if (user === null) {
          return <Redirect to="/session/new" />;
        } else {
          return <Route {...props} />;
        }
      }}
    </Authenticate>
  );
};

export default AuthRoute;
