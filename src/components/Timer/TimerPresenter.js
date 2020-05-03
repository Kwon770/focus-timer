import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faStopCircle,
} from "@fortawesome/free-solid-svg-icons";
import TodaySetCounter from "./TodaySetCounter";

export default ({
  minute,
  second,
  sets,
  isFocus,
  isMenu,
  focusTime,
  StartTimer,
  RemoveTimer,
  SetTimer,
}) => {
  const HandlePlay = () => {
    StartTimer();
  };

  const HandlePause = () => {
    RemoveTimer();
  };

  const HandleStop = () => {
    // focusTime int
    RemoveTimer();
    SetTimer(focusTime, 0);
  };

  return (
    <Main isMenu={isMenu} isFocus={isFocus}>
      <TimerWrapper>
        <TodaySetCounter sets={sets} />
        <DigitalTimer>{minute}</DigitalTimer>
        <DigitalTimer>
          '<DigitalTimerDot>'</DigitalTimerDot>
        </DigitalTimer>
        <DigitalTimer>{second}</DigitalTimer>
      </TimerWrapper>
      <TimerButtonWrapper>
        <TimerButton onClick={HandlePlay}>
          <FontAwesomeIcon icon={faPlayCircle} size="5x" color="white" />
        </TimerButton>
        <TimerButton onClick={HandlePause}>
          <FontAwesomeIcon icon={faPauseCircle} size="5x" color="white" />
        </TimerButton>
        <TimerButton onClick={HandleStop}>
          <FontAwesomeIcon icon={faStopCircle} size="5x" color="white" />
        </TimerButton>
      </TimerButtonWrapper>
    </Main>
  );
};

const TimerButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const TimerButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  margin: 0px 15px;
`;

const DigitalTimer = styled.span`
  color: white;
  font-size: 140px;
  font-weight: 300;
  position: relative;
`;

const DigitalTimerDot = styled.span`
  color: white;
  font-size: 140px;
  font-weight: 300;
  position: absolute;
  top: 65px;
  left: 0;
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.isFocus ? props.theme.bgFocusColor : props.theme.bgBreakColor};
  ${(props) => (props.isMenu ? "filter: blur(3px)" : "")};
  ${(props) => (props.isMenu ? "-webkit-filter: blur(3px)" : "")};
`;
