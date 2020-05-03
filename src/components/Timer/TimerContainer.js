import React from "react";
import useSet from "../../Hooks/useSet";
import TimerPresenter from "./TimerPresenter";

export default ({
  isMenu,
  isPomodoro,
  isAutoStart,
  isOverCount,
  isFocus,
  focusTime,
  shortBreakTime,
  longBreakTime,
  toggleIsFocus,
  changeIsStudy,
  ApplyTheme,
  addFocusedTime,
}) => {
  const ConvertToTimeFormat = (number) => {
    if (number < 10 && number > -10) return "0" + String(Math.abs(number));
    else return String(Math.abs(number));
  };

  const intervalTimer = useSet(null);
  const minute = useSet(ConvertToTimeFormat(focusTime));
  const second = useSet("00");
  const sets = useSet([]);

  const ClearSets = () => {
    sets.setValue([]);
  };

  const SetTimer = (min, sec) => {
    minute.setValue(ConvertToTimeFormat(min));
    second.setValue(ConvertToTimeFormat(sec));
  };

  const StartTimer = () => {
    if (intervalTimer != null) return;

    let time = parseInt(minute) * 60 + parseInt(second);
    const timer = setInterval(() => {
      const min = time < 0 ? Math.ceil(time / 60) : Math.floor(time / 60);
      const sec = time % 60;
      SetTimer(min, sec);

      if (time < 0) minute.setValue("-" + minute);

      time--;

      if (time < 0 && (!isOverCount || !isFocus)) {
        // timeout event
        clearInterval(timer);
        intervalTimer.setValue(null);
        FinishTimer();
      }
    }, 1000);
    intervalTimer.setValue(timer);
    changeIsStudy(true);
  };

  const RemoveTimer = () => {
    clearInterval(intervalTimer);
    intervalTimer.setValue(null);
    // lively ;;
    addFocusedTime(focusTime - minute.value);
    //
    changeIsStudy(false);
  };

  const FinishTimer = () => {
    if (isFocus) {
      // Finish focus
      sets.setValue(sets.value.push([]));

      toggleIsFocus();
      changeIsStudy(false);
      addFocusedTime(focusTime);
      SetTimer(GetBreakTime(sets.value), 0);
    } else {
      // Finish break
      toggleIsFocus();
      SetTimer(focusTime, 0);
    }

    if (isAutoStart) {
      StartTimer();
    }
    ApplyTheme();
  };

  const GetBreakTime = (_sets = sets.value) => {
    if (isPomodoro) {
      if (_sets.length % 4 === 0) return longBreakTime;
      else return shortBreakTime;
    } else {
      if (_sets.length % 2 === 0) return longBreakTime;
      else return shortBreakTime;
    }
  };

  return (
    <TimerPresenter
      minute={minute.value}
      second={second.value}
      sets={sets.value}
      isMenu={isMenu}
      isFocus={isFocus}
      focusTime={focusTime}
      StartTimer={StartTimer}
      RemoveTimer={RemoveTimer}
      SetTimer={SetTimer}
    />
  );
};
