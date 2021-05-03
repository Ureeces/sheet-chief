const initialState = {
  character: {
    characterName: "",
    classLevel: "",
    playerName: "",
    race: "",
    alignment: "",
    background: "",
    strScore: "",
    dexScore: "",
    conScore: "",
    intScore: "",
    wisScore: "",
    chaScore: "",
    maxHP: "",
    currHP: "",
    speed: "",
    armorClass: "",
  },
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CHARACTER_DETAIL":
      let changedProperty = action.changedProperty;
      return {
        ...state,
        character: {
          ...state.character,
          [changedProperty]: action.newValue,
        },
      };

    default:
      return state;
  }
};

export default characterReducer;
