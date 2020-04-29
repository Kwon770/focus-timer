import React from "react";
import useInput from "../../Hooks/useInput";
import useToggle from "../../Hooks/useToggle";
import SettingPresenter from "./SettingPresenter";

export default (props) => {
  // night mode > props / else > hooks (const)
  // time input > input / else > toggle

  // Load from local state
  const nightMode = useToggle(false);
  const autoStart = useToggle(false);
  const overCount = useToggle(false);
  const pomodoro = useToggle(false);
  const focusTimeInput = useInput(0);
  const shortBreakTimeInput = useInput(0);
  const longBreakTimeInput = useInput(0);
  //

  // ChangeNightMode

  return (
    <>
      <SettingPresenter
        nightMode={nightMode}
        autoStart={autoStart}
        overCount={overCount}
        pomodoro={pomodoro}
        focusTimeInput={focusTimeInput}
        shortBreakTimeInput={shortBreakTimeInput}
        longBreakTimeInput={longBreakTimeInput}
      />
    </>
  );
};
