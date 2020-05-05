import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faRedoAlt,
  faMoon,
  faAppleAlt,
  faStopwatch,
  faBurn,
} from "@fortawesome/free-solid-svg-icons";

export default ({
  ChangePomodoroTime,
  ResetOptions,
  SaveOptions,
  ToggleSettingPanel,
  ToggleNightMode,
  nightMode,
  autoStart,
  overCount,
  pomodoro,
  focusTime,
  shortBreakTime,
  longBreakTime,
}) => {
  return (
    <Panel>
      <TopButtonsWrapper>
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={async () => {
            await SaveOptions();
            ToggleSettingPanel();
          }}
        />
        <FontAwesomeIcon icon={faRedoAlt} onClick={ResetOptions} />
      </TopButtonsWrapper>
      <ButtonsWrapper>
        <ButtonsColumn>
          <ButtonWrapper>
            <Button
              value={nightMode.value}
              onClick={() => {
                ToggleNightMode();
                nightMode.onClick();
              }}
            >
              <FontAwesomeIcon icon={faMoon} />
            </Button>
            <ButtonTitle>night mode</ButtonTitle>
            <DescriptionPanel Left>Dark UI for night</DescriptionPanel>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              value={pomodoro.value}
              onClick={() => {
                pomodoro.onClick();
                ChangePomodoroTime();
              }}
            >
              <FontAwesomeIcon icon={faAppleAlt} />
            </Button>
            <ButtonTitle>pomodoro</ButtonTitle>
            <DescriptionPanel>
              1 long focus after 4 short focus with break
            </DescriptionPanel>
          </ButtonWrapper>
        </ButtonsColumn>
        <ButtonsColumn>
          <ButtonWrapper>
            <Button {...autoStart}>
              <FontAwesomeIcon icon={faStopwatch} />
            </Button>
            <ButtonTitle>auto start</ButtonTitle>
            <DescriptionPanel Left>
              If focus or break is done, start next timer automatically
            </DescriptionPanel>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button {...overCount}>
              <FontAwesomeIcon icon={faBurn} />
            </Button>
            <ButtonTitle>over count</ButtonTitle>
            <DescriptionPanel>
              If you don't press next Button, It will count time till you press
            </DescriptionPanel>
          </ButtonWrapper>
        </ButtonsColumn>
        <ButtonsColumn>
          <ButtonWrapper>
            <ButtonTitle>short break time</ButtonTitle>
            <TimeInput {...shortBreakTime} />
            <DescriptionPanel Left>
              Short break time after repeated focus (minute)
            </DescriptionPanel>
          </ButtonWrapper>
          <ButtonWrapper>
            <ButtonTitle>long break time</ButtonTitle>
            <TimeInput {...longBreakTime} />
            <DescriptionPanel>
              Long break time after 2 repeated focus (4 repeated with Pomodoro)
              (minute)
            </DescriptionPanel>
          </ButtonWrapper>
        </ButtonsColumn>
        <ButtonsColumn Single>
          <ButtonWrapper>
            <ButtonTitle>focus time</ButtonTitle>
            <TimeInput {...focusTime} />
            <DescriptionPanel Left>
              Time to focus on what you do (minute)
            </DescriptionPanel>
          </ButtonWrapper>
        </ButtonsColumn>
      </ButtonsWrapper>
    </Panel>
  );
};

const DescriptionPanel = styled.div`
  ${(props) => props.theme.panel}
  width: 200px;
  display: none;
  position: absolute;
  top: 0;
  ${(props) => (props.Left ? "right: 160px;" : "left: 160px;")}
  padding: 10px 20px;
`;

const TimeInput = styled.input.attrs({ type: `number` })`
  width: 50px;
  margin-top: 6px;
  margin-bottom: 0;
  padding: 5px 0px;
  border: none;
  border-bottom: 1px solid #7f8c8d;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: ${(props) => props.theme.panelFontColor};
  background-color: ${(props) => props.theme.panelBgColor};
`;

const Button = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 35px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.value ? props.theme.highLightColor : props.theme.lightDisabledColor};
  color: ${(props) =>
    props.value ? props.theme.panelBgColor : props.theme.darkDisabledColor};
`;

const ButtonTitle = styled.div`
  margin-top: 5px;
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  margin-bottom: 10px;

  &:hover > ${DescriptionPanel} {
    display: block;
  }
`;

const ButtonsColumn = styled.div`
  width: 100%;
  padding: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.Single ? "flex-start" : "space-around")};
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TopButtonsWrapper = styled.div`
  ${(props) => props.theme.topButtonsWrapper}
`;

const Panel = styled.div`
  ${(props) => props.theme.panel}
  width: 300px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -150px;
`;
