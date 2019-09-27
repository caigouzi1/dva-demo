import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import CountPage from "./pages/count/index";
import Nav from "./pages/layout";
import HomePage from "./pages/home";
import ListPage from "./pages/list";
import ProdectPage from "./pages/product";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Route
          path="/"
          render={() => (
            <Nav>
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/count" component={CountPage} />
                <Route path="/prodect" component={ProdectPage} />
                <Route path="/list" component={ListPage} />
                <Redirect to="/home" />
              </Switch>
            </Nav>
          )}
        />
      </div>
    </Router>
  );
}

export default RouterConfig;
