import { combineReducers } from "@reduxjs/toolkit";
import CharacterSlice from "./reducers/CharacterSlice";
import QuestsSlice from "./reducers/QuestsSlice";

const rootReducer = combineReducers({
  character: CharacterSlice,
  quests: QuestsSlice,
});

export default rootReducer;
