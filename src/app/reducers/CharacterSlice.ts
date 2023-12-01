import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../utils/interfaces";

const initialState: ICharacter = {
  name: "Hachim",
  stamina: 100,
  gold: 0,
  experience: {
    level: 1,
    currentExp: 0,
    expToNextLevel: 150,
  },
  attributes: {
    strength: 1,
    dexterity: 1,
    intelect: 1,
    charisma: 1,
    luck: 1,
  },
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setHealth: (state, action: PayloadAction<number>) => {
      state.stamina = action.payload;
    },
    addExperience: (state, action: PayloadAction<number>) => {
      state.experience.currentExp += action.payload;
      if (state.experience.currentExp >= state.experience.expToNextLevel) {
        state.experience.currentExp -= state.experience.expToNextLevel;
        state.experience.level += 1;
        let NextLevel = state.experience.expToNextLevel;
        NextLevel += state.experience.level * Math.sqrt(NextLevel) + NextLevel / 10;
        NextLevel = Math.ceil(NextLevel / 10) * 10;
        state.experience.expToNextLevel = NextLevel;
      }
    },
    addGold: (state, action: PayloadAction<number>) => {
      state.gold += action.payload;
    },
  },
});

export const { setName, setHealth, addExperience, addGold } = characterSlice.actions;

export default characterSlice.reducer;
