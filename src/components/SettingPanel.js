import React from "react";
import styled from "styled-components";
import useInput from "@rooks/use-input";

export default function SettingPanel(props) {
  const {
    isDarkMode,
    isCustom,
    isAutoStart,
    isOverCount,
    focusTime,
    shortBreakTime,
    longBreakTime,
    toggleSetting,
    applyTimeSetting,
    toggleDarkMode,
    pressPomo,
    pressCustom,
    toggleAutoStart,
    toggleOverCount,
  } = props;
  const focusTimeInput = useInput(focusTime, {
    validate: (newVal) => newVal.length <= 2,
  });
  const shortBreakTimeInput = useInput(shortBreakTime, {
    validate: (newVal) => newVal.length <= 2,
  });
  const longBreakTimeInput = useInput(longBreakTime, {
    validate: (newVal) => newVal.length <= 2,
  });
  const applySetting = () => {
    applyTimeSetting(
      focusTimeInput.value,
      shortBreakTimeInput.value,
      longBreakTimeInput.value
    );
    // toggleSetting();
  };
  return (
    <Panel>
      <ButtonColumn>
        <ButtonConatiner>
          <Title>Clock Mode</Title>
          <SettingButton onClick={toggleDarkMode} DarkMode={isDarkMode}>
            Night Mode
            <SettingDescription Left>Dark UI for night</SettingDescription>
          </SettingButton>
        </ButtonConatiner>
        <ButtonConatiner>
          <Title>Time Mode</Title>
          <SettingButton onClick={pressPomo} Custom={!isCustom}>
            Pomodoro
            <SettingDescription>
              1 long focus after 4 short focus with break
            </SettingDescription>
          </SettingButton>
          <SettingButton onClick={pressCustom} Custom={isCustom}>
            Custom
            <SettingDescription>Custom time set</SettingDescription>
          </SettingButton>
        </ButtonConatiner>
      </ButtonColumn>
      <ButtonColumn>
        <ButtonConatiner>
          <Title>Timer Mode</Title>
          <SettingButton onClick={toggleAutoStart} Auto={isAutoStart}>
            Timer Auto Start
            <SettingDescription Left>
              If focus or break is done, start next timer automatically
            </SettingDescription>
          </SettingButton>
          <SettingButton onClick={toggleOverCount} Over={isOverCount}>
            Over Counting
            <SettingDescription Left>
              If you don't press next Button, It will count time till you press
            </SettingDescription>
          </SettingButton>
        </ButtonConatiner>
        <ButtonConatiner>
          <Title>Time Setting</Title>
          <SettingButton input>
            Focus Time
            <TimeInput {...focusTimeInput} />
            <SettingDescription>
              Time to focus on what you do (minute)
            </SettingDescription>
          </SettingButton>
          <SettingButton input>
            Short break Time
            <TimeInput {...shortBreakTimeInput} />
            <SettingDescription>
              Short break time after repeated focus (minute)
            </SettingDescription>
          </SettingButton>
          <SettingButton input>
            Long Break Time
            <TimeInput {...longBreakTimeInput} />
            <SettingDescription>
              Long break time after 2 repeated focus (4 repeated with Pomodoro)
              (minute)
            </SettingDescription>
          </SettingButton>
        </ButtonConatiner>
      </ButtonColumn>
      <ApplyButton onClick={applySetting}>Apply</ApplyButton>
    </Panel>
  );
}

const ApplyButton = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.hlColor};
  color: ${(props) => props.theme.fontColor};
`;

const SettingDescription = styled.div`
  display: none;
  position: absolute;
  top: 0;
  ${(props) => (props.Left ? "right: 155px;" : "left: 155px;")}
  width: 200px;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.panelBgColor};
  color: ${(props) => props.theme.panelFontColor};
`;

const TimeInput = styled.input.attrs((props) => ({ type: `number` }))`
  width: 35px;
  margin-top: 6px;
  margin-bottom: 0;
  padding: 5px 0px;
  border: none;
  border-bottom: 1px solid #bdc3c7;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: ${(props) => props.theme.panelFontColor};
  background-color: ${(props) => props.theme.panelBgColor};
  &:focus {
    outline: none;
  }
`;

const SettingButton = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 119px;
  margin-bottom: ${(props) => (props.input ? "10px" : "23px")};
  font-weight: 300;
  color: ${(props) => props.theme.panelFontColor};
  color: ${(props) => (props.Custom ? props.theme.hlColor : "")};
  color: ${(props) => (props.DarkMode ? props.theme.hlColor : "")};
  color: ${(props) => (props.Auto ? props.theme.hlColor : "")};
  color: ${(props) => (props.Over ? props.theme.hlColor : "")};

  &:hover > ${SettingDescription} {
    display: block;
  }
`;

const Title = styled.h3`
  font-weight: 400;
  color: ${(props) => props.theme.panelFontColor};
`;

const ButtonConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonColumn = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Panel = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  height: 450px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.panelBgColor};
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
`;
