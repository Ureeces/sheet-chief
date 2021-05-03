import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  drawerStyle: {
    backgroundColor: "#632a11",
    color: "#EDD925",
    height: "100%",
    width: "100%",
  },

  drawer: {
    width: "125px",
    backgroundColor: "#632a11",
    borderStyle: "none",
  },
});

const useForceUpdate = () => {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1); //
};

const Nav = (props) => {
  const classes = useStyles(props);
  const { history } = props;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      setIsLoggedIn(true);
      let temp = JSON.parse(localStorage.getItem("jwtToken"));
      setUser(temp.username);
    } else {
      setIsLoggedIn(false);
      setUser("");
    }
  });

  const navListNotLoggedIn = [
    {
      text: "Home",
      address: "/",
    },
    {
      text: "Sign In",
      address: "/sign-in",
    },
  ];

  const navListLoggedIn = [
    {
      text: "Home",
      onClick: () => history.push("/"),
    },
    {
      text: "My Sheets",
      onClick: () => history.push("/sheets"),
    },
    {
      text: "Logout",
      onClick: () => {
        localStorage.removeItem("jwtToken");
        history.push("/");
        forceUpdate();
      },
    },
  ];

  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      {!isLoggedIn ? (
        <div className={classes.drawerStyle}>
          <List>
            {navListNotLoggedIn.map(({ text, address }) => {
              return (
                <ListItem button component={NavLink} to={address}>
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </div>
      ) : (
        <div className={classes.drawerStyle}>
          <List>
            {navListLoggedIn.map(({ text, onClick }) => {
              return (
                <ListItem button onClick={onClick}>
                  <ListItemText>{text}</ListItemText>
                </ListItem>
              );
            })}
            <ListItem>
              <ListItemText>{user}</ListItemText>
            </ListItem>
          </List>
        </div>
      )}
    </MUIDrawer>
  );
};

export default withRouter(Nav);
