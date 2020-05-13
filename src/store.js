import { createStore, combineReducers } from "redux";
import { time, setTimer, setSecond } from "./Reducers/time";
import { sets, addSet, clearSets } from "./Reducers/sets";

const store = createStore(combineReducers({ time, sets }));

export const actionCreators = {
  setTimer,
  setSecond,
  addSet,
  clearSets,
};

export default store;
