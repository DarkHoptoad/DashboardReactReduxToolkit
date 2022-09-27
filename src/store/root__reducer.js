import { combineReducers } from "redux";
import { positionsReducer } from "./positions/positions_reducer";
import { filterReducer } from "./filters/filters_reducer";

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filterReducer,
});
