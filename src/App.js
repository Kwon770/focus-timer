import React, { Component } from "react";
import styled, { ThemeProvider, ThemeConsumer } from "styled-components";
import { breakDark, focusDark, breakLight, focusLight } from "./theme";
import Timer from "./components/Timer";
import SettingButton from "./components/SettingButton";
import SettingPanel from "./components/SettingPanel";
import ToDosButton from "./components/ToDos/ToDosButton";
import ToDosPanel from "./components/ToDos";

const OPTIONS_LS = "optionsLocalStorage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.Timer = React.createRef();
    // load saved data and apply time setting
    this.loadToDo();
    this.loadOption();
  }

  state = {
    theme: focusLight,
    isSettingClick: false,
    isPlayerClick: false,
    isToDoClick: false,
    isFocus: true,
    // ToDos
    curDo: null,
    curDoId: null,
    toDos: [
      {
        id: 1,
        isButton: false,
        isSelected: false,
        isEdit: false,
        name: "Coding",
        time: 180,
        isDone: true,
      },
      {
        id: 12,
        isButton: false,
        isSelected: false,
        isEdit: false,
        name: "Japanese",
        time: 120,
        isDone: true,
      },
      {
        id: 123,
        isButton: false,
        isSelected: false,
        isEdit: false,
        name: "English",
        time: 60,
        isDone: false,
      },
    ],
    // Options
    isDarkMode: false,
    isCustom: false,
    isAutoStart: false,
    isOverCount: false,
    focusTime: 25,
    shortBreakTime: 5,
    longBreakTime: 30,
  };

  saveToDo = () => {};

  loadToDo = () => {};

  setCurDo = (curDo) => {
    this.setState({ curDo: curDo });
  };

  changeToDos = (newToDos) => {
    this.setState({ toDos: newToDos });
  };

  saveOption = () => {
    const optionValue = {};
    optionValue["isDarkMode"] = this.state.isDarkMode;
    optionValue["isCustom"] = this.state.isCustom;
    optionValue["isAutoStart"] = this.state.isAutoStart;
    optionValue["isOverCount"] = this.state.isOverCount;
    optionValue["focusTime"] = this.state.focusTime;
    optionValue["shortBreakTime"] = this.state.shortBreakTime;
    optionValue["longBreakTime"] = this.state.longBreakTime;
    localStorage.setItem(OPTIONS_LS, JSON.stringify(optionValue));
  };

  loadOption = () => {
    const loadedOptions = localStorage.getItem(OPTIONS_LS);
    if (loadedOptions !== null) {
      const parsedOptions = JSON.parse(loadedOptions);
      this.state.isDarkMode = parsedOptions["isDarkMode"];
      this.state.isCustom = parsedOptions["isCustom"];
      this.state.isAutoStart = parsedOptions["isAutoStart"];
      this.state.isOverCount = parsedOptions["isOverCount"];
      this.state.focusTime = parsedOptions["focusTime"];
      this.state.shortBreakTime = parsedOptions["shortBreakTime"];
      this.state.longBreakTime = parsedOptions["longBreakTime"];
    }
  };

  applyTheme = () => {
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

  _toggleToDo = () => {
    this.setState({ isToDoClick: !this.state.isToDoClick });
  };
  _toggleSetting = () => {
    // When panel is closing
    if (this.state.isSettingClick) {
      if (this.state.isFocus) {
        this.Timer.current.SetTimer(this.state.focusTime, 0);
      } else {
        this.Timer.current.SetTimer(this.Timer.current.GetBreakTime(), 0);
      }
      this.saveOption();
    }
    this.setState({ isSettingClick: !this.state.isSettingClick });
  };
  _applyTimeSetting = (focus, shortBreak, longBreak) => {
    this.setState({
      focusTime: focus,
      shortBreakTime: shortBreak,
      longBreakTime: longBreak,
    });
  };
  _toggleIsFocus = () => {
    this.setState({ isFocus: !this.state.isFocus });
  };
  _toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode }, () =>
      this.applyTheme()
    );
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
        <Timer
          ref={this.Timer}
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
            applyTimeSetting={this._applyTimeSetting}
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
        {isToDoClick ? (
          <ToDosPanel
            setCurDo={this.setCurDo}
            changeToDos={this.changeToDos}
            toDos={this.state.toDos}
          />
        ) : (
          ""
        )}
        <ButtonConatiner>
          <ToDosButton
            curDo={curDo}
            toggleToDo={this._toggleToDo}
            isFocus={this.state.isFocus}
          />
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
  top: 15px;
  height: 50px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
