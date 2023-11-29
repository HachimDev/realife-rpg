import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IexperienceData } from "../../utils/interfaces";

interface CharacterState {
  name: string;
  stamina: number;
  experience: IexperienceData;
}

const initialState: CharacterState = {
  name: "Hachim",
  stamina: 100,
  experience: {
    level: 1,
    currentExp: 0,
    expToNextLevel: 150,
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
  },
});

export const { setName, setHealth, addExperience } = characterSlice.actions;

export default characterSlice.reducer;
