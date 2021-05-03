import React from "react";
import { Box, TextField, List, ListItem, makeStyles } from "@material-ui/core";

const styles = makeStyles({
  abilityContainer: {
    backgroundColor: "#DEDEDE",
    borderRadius: "15px",
    width: "80%",
    margin: "auto",
    paddingTop: "15",
  },

  abilityList: {
    display: "flex",
  },

  inputBackground: {
    background: "white",
    textAlign: "center",
    border: "2px solid black",
  },
});

const AbilityScores = (props) => {
  const classes = styles();

  return (
    <Box id="ability-score-container" className={classes.abilityContainer}>
      <List className={classes.abilityList}>
        <ListItem>
          <TextField
            id="strength"
            variant="outlined"
            helperText="Strength"
            InputProps={{ className: classes.inputBackground }}
          />
        </ListItem>

        <ListItem>
          <TextField
            id="dexterity"
            variant="outlined"
            helperText="Dexterity"
            InputProps={{ className: classes.inputBackground }}
          />
        </ListItem>

        <ListItem>
          <TextField
            id="constitution"
            variant="outlined"
            helperText="Constitution"
            InputProps={{ className: classes.inputBackground }}
          />
        </ListItem>

        <ListItem>
          <TextField
            id="intelligence"
            variant="outlined"
            helperText="Intelligence"
            InputProps={{ className: classes.inputBackground }}
          />
        </ListItem>

        <ListItem>
          <TextField
            id="wisdom"
            variant="outlined"
            helperText="Wisdom"
            InputProps={{ className: classes.inputBackground }}
          />
        </ListItem>

        <ListItem>
          <TextField
            id="charisma"
            variant="outlined"
            helperText="Charisma"
            InputProps={{ className: classes.inputBackground }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default AbilityScores;
