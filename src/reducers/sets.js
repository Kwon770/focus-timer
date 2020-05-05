const ADD = "ADD";
const CLEAR = "CLEAR";

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

export function sets(state = [], action) {
  switch (action.type) {
    case ADD:
      return state.push([]);
    case CLEAR:
      return [];
    default:
      return state;
  }
}
