import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("../views/Home/HomePage"));
const ErrorPage = lazy(() => import("../views/Error404"));

const Routes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          component={(_) => (
            <ErrorPage status={404} message="Page not found." />
          )}
        />
      </Switch>
    </Suspense>
  );
};

export default Routes;
