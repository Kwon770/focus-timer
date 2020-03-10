import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faPen
} from "@fortawesome/free-solid-svg-icons";
import Store from "store";

const TimerPresenter = () => (
  <Container>
    <CurrentDo>
      <FontAwesomeIcon icon={faPen} style={{ marginRight: 10 }} />
      Code
    </CurrentDo>
    <TimerContainer>
      <DigitalTimer>25</DigitalTimer>
      <DigitalTimer>
        '<DigitalTimerDot>'</DigitalTimerDot>
      </DigitalTimer>
      <DigitalTimer>00</DigitalTimer>
      <PlayerPreview>Soup Asmr - Tokyo Cafe Asmr</PlayerPreview>
    </TimerContainer>
    <TimerBtnContainer>
      <TimerBtn>
        <FontAwesomeIcon icon={faPlay} size="4x" color="white" />
      </TimerBtn>
      <TimerBtn>
        <FontAwesomeIcon icon={faPause} size="4x" color="white" />
      </TimerBtn>
      <TimerBtn>
        <FontAwesomeIcon icon={faStop} size="4x" color="white" />
      </TimerBtn>
    </TimerBtnContainer>
  </Container>
);

const CurrentDo = styled.div`
  position: absolute;
  top: 20px;
  padding: 10px 20px;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #ff8f70;
`;

const TimerBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const TimerBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  margin: 0px 15px;
`;

const PlayerPreview = styled.div`
  position: absolute;
  top: 185px;
  width: 290px;
  margin-top: 0;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  text-align: center;
  color: white;
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

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
`;

export default TimerPresenter;
