import React from "react";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import Image from "../../assets/backgrounds/parchment2.jpg";

const styles = makeStyles({
  button: {
    padding: "15px",
  },

  title: {
    fontWeight: "bold",
    marginTop: "30px",
  },

  spacing: {
    padding: "15px",
  },

  parchmentBackground: {
    margin: "auto",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "1338px",
    mx: "auto",
    textAlign: "center",
  },
});

const MainPage = (props) => {
  const classes = styles();

  return (
    <Box className={classes.parchmentBackground} p={1}>
      <Typography
        variant="h1"
        className={`${classes.title} ${classes.spacing}`}
      >
        Sheet Chief
      </Typography>

      <br></br>

      <Typography variant="h3">Welcome to the Sheet Chief!</Typography>

      <Typography variant="h3">The best character sheet</Typography>

      <Typography variant="h3">manager ever!</Typography>

      <br></br>

      <Typography className={classes.spacing}>(Self-Proclaimed)</Typography>

      <Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          component={NavLink}
          to="/register"
        >
          Sign Up Now
        </Button>
      </Box>
    </Box>
  );
};

export default MainPage;
