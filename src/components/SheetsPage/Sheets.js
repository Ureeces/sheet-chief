import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

import "../CharacterSheet/CharacterSheet";

import Image from "../../assets/backgrounds/parchment2.jpg";
import CharacterSheet from "../CharacterSheet/CharacterSheet";

const styles = makeStyles({
  searchBarContainer: {
    width: "40%",
  },

  parchmentBackground: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "1338px",
    mx: "auto",
    textAlign: "center",
  },

  title: {
    fontWeight: "bold",
    marginTop: "30px",
  },

  searchInput: {
    backgroundColor: "white",
    borderRadius: "35px",
  },

  spacing: {
    padding: "15px",
  },
});

const Sheets = (props) => {
  const classes = styles();

  const [openSheet, setOpenSheet] = useState(false);

  return (
    <Box className={classes.parchmentBackground} p={1}>
      <Typography
        variant="h1"
        className={`${classes.title} ${classes.spacing}`}
      >
        Sheet Chief
      </Typography>

      <Typography variant="h3" className={classes.spacing}>
        My Sheets
      </Typography>

      <TextField
        id="search-character"
        placeholder="Search for a character"
        variant="outlined"
        className={`${classes.searchBarContainer} ${classes.spacing}`}
        InputProps={{
          className: classes.searchInput,
        }}
      />

      <br></br>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px", marginBottom: "20px", padding: "15px" }}
        onClick={() => setOpenSheet(!openSheet)}
      >
        Create a character!
      </Button>

      {openSheet ? <CharacterSheet /> : null}

      <Box></Box>
    </Box>
  );
};

export default Sheets;
