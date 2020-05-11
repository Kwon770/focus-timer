const ADD = "ADD";
const CLEAR = "CLEAR";
const LOAD = "LOAD";

export const addSet = () => {
  return {
    type: ADD,
  };
};

export const clearSets = () => {
  return {
    type: CLEAR,
  };
};

export const loadSets = () => {
  return {
    type: LOAD,
  };
};

export function sets(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, []];
    case CLEAR:
      return [];
    case LOAD:
      return;
    default:
      return state;
  }
}
