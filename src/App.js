import React, { Component } from "react";
import styled from "styled-components";
import DigitalTimer from "./components/DigitalTimer";
import TimeTimer from "./components/TimeTimer";
import SettingButton from "./components/SettingButton";
import SettingPanel from "./components/SettingPanel";
import ToDoButton from "./components/ToDoButton";
import ToDoPanel from "./components/ToDoPanel";

export default class App extends Component {
  state = {
    isSettingClick: false,
    isCustom: false,
    isAutoStart: false,
    isOverCount: false,
    isDigital: true,
    focusTime: 50,
    shortBreakTime: 10,
    longBreakTime: 30,
    isToDoClick: false,
    curDo: "Code",
    toDos: {},
    isBreak: false,
    isFocus: false,
    isPlayerClick: false,
    todaySet: 1
  };

  _toggleToDo = () => {
    this.setState({ isToDoClick: !this.state.isToDoClick });
  };
  _toggleSetting = () => {
    this.setState({ isSettingClick: !this.state.isSettingClick });
  };
  _pressTimeTimer = () => {
    this.setState({ isDigital: false });
  };
  _pressDigitalTimer = () => {
    this.setState({ isDigital: true });
  };
  _pressPomo = () => {
    this.setState({ isCustom: false });
  };
  _pressCustom = () => {
    this.setState({ isCustom: true });
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
            isSettingClick={isSettingClick}
            isToDoClick={isToDoClick}
            isCustom={isCustom}
            focusTime={focusTime}
            shortBreakTime={shortBreakTime}
            longBreakTime={longBreakTime}
          />
        ) : (
          ""
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
