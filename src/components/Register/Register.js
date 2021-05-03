import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
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

const Register = (props) => {
  const classes = styles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box p={1} className={classes.parchmentBackground}>
      <Typography variant="h1">Register</Typography>

      <br></br>

      <Box>
        <TextField
          id="username"
          variant="outlined"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{ className: classes.inputBackground }}
        />
      </Box>
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ className: classes.inputBackground }}
        />
      </Box>
      <br></br>

      <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={() => console.log(username, email, password)}
        >
          Sign Me Up!
        </Button>
      </Box>

      <br></br>

      <Link component={NavLink} to="/sign-in" color="primary">
        Have an account? Login here!
      </Link>
    </Box>
  );
};

export default Register;
