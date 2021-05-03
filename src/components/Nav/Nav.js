import React from "react";
import { withRouter, NavLink } from "react-router-dom";

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
    width: "100px",
  },
});

const Nav = (props) => {
  const classes = useStyles(props);

  const navList = [
    {
      text: "Home",
      address: "/",
    },
    {
      text: "My Sheets",
      address: "/sheets",
    },

    // {
    //   text: "Dice Roller",
    //   address: "/dice-roller"
    {
      text: "Sign In",
      address: "/sign-in",
    },
  ];

  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <div className={classes.drawerStyle}>
        <List>
          {navList.map(({ text, address }) => {
            return (
              <ListItem button component={NavLink} to={address}>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </MUIDrawer>
  );
};

export default withRouter(Nav);
