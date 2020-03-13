import { createStore } from "redux";

const FOCUS = "FOCUS";
const CUSTOM = "CUSTOM";
const DIGITAL = "DIGOTAL";
const AUTOSTART = "AUTOSTART";
const OVERCOUNT = "OVERCOUNT";

const pressFocus = bool => {
  return {
    type: FOCUS,
    isFocus: bool
  };
};

const pressCustom = bool => {
  return {
    type: CUSTOM,
    isCustom: bool
  };
};

const pressDigital = bool => {
  return {
    type: DIGITAL,
    isDigital: bool
  };
};

const toggleAutoStart = bool => {
  return {
    type: AUTOSTART,
    isAutoStart: !bool
  };
};

const toggleOverCount = bool => {
  return {
    type: OVERCOUNT,
    isOverCount: !bool
  };
};

export const actionCreators = {
  pressFocus,
  pressCustom,
  pressDigital,
  toggleAutoStart,
  toggleOverCount
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FOCUS:
      return action.isFocus;
    case CUSTOM:
      return action.isCustom;
    case DIGITAL:
      return action.isDigital;
    case AUTOSTART:
      return action.isAutoStart;
    case OVERCOUNT:
      return action.isOverCount;
  }
};

const store = createStore(reducer);
export default store;
