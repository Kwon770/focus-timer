import { createStore, combineReducers } from "redux";
import { time, setTimer } from "./Reducers/time";
import { sets, addSet, clearSets } from "./Reducers/sets";

const store = createStore(combineReducers({ time, sets }));

export const actionCreators = {
  setTimer,
  addSet,
  clearSets,
};

export default store;
