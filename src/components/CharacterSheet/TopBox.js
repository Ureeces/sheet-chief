import React from "react";
import { makeStyles, Box, TextField } from "@material-ui/core";
import { connect } from "react-redux";

import Logo from "../../assets/images/DnD_Logo.png";

const useStyles = makeStyles({
  container: {
    display: "flex",
    margin: "auto",
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
          onChange={(e) =>
            props.changeCharDetail("characterName", e.target.value)
          }
        />
        <TextField
          id="class-level"
          variant="standard"
          helperText="Class & Level"
          onChange={(e) => props.changeCharDetail("classLevel", e.target.value)}
        />
        <TextField
          id="player-name"
          variant="standard"
          helperText="Player Name"
          onChange={(e) => props.changeCharDetail("playerName", e.target.value)}
        />

        <br></br>

        <TextField
          id="race"
          variant="standard"
          helperText="Race"
          onChange={(e) => props.changeCharDetail("race", e.target.value)}
        />
        <TextField
          id="alignment"
          variant="standard"
          helperText="Alignment"
          onChange={(e) => props.changeCharDetail("alignment", e.target.value)}
        />
        <TextField
          id="background"
          variant="standard"
          helperText="Background"
          onChange={(e) => props.changeCharDetail("background", e.target.value)}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(TopBox);
