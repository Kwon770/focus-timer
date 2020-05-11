const ADD = "ADD";
const CLEAR = "CLEAR";
const SETS = "sets";

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

export function sets(state = JSON.parse(localStorage.getItem(SETS)), action) {
  switch (action.type) {
    case ADD:
      const newSets = [...state, []];
      localStorage.setItem(SETS, JSON.stringify(newSets));
      return newSets;
    case CLEAR:
      localStorage.setItem(SETS, JSON.stringify([]));
      return [];
    default:
      return state;
  }
}
