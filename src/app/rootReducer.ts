import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./reducers/user";
import QuestsSlice from "./reducers/QuestsSlice";

const rootReducer = combineReducers({
  user: UserSlice,
  quests: QuestsSlice,
});

export default rootReducer;
