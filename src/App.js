import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { breakDark, focusDark, breakLight, focusLight } from "./theme";
import DigitalTimer from "./components/DigitalTimer";
import SettingButton from "./components/SettingButton";
import SettingPanel from "./components/SettingPanel";
import ToDoButton from "./components/ToDoButton";
import ToDoPanel from "./components/ToDoPanel";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.digitalTimer = React.createRef();
  }

  state = {
    isSettingClick: false,
    theme: focusLight,
    isDarkMode: false,
    isCustom: true,
    isAutoStart: false,
    isOverCount: false,
    focusTime: 0,
    shortBreakTime: 0,
    longBreakTime: 0,
    isToDoClick: false,
    curDo: "Code",
    toDos: {},
    isFocus: true,
    isPlayerClick: false,
    todaySet: 1,
  };

  _toggleToDo = () => {
    this.setState({ isToDoClick: !this.state.isToDoClick });
  };
  _toggleSetting = () => {
    this.setState({ isSettingClick: !this.state.isSettingClick });
    // Apply new time
    if (this.state.isSettingClick) {
      if (this.digitalTimer.current.state.isFocus) {
        this.digitalTimer.current.SetTimer(this.state.focusTime, 0);
      } else {
        this.digitalTimer.current.SetTimer(
          this.digitalTimer.current.SetBreakRoutine(),
          0
        );
      }
    }
  };
  _toggleIsFocus = () => {
    this.setState({ isFocus: !this.state.isFocus });
  };
  _toggleDarkMode = () => {
    console.log(this.state.isDarkMode);
    this.setState({ isDarkMode: !this.state.isDarkMode });
    console.log(this.state.isDarkMode);
    this.applyTheme();
  };
  applyTheme = () => {
    console.log(this.state.isDarkMode + " / " + this.state.isFocus);
    this.setState({
      theme: this.state.isDarkMode
        ? this.state.isFocus
          ? focusDark
          : breakDark
        : this.state.isFocus
        ? focusLight
        : breakLight,
    });
  };
  _pressPomo = () => {
    this.setState({
      isCustom: false,
      focusTime: 25,
      shortBreakTime: 5,
      longBreakTime: 30,
    });
  };
  _pressCustom = () => {
    this.setState({
      isCustom: true,
      focusTime: 50,
      shortBreakTime: 10,
      longBreakTime: 30,
    });
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
      theme,
      isToDoClick,
      isDarkMode,
      isAutoStart,
      isOverCount,
      toDos,
      isCustom,
      focusTime,
      shortBreakTime,
      longBreakTime,
      isFocus,
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <DigitalTimer
          ref={this.digitalTimer}
          isSettingClick={isSettingClick}
          isToDoClick={isToDoClick}
          isDarkMode={isDarkMode}
          isCustom={isCustom}
          isAutoStart={isAutoStart}
          isOverCount={isOverCount}
          focusTime={focusTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}
          isFocus={isFocus}
          toggleIsFocus={this._toggleIsFocus}
          applyTheme={this.applyTheme}
        />
        {isSettingClick ? (
          <SettingPanel
            toggleSetting={this._toggleSetting}
            toggleDarkMode={this._toggleDarkMode}
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
        <ButtonConatiner>
          <ToDoButton curDo={curDo} toggleToDo={this._toggleToDo} />
          <SettingButton
            isSettingClick={isSettingClick}
            toggleSetting={this._toggleSetting}
          />
        </ButtonConatiner>
      </ThemeProvider>
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
