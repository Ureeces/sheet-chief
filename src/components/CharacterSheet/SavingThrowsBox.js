import React from "react";
import {
  makeStyles,
  Box,
  TextField,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  savingThrowsBackground: {
    backgroundColor: "#DEDEDE",
    height: "330",
    width: "40%",
    borderRadius: "20px",
  },

  savingThrowsContainer: {
    border: "2px solid black",
    margin: "15px",
    borderRadius: "20px",
    backgroundColor: "white",
  },

  savingThrowList: {
    display: "flex",
    flexDirection: "column",
  },

  abilityScoresContainer: {},

  throwField: {
    width: "30px",
  },
});

const SavingThrowsBox = (props) => {
  const classes = useStyles();
  return (
    <Box
      id="saving-throws-background"
      className={classes.savingThrowsBackground}
    >
      <Box
        id="saving-throws-container"
        className={classes.savingThrowsContainer}
      >
        <List id="saving-throw-list" className={classes.savingThrowList}>
          <ListItem>
            <TextField id="str-save" className={classes.throwField} />
            <label>Strength</label>
          </ListItem>

          <ListItem>
            <TextField id="dex-save" className={classes.throwField} />
            <label>Dexterity</label>
          </ListItem>

          <ListItem>
            <TextField id="con-save" className={classes.throwField} />
            <label>Constitution</label>
          </ListItem>

          <ListItem>
            <TextField id="int-save" className={classes.throwField} />
            <label>Intelligence</label>
          </ListItem>

          <ListItem>
            <TextField id="wis-save" className={classes.throwField} />
            <label>Wisdom</label>
          </ListItem>

          <ListItem>
            <TextField id="cha-save" className={classes.throwField} />
            <label>Charisma</label>
          </ListItem>
        </List>
        <Typography variant="h4">Ability Modifiers</Typography>
      </Box>
      <Box id="ability-scores" display="flex"></Box>
    </Box>
  );
};

export default SavingThrowsBox;
