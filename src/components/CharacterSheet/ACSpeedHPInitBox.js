import React from "react";
import { makeStyles, Box, TextField } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles({
  charVarBox: {
    backgroundColor: "#DEDEDE",
    borderRadius: "15px",
    height: "350",
    width: "35%",
    padding: "15px",
  },

  acSpeedInitInput: {
    width: "75px",
    textAlign: "center",
    height: "100%",
    display: "flex",
    margin: "auto",
  },

  inputBackground: {
    background: "white",
    textAlign: "center",
    border: "2px solid black",
  },

  hitpoints: {
    width: "50px",
    paddingLeft: "10px",
  },
});

const ACSpeedHPInit = (props) => {
  const classes = useStyles();

  const getInitiative = (score) => {
    return Math.floor((score - 10) / 2);
  };

  return (
    <Box id="ac-speed-init-hp" className={classes.charVarBox}>
      <Box>
        <TextField
          id="armorClass"
          variant="outlined"
          className={classes.acSpeedInitInput}
          helperText="AC"
          InputProps={{
            className: classes.inputBackground,
          }}
          onChange={(e) => props.changeCharDetail("armorClass", e.target.value)}
        />
      </Box>

      <Box>
        <TextField
          id="initiative"
          variant="outlined"
          className={classes.acSpeedInitInput}
          helperText="Initiative"
          InputProps={{
            className: classes.inputBackground,
          }}
          disabled
          value={getInitiative(props.character.dexScore)}
        />
      </Box>

      <Box>
        <TextField
          id="speed"
          variant="outlined"
          className={classes.acSpeedInitInput}
          helperText="Speed"
          InputProps={{
            className: classes.inputBackground,
          }}
          onChange={(e) => props.changeCharDetail("speed", e.target.value)}
        />
      </Box>

      <br></br>
      <br></br>

      <label for="maxHP">Maximum Hitpoints</label>
      <TextField
        id="maxHP"
        variant="standard"
        className={classes.hitpoints}
        onChange={(e) => props.changeCharDetail("maxHP", e.target.value)}
      />

      <br></br>
      <br></br>

      <label for="currHP">Current Hitpoints</label>
      <TextField
        id="currHP"
        variant="standard"
        className={classes.hitpoints}
        onChange={(e) => props.changeCharDetail("currHP", e.target.value)}
      />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(ACSpeedHPInit);
