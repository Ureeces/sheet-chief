import React from "react";
import { Paper, Box, makeStyles, Button } from "@material-ui/core";
import { connect } from "react-redux";
import Axios from "axios";

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
    fontFamily: font.bree_serif,
  },
});

const CharacterSheet = (props) => {
  const classes = useStyles();

  const handleSubmit = () => {
    const temp = JSON.parse(localStorage.getItem("jwtToken"));
    const id = temp.id;
    Axios.post(
      process.env.REACT_APP_MONGODB_URL + "/character/create-character/" + id,
      props.character
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    props.setOpenSheet(false);
  };

  return (
    <Paper className={classes.sheetPaper}>
      <TopBox changeCharDetail={props.changeCharDetail} />

      <br></br>

      <Box display="flex" justifyContent="space-evenly" margin="auto">
        <ACSpeedHPInit changeCharDetail={props.changeCharDetail} />
        <SavingThrowsBox font={font} />
      </Box>

      <br />

      <AbilityScores changeCharDetail={props.changeCharDetail} />

      <br></br>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Create my Character!
      </Button>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCharDetail: (property, newValue) => {
      dispatch({
        type: "CHANGE_CHARACTER_DETAIL",
        changedProperty: property,
        newValue: newValue,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);
