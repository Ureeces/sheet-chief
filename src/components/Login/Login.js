import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";

import { Link as NavLink } from "react-router-dom";

import Image from "../../assets/backgrounds/parchment2.jpg";

const styles = makeStyles({
  parchmentBackground: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "1338px",
    mx: "auto",
    textAlign: "center",
  },

  inputBackground: {
    background: "white",
    textAlign: "center",
  },
});

const Login = (props) => {
  const classes = styles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box className={classes.parchmentBackground} p={1}>
      <Typography variant="h1">Login</Typography>

      <br></br>

      <Box>
        <TextField
          id="email"
          variant="outlined"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ className: classes.inputBackground }}
        />
      </Box>
      <br></br>

      <Box>
        <TextField
          id="password"
          variant="outlined"
          placeholder="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ className: classes.inputBackground }}
        />
      </Box>
      <br></br>

      <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={() => console.log(localStorage)}
        >
          Sign Me In!
        </Button>
      </Box>

      <br></br>

      <Link component={NavLink} to="/register" color="primary">
        Don't have an account? Sign up here!
      </Link>
    </Box>
  );
};

export default Login;
