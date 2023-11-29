import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quest } from "../../utils/interfaces";

interface QuestsState {
  quests: Quest[];
}

const initialState: QuestsState = {
  quests: [
    {
      id: 1,
      title: "Quest 1",
      description: "This is a quest description",
      completed: false,
      isDaily: false,
      isWeekly: false,
      expirationDate: new Date(),
      rewards: { experience: 100 },
    },
    {
      id: 2,
      title: "Quest 2",
      description: "This is a quest description",
      completed: false,
      isDaily: false,
      isWeekly: false,
      expirationDate: new Date(),
      rewards: { experience: 100, gold: 10 },
    },
    {
      id: 3,
      title: "Quest 3",
      description: "This is a quest description",
      completed: false,
      isDaily: false,
      isWeekly: false,
      expirationDate: new Date(),
      rewards: { experience: 100 },
    },
  ],
};

const questsSlice = createSlice({
  name: "quests",
  initialState,
  reducers: {
    addQuest: (state, action: PayloadAction<Quest>) => {
      state.quests.push(action.payload);
    },
    completeQuest: (state, action: PayloadAction<number>) => {
      const quest = state.quests.find((q) => q.id === action.payload);
      if (quest) {
        quest.completed = true;
      }
    },
  },
});

export const { addQuest, completeQuest } = questsSlice.actions;

export default questsSlice.reducer;
