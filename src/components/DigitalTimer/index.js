import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import PlayerPreview from "./PlayerPreview";

export default class TimerPresenter extends React.Component {
  state = {
    isFocus: false,
    isMenuClick: false
  };
  render() {
    const { isMenuClick } = this.state;
    return (
      <Main isMenu={isMenuClick}>
        <MenuConatiner></MenuConatiner>
        <TimerContainer>
          <DigitalTimer>25</DigitalTimer>
          <DigitalTimer>
            '<DigitalTimerDot>'</DigitalTimerDot>
          </DigitalTimer>
          <DigitalTimer>00</DigitalTimer>
          <PlayerPreview />
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
      </Main>
    );
  }
}

const MenuConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -95px;
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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  ${props => (props.isMenu ? "filter: blur(3px);" : "")}
  ${props => (props.isMenu ? "-webkit-filter: blur(3px);" : "")}
`;
