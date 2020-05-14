import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import useSet from "../../Hooks/useSet";
import TimerPresenter from "./TimerPresenter";

function TimerContainer({
  isMenu,
  isAutoStart,
  isOverCount,
  isFocus,
  focusTime,
  toggleIsFocus,
  changeIsProgress,
  applyTheme,
  addFocusedTime,
  getBreakTime,
  time,
  setTimer,
  sets,
  addSet,
}) {
  const intervalTimer = useSet(null);

  const startTimer = () => {
    if (intervalTimer.value != null) return;

    const timer = setInterval(() => {
      setTimer(time--);

      if (time < 0 && (!isOverCount || !isFocus)) {
        // timeout event
        clearInterval(timer);
        intervalTimer.setValue(null);
        finishTimer();
      }
    }, 1000);
    intervalTimer.setValue(timer);
    changeIsProgress(true);
  };

  const removeTimer = () => {
    clearInterval(intervalTimer.value);
    intervalTimer.setValue(null);
    if (isFocus) {
      // Change to apply lively ?
      addFocusedTime(focusTime - time.minute);
    }
    changeIsProgress(false);
  };

  const finishTimer = () => {
    if (isFocus) {
      // Finish focus
      addSet();

      toggleIsFocus();
      changeIsProgress(false);
      addFocusedTime(focusTime);
      setTimer(getBreakTime() * 60);
    } else {
      // Finish break
      toggleIsFocus();
      setTimer(focusTime * 60);
    }

    if (isAutoStart) {
      startTimer();
    }
    applyTheme();
  };

  return (
    <TimerPresenter
      time={time}
      sets={sets}
      isMenu={isMenu}
      isFocus={isFocus}
      focusTime={focusTime}
      startTimer={startTimer}
      removeTimer={removeTimer}
      setTimer={setTimer}
      getBreakTime={getBreakTime}
    />
  );
}

function mapStateToProps(state, ownProps) {
  return { time: state.time, sets: state.sets };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setTimer: (tm) => dispatch(actionCreators.setTimer(tm)),
    addSet: () => dispatch(actionCreators.addSet()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
