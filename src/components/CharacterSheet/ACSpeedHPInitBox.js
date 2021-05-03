import React from "react";
import { makeStyles, Box, TextField } from "@material-ui/core";

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
        />
      </Box>

      <br></br>
      <br></br>

      <label for="maxHP">Maximum Hitpoints</label>
      <TextField id="maxHP" variant="standard" className={classes.hitpoints} />

      <br></br>
      <br></br>

      <label for="maxHP">Current Hitpoints</label>
      <TextField id="currHP" variant="standard" className={classes.hitpoints} />
    </Box>
  );
};

export default ACSpeedHPInit;
