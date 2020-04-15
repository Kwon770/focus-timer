import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import PlayerPreview from "./PlayerPreview";
import TodaySetCounter from "../TodaySetCounter";

export default class TimerPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalTimer: null,
      minute: this.ConvertToTimeFormat(this.props.focusTime),
      second: "00",
      sets: [[], []],
    };
  }

  render() {
    const { minute, second, sets } = this.state;
    const { isFocus, isSettingClick, isToDoClick } = this.props;
    return (
      <Main isMenu={isSettingClick || isToDoClick} isFocus={isFocus}>
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

  StartTimer = () => {
    if (this.state.intervalTimer != null) return;

    let time = parseInt(this.state.minute) * 60 + parseInt(this.state.second);
    const timer = setInterval(() => {
      const min = time < 0 ? Math.ceil(time / 60) : Math.floor(time / 60);
      const sec = time % 60;
      this.setState({
        minute: this.ConvertToTimeFormat(min),
        second: this.ConvertToTimeFormat(sec),
      });
      if (time < 0) this.setState({ minute: "-" + this.state.minute });

      time--;

      if (time < 0 && (!this.props.isOverCount || !this.state.isFocus)) {
        // timeout event
        clearInterval(timer);
        this.setState({ intervalTimer: null });
        this.FinishTimer();
      }
    }, 1000);
    this.setState({ intervalTimer: timer });
    this.props.changeIsStudy(true);
  };

  SetTimer = (min, sec) => {
    this.setState({
      minute: this.ConvertToTimeFormat(min),
      second: this.ConvertToTimeFormat(sec),
    });
  };

  RemoveTimer = () => {
    clearInterval(this.state.intervalTimer);
    this.props.addFocusedTime(this.props.focusTime - this.state.minute);
    this.props.changeIsStudy(false);
    this.setState({ intervalTimer: null });
  };

  FinishTimer = () => {
    if (this.props.isFocus) {
      // Finish focus
      let newSets = [];
      newSets.push(1);
      this.state.sets.map((set) => newSets.push(set));

      this.setState({
        sets: newSets,
      });
      this.props.toggleIsFocus();
      this.props.changeIsStudy(false);
      this.props.addFocusedTime(this.props.focusTime);
      this.SetTimer(this.GetBreakTime(newSets), 0);
    } else {
      // Finish break
      this.props.toggleIsFocus();
      this.SetTimer(this.props.focusTime, 0);
    }

    if (this.props.isAutoStart) {
      this.StartTimer();
    }
    this.props.applyTheme();
  };

  GetBreakTime = (sets = this.state.sets) => {
    if (this.props.isCustom) {
      if (sets.length % 2 === 0) return this.props.longBreakTime;
      else return this.props.shortBreakTime;
    } else {
      if (sets.length % 4 === 0) return this.props.longBreakTime;
      else return this.props.shortBreakTime;
    }
  };

  ConvertToTimeFormat = (number) => {
    if (number < 10 && number > -10) return "0" + String(Math.abs(number));
    else return String(Math.abs(number));
  };

  ClearSets = () => {
    this.setState({ sets: [] });
  };

  _handlePlay = () => {
    this.StartTimer();
  };
  _handlePause = () => {
    this.RemoveTimer();
  };
  _handleStop = () => {
    this.RemoveTimer();
    this.setState({
      minute: this.ConvertToTimeFormat(this.props.focusTime),
      second: "00",
    });
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
  background: ${(props) =>
    props.isFocus ? props.theme.bgFocusColor : props.theme.bgBreakColor};
  ${(props) => (props.isMenu ? "filter: blur(3px)" : "")};
  ${(props) => (props.isMenu ? "-webkit-filter: blur(3px)" : "")};
`;
