import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import PlayerPreview from "./PlayerPreview";
import TodaySetCounter from "./TodaySetCounter";

export default class TimerPresenter extends React.Component {
  state = {
    intervalTimer: () => {},
    minute: "1",
    second: "1",
    sets: []
  };
  render() {
    const { minute, second, sets } = this.state;
    const { isSettingClick, isToDoClick } = this.props;
    return (
      <Main isMenu={isSettingClick || isToDoClick}>
        <TimerContainer>
          <TodaySetCounter sets={sets} />
          <DigitalTimer>{minute}</DigitalTimer>
          <DigitalTimer>
            '<DigitalTimerDot>'</DigitalTimerDot>
          </DigitalTimer>
          <DigitalTimer>{second}</DigitalTimer>
          <PlayerPreview />
        </TimerContainer>
        <TimerBtnContainer>
          <TimerBtn onClick={this._handlePlay}>
            <FontAwesomeIcon icon={faPlay} size="5x" color="white" />
          </TimerBtn>
          <TimerBtn onClick={this._handlePause}>
            <FontAwesomeIcon icon={faPause} size="5x" color="white" />
          </TimerBtn>
          <TimerBtn onClick={this._handleStop}>
            <FontAwesomeIcon icon={faStop} size="5x" color="white" />
          </TimerBtn>
        </TimerBtnContainer>
      </Main>
    );
  }
  SetTimer = () => {
    let time = parseInt(this.state.minute) * 60 + parseInt(this.state.second);
    const timer = setInterval(() => {
      const min =
        time / 60 < 10 ? "0" + Math.floor(time / 60) : Math.floor(time / 60);
      const sec = time % 60 < 10 ? "0" + (time % 60) : time % 60;
      this.setState({ minute: String(min), second: String(sec) });

      time--;

      if (time <= 0) {
        clearInterval(timer);
        // timeout event
      }
    }, 1000);
    this.setState({ intervalTimer: timer });
  };
  RemoveTimer = () => {
    clearInterval(this.state.intervalTimer);
  };
  _handlePlay = () => {
    this.setState({ timerState: true });
    this.SetTimer();
  };
  _handlePause = () => {
    this.RemoveTimer();
  };
  _handleStop = () => {
    this.RemoveTimer();
  };
}

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
