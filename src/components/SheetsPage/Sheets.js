import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  makeStyles,
  Modal,
} from "@material-ui/core";
import Axios from "axios";

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

  characterBox: {
    border: "1px solid black",
    textAlign: "center",
    padding: "15px",
  },
});

const Sheets = (props) => {
  const classes = styles();
  const { history } = props;

  const [openSheet, setOpenSheet] = useState(false);
  const [charIDs, setCharIDs] = useState([]);
  const [characterList, setCharacterList] = useState([]);

  const fetchCharacterIDs = () => {
    let temp = JSON.parse(localStorage.getItem("jwtToken"));
    let id = temp.id;

    Axios.get(
      process.env.REACT_APP_MONGODB_URL +
        "/character/get-all-user-characters/" +
        id
    )
      .then((response) => {
        let tempIDs = response.data;
        setCharIDs(tempIDs);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const fetchCharacterList = () => {
    fetchCharacterIDs();

    console.log("character IDs:", charIDs);

    for (let currID of charIDs) {
      Axios.get(
        process.env.REACT_APP_MONGODB_URL +
          "/character/get-character-by-id/" +
          currID
      )
        .then((response) => {
          setCharacterList([...characterList, response.data]);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) {
      history.push("/");
    }
  }, []);

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

      <Button variant="contained" color="primary" onClick={fetchCharacterList}>
        Load Characters
      </Button>

      <br></br>

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
        onClick={() => setOpenSheet(true)}
      >
        Create a character!
      </Button>

      <Modal open={openSheet}>
        <CharacterSheet setOpenSheet={setOpenSheet} />
      </Modal>

      <Box>
        {characterList.map(({ characterName }) => {
          return <Box className={classes.characterBox}>{characterName}</Box>;
        })}
      </Box>

      <Box></Box>
    </Box>
  );
};

export default Sheets;
