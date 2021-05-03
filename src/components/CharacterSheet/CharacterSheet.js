import React from "react";
import { Paper, Box, makeStyles, Drawer as MUIDrawer } from "@material-ui/core";

import TopBox from "./TopBox";
import ACSpeedHPInit from "./ACSpeedHPInitBox";
import SavingThrowsBox from "./SavingThrowsBox";
import AbilityScores from "./AbilityScores";

import "./Sheet.css";

const font = {
  bree_serif: "'Bree Serif', sans-serif",
};

const useStyles = makeStyles({
  sheetPaper: {
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    marginTop: "20px",
    fontFamily: font.bree_serif,
  },
});

const CharacterSheet = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.sheetPaper}>
      <TopBox />

      <br></br>

      <Box display="flex" justifyContent="space-evenly">
        <ACSpeedHPInit />
        <SavingThrowsBox font={font} />
      </Box>

      <br />

      <AbilityScores />

      <MUIDrawer />
    </Paper>
  );
};

export default CharacterSheet;
