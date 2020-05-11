import { createStore, combineReducers } from "redux";
import { time, setTimer, setMinute, setSecond } from "./Reducers/time";
import { sets, addSet, clearSets } from "./Reducers/sets";

const store = createStore(combineReducers({ time, sets }));

export const actionCreators = {
  setTimer,
  setMinute,
  setSecond,
  addSet,
  clearSets,
};

export default store;
