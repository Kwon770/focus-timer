import { createStore } from "redux";

const FOCUS = "FOCUS";
const CUSTOM = "CUSTOM";

const toggleFocus = bool => {
  return {
    type: FOCUS,
    isFocus: bool
  };
};

const toggleCustom = bool => {
  return {
    type: CUSTOM,
    isCustom: bool
  };
};

export const actionCreators = {
  toggleFocus,
  toggleCustom
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FOCUS:
      return action.isFocus;
    case CUSTOM:
      return action.isCustom;
  }
};

const store = createStore(reducer);
export default store;
