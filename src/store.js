import { createStore, combineReducers } from "redux";
import { time, setTimer, setMinute, setSecond } from "./reducers/time";
import { sets, addSet, clearSets } from "./reducers/sets";

const store = createStore(combineReducers({ time, sets }));

export const actionCreators = {
  setTimer,
  setMinute,
  setSecond,
  addSet,
  clearSets,
};

export default store;
