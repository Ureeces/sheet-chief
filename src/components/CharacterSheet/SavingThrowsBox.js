import React from "react";
import {
  makeStyles,
  Box,
  TextField,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";

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

  const getModValue = (score) => {
    let result = Math.floor((parseInt(score) - 10) / 2);

    if (isNaN(result)) {
      return 0;
    } else {
      if (result > 0) {
        return "+" + result;
      } else {
        return "" + result;
      }
    }
  };

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
            <TextField
              id="str-save"
              className={classes.throwField}
              disabled
              value={getModValue(props.character.strScore)}
            />
            <label>Strength</label>
          </ListItem>

          <ListItem>
            <TextField
              id="dex-save"
              className={classes.throwField}
              disabled
              value={getModValue(props.character.dexScore)}
            />
            <label>Dexterity</label>
          </ListItem>

          <ListItem>
            <TextField
              id="con-save"
              className={classes.throwField}
              disabled
              value={getModValue(props.character.conScore)}
            />
            <label>Constitution</label>
          </ListItem>

          <ListItem>
            <TextField
              id="int-save"
              className={classes.throwField}
              disabled
              value={getModValue(props.character.intScore)}
            />
            <label>Intelligence</label>
          </ListItem>

          <ListItem>
            <TextField
              id="wis-save"
              className={classes.throwField}
              disabled
              value={getModValue(props.character.wisScore)}
            />
            <label>Wisdom</label>
          </ListItem>

          <ListItem>
            <TextField
              id="cha-save"
              className={classes.throwField}
              disabled
              value={getModValue(props.character.chaScore)}
            />
            <label>Charisma</label>
          </ListItem>
        </List>
        <Typography variant="h4">Ability Modifiers</Typography>
      </Box>
      <Box id="ability-scores" display="flex"></Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(SavingThrowsBox);
