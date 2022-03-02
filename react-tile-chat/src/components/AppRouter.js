import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../router";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/constants";

export const AppRouter = () => {
  const user = false

  return user ? (
    <Switch>
      {
        privateRoutes.map(({path, component}, index) =>
          <Route key={index} path={path} component={component} exact={true}/>
        )
      }
      <Redirect to={CHAT_ROUTE}/>
    </Switch>

  ) : (
    <Switch>
      {
        publicRoutes.map(({path, component}, index) =>
          <Route key={index} path={path} component={component} exact={true}/>
        )
      }
      <Redirect to={LOGIN_ROUTE}/>
    </Switch>

  )
};

