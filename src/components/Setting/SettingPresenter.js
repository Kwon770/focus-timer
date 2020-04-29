import React from "react";
import styled from "styled-components";

export default function SettingPresenter({
  nightMode,
  autoStart,
  overCount,
  pomodoro,
  focusTimeInput,
  shortBreakTimeInput,
  longBreakTimeInput,
}) {
  return (
    <Panel>
      <ButtonColumn>
        <ButtonConatiner>
          <Title>Clock Mode</Title>
          <Button {...nightMode}>
            Night Mode
            <DescriptionPanel Left>Dark UI for night</DescriptionPanel>
          </Button>
        </ButtonConatiner>
        <ButtonConatiner>
          <Title>Time Mode</Title>
          <Button {...pomodoro}>
            Pomodoro
            <DescriptionPanel>
              1 long focus after 4 short focus with break
            </DescriptionPanel>
          </Button>
        </ButtonConatiner>
      </ButtonColumn>
      <ButtonColumn>
        <ButtonConatiner>
          <Title>Timer Mode</Title>
          <Button {...autoStart}>
            Timer Auto Start
            <DescriptionPanel Left>
              If focus or break is done, start next timer automatically
            </DescriptionPanel>
          </Button>
          <Button {...overCount}>
            Over Counting
            <DescriptionPanel Left>
              If you don't press next Button, It will count time till you press
            </DescriptionPanel>
          </Button>
        </ButtonConatiner>
        <ButtonConatiner>
          <Title>Time Setting</Title>
          <Button input>
            Focus Time
            <TimeInput {...focusTimeInput} />
            <DescriptionPanel>
              Time to focus on what you do (minute)
            </DescriptionPanel>
          </Button>
          <Button input>
            Short break Time
            <TimeInput {...shortBreakTimeInput} />
            <DescriptionPanel>
              Short break time after repeated focus (minute)
            </DescriptionPanel>
          </Button>
          <Button input>
            Long Break Time
            <TimeInput {...longBreakTimeInput} />
            <DescriptionPanel>
              Long break time after 2 repeated focus (4 repeated with Pomodoro)
              (minute)
            </DescriptionPanel>
          </Button>
        </ButtonConatiner>
      </ButtonColumn>
    </Panel>
  );
}

const DescriptionPanel = styled.div`
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
`;

const Button = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 119px;
  margin-bottom: ${(props) => (props.input ? "10px" : "23px")};
  font-weight: 300;
  color: ${(props) =>
    props.value ? props.theme.hlColor : props.theme.panelFontColor};

  &:hover > ${DescriptionPanel} {
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
