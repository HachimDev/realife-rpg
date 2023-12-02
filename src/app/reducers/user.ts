import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/interfaces";

const initialState: IUser = {
  id: "1",
  username: "Hachim",
  email: "hachim@test.com",
  character: {
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
  },
};

const characterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.character.name = action.payload;
    },
    setHealth: (state, action: PayloadAction<number>) => {
      state.character.stamina = action.payload;
    },
    addExperience: (state, action: PayloadAction<number>) => {
      state.character.experience.currentExp += action.payload;
      if (state.character.experience.currentExp >= state.character.experience.expToNextLevel) {
        state.character.experience.currentExp -= state.character.experience.expToNextLevel;
        state.character.experience.level += 1;
        let NextLevel = state.character.experience.expToNextLevel;
        NextLevel += state.character.experience.level * Math.sqrt(NextLevel) + NextLevel / 10;
        NextLevel = Math.ceil(NextLevel / 10) * 10;
        state.character.experience.expToNextLevel = NextLevel;
      }
    },
    addGold: (state, action: PayloadAction<number>) => {
      state.character.gold += action.payload;
    },
  },
});

export const { setName, setHealth, addExperience, addGold } = characterSlice.actions;

export default characterSlice.reducer;
