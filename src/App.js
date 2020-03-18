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
    const {
      curDo,
      isSettingClick,
      isToDoClick,
      isCustom,
      isDigital,
      isAutoStart,
      isOverCount,
      focusTime,
      shortBreakTime,
      longBreakTime,
      toDos
    } = this.state;
    return (
      <>
        <ToDoButton curDo={curDo} toggleToDo={this._toggleToDo} />
        <SettingButton
          isSettingClick={isSettingClick}
          toggleSetting={this._toggleSetting}
        />
        {isSettingClick ? <SettingPanel {...isCustom, isDigital, isAutoStart, isOverCount, focusTime, shortBreakTime, longBreakTime} /> : ""}
        {isToDoClick ? <ToDoPanel toDos={toDos} /> : ""}
        {isDigital ? <DigitalTimer /> : ""}
      </>
    );
  }
}
