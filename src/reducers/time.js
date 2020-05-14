const SET_TIMER = "SET_TIMER";
const TIME = "time";

export const setTimer = (tm) => {
  return {
    type: SET_TIMER,
    tm,
  };
};

export function time(
  state = localStorage.getItem(TIME) === null
    ? 0
    : JSON.parse(localStorage.getItem(TIME)),
  action
) {
  switch (action.type) {
    case SET_TIMER:
      state = action.tm;
      localStorage.setItem(TIME, JSON.stringify(state));
      return state;
    default:
      return state;
  }
}
