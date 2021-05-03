import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Nav from "./components/Nav/Nav";
import Sheets from "./components/SheetsPage/Sheets";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import Sheet from "./components/CharacterSheet/CharacterSheet";

import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  container: {
    display: "flex",
  },
});

const App = (props) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/sheets" component={Sheets} />
          {/* <Route exact path="/dice-roller" component={DiceRoller} /> */}
          <Route exact path="/sign-in" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/sheet" component={Sheet} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
