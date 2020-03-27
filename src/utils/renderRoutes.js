import React from 'react';
import { Switch, Route } from 'react-router-dom';

const renderRoutes = (routes) => routes? (
  <Switch>
    {
      routes.map( (route, index) => {
        return (
          <RouteWithSubRoutes key={index} {...route} />
        )
      })
    }
  </Switch>
): null;

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default renderRoutes;