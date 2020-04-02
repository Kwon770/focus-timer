import React, { Component } from "react";
import styled from "styled-components";
import DigitalTimer from "./components/DigitalTimer";
import TimeTimer from "./components/TimeTimer";
import SettingButton from "./components/SettingButton";
import SettingPanel from "./components/SettingPanel";
import ToDoButton from "./components/ToDoButton";
import ToDoPanel from "./components/ToDoPanel";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.digitalTimer = React.createRef();
    this.timeTimer = React.createRef();
  }

  state = {
    isSettingClick: false,
    isCustom: true,
    isAutoStart: false,
    isOverCount: false,
    isDigital: false,
    focusTime: 0,
    shortBreakTime: 0,
    longBreakTime: 0,
    isToDoClick: false,
    curDo: "Code",
    toDos: {},
    isBreak: false,
    isPlayerClick: false,
    todaySet: 1
  };

  _toggleToDo = () => {
    this.setState({ isToDoClick: !this.state.isToDoClick });
  };
  _toggleSetting = () => {
    this.setState({ isSettingClick: !this.state.isSettingClick });
    // Apply new time
    if (this.state.isSettingClick) {
      if (this.state.isDigital) {
        if (this.digitalTimer.current.state.isFocus) {
          this.digitalTimer.current.SetTimer(this.state.focusTime, 0);
        } else {
          this.digitalTimer.current.SetTimer(
            this.digitalTimer.current.SetBreakRoutine(),
            0
          );
        }
      } else {
        if (this.timeTimer.current.state.isFocus) {
          this.timeTimer.current.SetTimer(this.state.focusTime, 0);
        } else {
          this.timeTimer.current.SetTimer(
            this.timeTimer.current.SetBreakRoutine(),
            0
          );
        }
      }
    }
  };
  _pressTimeTimer = () => {
    this.setState({ isDigital: false });
  };
  _pressDigitalTimer = () => {
    this.setState({ isDigital: true });
  };
  _pressPomo = () => {
    this.setState({ isCustom: false });
    this.state.focusTime = 25;
    this.state.shortBreakTime = 5;
    this.state.longBreakTime = 30;
  };
  _pressCustom = () => {
    this.setState({ isCustom: true });
    this.state.focusTime = 50;
    this.state.shortBreakTime = 10;
    this.state.longBreakTime = 30;
  };
  _toggleAutoStart = () => {
    this.setState({ isAutoStart: !this.state.isAutoStart });
  };
  _toggleOverCount = () => {
    this.setState({ isOverCount: !this.state.isOverCount });
  };

  render() {
    const {
      curDo,
      isSettingClick,
      isToDoClick,
      isDigital,
      isAutoStart,
      isOverCount,
      toDos,
      isCustom,
      focusTime,
      shortBreakTime,
      longBreakTime
    } = this.state;
    return (
      <>
        <ButtonConatiner>
          <ToDoButton curDo={curDo} toggleToDo={this._toggleToDo} />
          <SettingButton
            isSettingClick={isSettingClick}
            toggleSetting={this._toggleSetting}
          />
        </ButtonConatiner>
        {isDigital ? (
          <DigitalTimer
            ref={this.digitalTimer}
            isSettingClick={isSettingClick}
            isToDoClick={isToDoClick}
            isCustom={isCustom}
            isAutoStart={isAutoStart}
            isOverCount={isOverCount}
            focusTime={focusTime}
            shortBreakTime={shortBreakTime}
            longBreakTime={longBreakTime}
          />
        ) : (
          <TimeTimer
            ref={this.timeTimer}
            isSettingClick={isSettingClick}
            isToDoClick={isToDoClick}
            isCustom={isCustom}
            isAutoStart={isAutoStart}
            isOverCount={isOverCount}
            focusTime={focusTime}
            shortBreakTime={shortBreakTime}
            longBreakTime={longBreakTime}
          />
        )}
        {isSettingClick ? (
          <SettingPanel
            toggleSetting={this._toggleSetting}
            pressTimeTimer={this._pressTimeTimer}
            pressDigitalTimer={this._pressDigitalTimer}
            pressPomo={this._pressPomo}
            pressCustom={this._pressCustom}
            toggleAutoStart={this._toggleAutoStart}
            toggleOverCount={this._toggleOverCount}
            focusTime={focusTime}
            shortBreakTime={shortBreakTime}
            longBreakTime={longBreakTime}
            {...this.state}
          />
        ) : (
          ""
        )}
        {isToDoClick ? <ToDoPanel toDos={toDos} /> : ""}
      </>
    );
  }
}

const ButtonConatiner = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -92.5px;
  top: 15px;
  width: 185px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
