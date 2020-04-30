import React from "react";
import useInput from "../../Hooks/useInput";
import useToggle from "../../Hooks/useToggle";
import SettingPresenter from "./SettingPresenter";

const NIGHT_MODE = "nightMode";
const AUTO_START = "autoStart";
const OVER_COUNT = "overCount";
const POMODORO = "pomodoro";
const FOCUS_TIME = "focusTime";
const SHORT_BREAK_TIME = "shortBreakTime";
const LONG_BREAK_TIME = "longBreakTime";

export default (props) => {
  // night mode > props / else > hooks (const)
  // time input > input / else > toggle

  const nightMode = useToggle(JSON.parse(localStorage.getItem(NIGHT_MODE)));
  const autoStart = useToggle(JSON.parse(localStorage.getItem(AUTO_START)));
  const overCount = useToggle(JSON.parse(localStorage.getItem(OVER_COUNT)));
  const pomodoro = useToggle(JSON.parse(localStorage.getItem(POMODORO)));
  const focusTime = useInput(JSON.parse(localStorage.getItem(FOCUS_TIME)));
  const shortBreakTime = useInput(
    JSON.parse(localStorage.getItem(SHORT_BREAK_TIME))
  );
  const longBreakTime = useInput(
    JSON.parse(localStorage.getItem(LONG_BREAK_TIME))
  );

  const ChangePomodoroTime = () => {
    // console.log("change > " + pomodoro.value);
    if (!pomodoro.value) {
      focusTime.onChange({ target: { value: 30 } });
      shortBreakTime.onChange({ target: { value: 5 } });
      longBreakTime.onChange({ target: { value: 15 } });
    }
  };

  const SaveOptions = () => {
    localStorage.setItem(NIGHT_MODE, JSON.stringify(nightMode.value));
    localStorage.setItem(AUTO_START, JSON.stringify(autoStart.value));
    localStorage.setItem(OVER_COUNT, JSON.stringify(overCount.value));
    localStorage.setItem(POMODORO, JSON.stringify(pomodoro.value));
    localStorage.setItem(FOCUS_TIME, JSON.stringify(focusTime.value));
    localStorage.setItem(
      SHORT_BREAK_TIME,
      JSON.stringify(shortBreakTime.value)
    );
    localStorage.setItem(LONG_BREAK_TIME, JSON.stringify(longBreakTime.value));
  };

  const ResetOptions = () => {
    if (nightMode.value) nightMode.onClick();
    if (autoStart.value) autoStart.onClick();
    if (overCount.value) overCount.onClick();
    if (!pomodoro.value) pomodoro.onClick();
    focusTime.onChange({ target: { value: 30 } });
    shortBreakTime.onChange({ target: { value: 5 } });
    longBreakTime.onChange({ target: { value: 15 } });
  };

  return (
    <>
      <SettingPresenter
        ChangePomodoroTime={ChangePomodoroTime}
        ResetOptions={ResetOptions}
        SaveOptions={SaveOptions}
        ToggleSettingPanel={props.ToggleSettingPanel}
        ToggleNightMode={props.ToggleNightMode}
        nightMode={nightMode}
        autoStart={autoStart}
        overCount={overCount}
        pomodoro={pomodoro}
        focusTime={focusTime}
        shortBreakTime={shortBreakTime}
        longBreakTime={longBreakTime}
      />
    </>
  );
};
