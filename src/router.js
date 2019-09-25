import React from "react";
import { Router, Route, Switch } from "dva/router";
import CountPage from "./pages/count/index";
import HomePage from "./pages/layout";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Route
          path="/"
          render={() => (
            <HomePage>
              <Switch>
                <Route path="/count" component={CountPage} />
              </Switch>
            </HomePage>
          )}
        />
      </div>
    </Router>
  );
}

export default RouterConfig;
