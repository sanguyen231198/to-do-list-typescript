import { combineReducers } from "redux";
import { noteReducers } from "./noteReducers";
import searchReducers from "./searchReducers";

export const rootReducers = combineReducers({
  notes: noteReducers,
  search: searchReducers,
});
export type RootState = ReturnType<typeof rootReducers>;
