import React from "react";
import { makeStyles, Box, TextField } from "@material-ui/core";

import Logo from "../../assets/images/DnD_Logo.png";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },

  charInfoContainer: {
    border: "3px solid black",
    width: "50%",
    margin: "auto",
    marginLeft: "0",
    borderRadius: "20px",
    padding: "25px",
  },
});

const TopBox = (props) => {
  const classes = useStyles();
  return (
    <Box id="top-box-container" className={classes.container}>
      <Box>
        <img src={Logo} height="200px" alt="DnD Dragon Logo" />
      </Box>
      <Box id="top-box" className={classes.charInfoContainer}>
        <TextField
          id="character-name"
          variant="standard"
          helperText="Character Name"
        />
        <TextField
          id="class-level"
          variant="standard"
          helperText="Class & Level"
        />
        <TextField
          id="player-name"
          variant="standard"
          helperText="Player Name"
        />

        <br></br>

        <TextField id="race" variant="standard" helperText="Race" />
        <TextField id="alignment" variant="standard" helperText="Alignment" />
        <TextField id="background" variant="standard" helperText="Background" />
      </Box>
    </Box>
  );
};

export default TopBox;
