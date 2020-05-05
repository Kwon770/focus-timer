const SET_TIMER = "SET_TIMER";
const SET_MINUTE = "SET_MINUTE";
const SET_SECOND = "SET_SECOND";

export const setTimer = (min, sec) => {
  return {
    type: SET_TIMER,
    min,
    sec,
  };
};

export const setMinute = (min) => {
  return {
    type: SET_MINUTE,
    min,
  };
};

export const setSecond = (sec) => {
  return {
    type: SET_SECOND,
    sec,
  };
};

export function time(state = { minute: 0, second: 0 }, action) {
  switch (action.type) {
    case SET_TIMER:
      return { minute: action.min, second: action.sec };
    default:
      return state;
  }
}
