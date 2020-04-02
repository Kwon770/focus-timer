import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import PieChart from "react-minimal-pie-chart";
import PlayerPreview from "./PlayerPreview";
import TodaySetCounter from "../TodaySetCounter";

export default class TimerPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: true,
      intervalTimer: null,
      minute: this.ConvertToTimeFormat(this.props.focusTime),
      second: "02",
      sets: []
    };
  }

  render() {
    const { minute, second, sets, isFocus } = this.state;
    const { isSettingClick, isToDoClick } = this.props;
    return (
      <Main isMenu={isSettingClick || isToDoClick} isFocus={isFocus}>
        <TimerContainer>
          <TodaySetCounter sets={sets} />
            <PieChart 
            data={[{ title: "ne", value: 10, color: "#ffffff" }, { title: "one", value: 90, color: "#e74c3c" }]} 
            startAngle={-90}
            //   viewBoxSize={[1000, 1000]}
            />
          <PlayerPreview />
        </TimerContainer>
        <TimerBtnContainer></TimerBtnContainer>
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
        second: this.ConvertToTimeFormat(sec)
      });
      if (time < 0) this.setState({ minute: "-" + this.state.minute });

      time--;

      if (time < 0 && (!this.props.isOverCount || !this.state.isFocus)) {
        clearInterval(timer);
        // timeout event
        this.setState({ intervalTimer: null });
        this.FinishTimer();
      }
    }, 1000);
    this.setState({ intervalTimer: timer });
  };

  SetTimer = (min, sec) => {
    this.setState({
      minute: this.ConvertToTimeFormat(min),
      second: this.ConvertToTimeFormat(sec)
    });
  };

  RemoveTimer = () => {
    clearInterval(this.state.intervalTimer);
    this.setState({ intervalTimer: null });
  };

  FinishTimer = () => {
    if (this.state.isFocus) {
      // Finish focus
      let newSets = [];
      newSets.push(1);
      this.state.sets.map(set => newSets.push(set));

      const min = this.SetBreakRoutine(newSets);

      this.setState({
        isFocus: false,
        sets: newSets
      });
      this.SetTimer(min, 1);
    } else {
      // Finish break
      this.setState({
        isFocus: true
      });
      this.SetTimer(this.props.focusTime, 2);
    }

    if (this.props.isAutoStart) {
      this.StartTimer();
    }
  };

  SetBreakRoutine = (sets = this.state.sets) => {
    if (this.props.isCustom) {
      if (sets.length % 2 === 0) return this.props.longBreakTime;
      else return this.props.shortBreakTime;
    } else {
      if (sets.length % 4 === 0) return this.props.longBreakTime;
      else return this.props.shortBreakTime;
    }
  };

  ConvertToTimeFormat = number => {
    if (number < 10 && number > -10) return "0" + String(Math.abs(number));
    else return String(Math.abs(number));
  };

  _handlePlay = () => {
    // this.setState({ timerState: true });
    this.StartTimer();
  };
  _handlePause = () => {
    this.RemoveTimer();
  };
  _handleStop = () => {
    this.RemoveTimer();
    this.setState({
      minute: this.ConvertToTimeFormat(this.props.focusTime),
      second: "00"
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
  background-color: ${props =>
    props.isFocus ? "#bdc3c7" : "linear-gradient(to right, #2193b0, #6dd5ed)"};
  ${props => (props.isMenu ? "filter: blur(3px)" : "")};
  ${props => (props.isMenu ? "-webkit-filter: blur(3px)" : "")};
`;
