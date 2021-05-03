import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, CircularProgress } from "@material-ui/core";

import Nav from "./components/Nav/Nav";

const MainPage = lazy(() => import("./components/MainPage/MainPage"));
const Sheets = lazy(() => import("./components/SheetsPage/Sheets"));
const Login = lazy(() => import("./components/Login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

const styles = makeStyles({
  container: {
    display: "flex",
  },
});

const App = (props) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Suspense
        fallback={
          <div>
            <CircularProgress color="primary" />
          </div>
        }
      >
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/sheets" component={Sheets} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="" component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
