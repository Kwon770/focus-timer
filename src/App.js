import React, { Component } from "react";
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
    isDigital: false,
    focusTime: 50,
    shortBreakTime: 10,
    longBreakTime: 30,
    isToDoClick: false,
    curDo: 123456789,
    toDos: {},
    isBreak: false,
    isFocus: false,
    isPlayerClick: false
  };

  _toggleToDo = () => {};
  _toggleSetting = () => {};

  render() {
    return (
      <>
        <ToDoButton curDo={this.state.curDo} toggleToDo={this._toggleToDo} />
        <SettingButton
          isSettingClick={this.state.isSettingClick}
          toggleSetting={this._toggleSetting}
        />
        {isSettingClick ? <SettingPanel /> : ""}
        {isToDoClick ? <ToDoPanel /> : ""}
        {isDigital ? <DigitalTimer /> : ""}
      </>
    );
  }
}
