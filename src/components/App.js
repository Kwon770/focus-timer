import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { breakDark, focusDark, breakLight, focusLight } from "../Styles/theme";
import Timer from "./Timer";
import Player from "./Player/Player";
import PlayerButton from "./Player/PlayerButton";
import PlayerPanel from "./Player/PlayerPanel";
import SettingButton from "./Setting/SettingButton";
import Setting from "./Setting";
import ToDosButton from "./ToDos/ToDosButton";
import ToDosPanel from "./ToDos";

const TODOS_LS = "todosLocalStorage";
const NIGHT_MODE = "nightMode";
const AUTO_START = "autoStart";
const OVER_COUNT = "overCount";
const POMODORO = "pomodoro";
const FOCUS_TIME = "focusTime";
const SHORT_BREAK_TIME = "shortBreakTime";
const LONG_BREAK_TIME = "longBreakTime";

class App extends Component {
  constructor(props) {
    super(props);
    // load saved data and apply time setting
    this.loadToDos();
  }

  componentDidMount() {
    this.checkLastDate();
    this.ApplyTheme();
    this.loadTime();
  }

  state = {
    theme: focusLight,
    isFocus: true,
    isStudy: false,
    // Player
    isPlayerClick: false,
    isPlay: true,
    // ToDos
    isToDoClick: false,
    curDo: null,
    curDoId: null,
    toDos: [],
    // Settings
    isSettingClick: false,
    isNightMode: JSON.parse(localStorage.getItem(NIGHT_MODE)),
    isAutoStart: JSON.parse(localStorage.getItem(AUTO_START)),
    isOverCount: JSON.parse(localStorage.getItem(OVER_COUNT)),
    isPomodoro: JSON.parse(localStorage.getItem(POMODORO)),
    focusTime: JSON.parse(localStorage.getItem(FOCUS_TIME)),
    shortBreakTime: JSON.parse(localStorage.getItem(SHORT_BREAK_TIME)),
    longBreakTime: JSON.parse(localStorage.getItem(LONG_BREAK_TIME)),
  };

  playPrevSong = () => {};

  playNextSong = () => {};

  togglePlay = () => {
    this.setState({ isPlay: !this.state.isPlay });
  };

  togglePlayerButton = () => {
    this.setState({ isPlayerClick: !this.state.isPlayerClick });
  };

  checkLastDate = () => {
    const lastDate = localStorage.getItem("LastDate");
    const date = new Date();
    const todayDate = date.getMonth() + "." + date.getDate();
    if (lastDate !== todayDate) {
      let newToDos = [];
      this.state.toDos.map((toDo) => {
        toDo.todayTime = 0;
        toDo.isDone = false;
        newToDos.push(toDo);
      });
      this.reallocateToDos(newToDos);
      this.props.clearSets();
      localStorage.setItem("LocalDate", todayDate);
    }
  };

  saveToDos = () => {
    let savingToDos = [];
    this.state.toDos.map((toDo) => {
      if (toDo.isButton === false) savingToDos.push(toDo);
    });
    localStorage.setItem(TODOS_LS, JSON.stringify(savingToDos));
  };

  loadToDos = () => {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      this.state.toDos = JSON.parse(loadedToDos);
    }
  };

  setCurDo = (curDo, curDoId) => {
    this.setState({ curDo, curDoId });
  };

  reallocateToDos = (newToDos) => {
    this.setState({ toDos: newToDos }, () => this.saveToDos());
  };

  addFocusedTime = (time) => {
    let newToDos = [];
    this.state.toDos.map((toDo) => {
      if (toDo.id === this.state.curDoId) {
        toDo.todayTime += time;
        toDo.totalTime += time;
      }
      newToDos.push(toDo);
    });
    this.reallocateToDos(newToDos);
  };

  ApplyTheme = () => {
    this.setState({
      theme: this.state.isNightMode
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

  ReloadOptions = () => {
    this.setState({
      isNightMode: JSON.parse(localStorage.getItem(NIGHT_MODE)),
      isAutoStart: JSON.parse(localStorage.getItem(AUTO_START)),
      isOverCount: JSON.parse(localStorage.getItem(OVER_COUNT)),
      isPomodoro: JSON.parse(localStorage.getItem(POMODORO)),
      focusTime: JSON.parse(localStorage.getItem(FOCUS_TIME)),
      shortBreakTime: JSON.parse(localStorage.getItem(SHORT_BREAK_TIME)),
      longBreakTime: JSON.parse(localStorage.getItem(LONG_BREAK_TIME)),
    });
  };

  ToggleSettingPanel = () => {
    // Close panel
    this.setState({ isSettingClick: !this.state.isSettingClick });

    // Load updated Options after panel is closed
    if (!this.state.isSettingClick) this.ReloadOptions();

    // Load updated time to timer
    if (this.state.isSettingClick) {
      if (this.state.isFocus) {
        this.props.setTimer(this.state.focusTime, 0);
      } else {
        this.props.setTimer(this.getBreakTime(), 0);
      }
    }
  };

  ToggleNightMode = () => {
    this.setState({ isNightMode: !this.state.isNightMode }, () =>
      this.ApplyTheme()
    );
  };

  _toggleIsFocus = () => {
    this.setState({ isFocus: !this.state.isFocus });
  };

  changeIsStudy = (bool) => {
    this.setState({ isStudy: bool });
  };

  getBreakTime = () => {
    if (this.state.isPomodoro) {
      if (this.props.sets.length % 4 === 0) return this.state.longBreakTime;
      else return this.state.shortBreakTime;
    } else {
      if (this.props.sets.length % 2 === 0) return this.state.longBreakTime;
      else return this.state.shortBreakTime;
    }
  };

  loadTime = () => {
    if (this.state.isFocus) {
      this.props.setTimer(this.state.focusTime, 0);
    } else {
      this.props.setTimer(this.getBreakTime, 0);
    }
  };

  render() {
    const {
      curDo,
      theme,
      isSettingClick,
      isToDoClick,
      isNightMode,
      isAutoStart,
      isOverCount,
      isStudy,
      isPomodoro,
      focusTime,
      shortBreakTime,
      longBreakTime,
      isFocus,
      isPlay,
      isPlayerClick,
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Timer
          ref={this.Timer}
          isMenu={isSettingClick || isToDoClick || isPlayerClick}
          isPomodoro={isPomodoro}
          isAutoStart={isAutoStart}
          isOverCount={isOverCount}
          isFocus={isFocus}
          focusTime={focusTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}
          toggleIsFocus={this._toggleIsFocus}
          changeIsStudy={this.changeIsStudy}
          ApplyTheme={this.ApplyTheme}
          addFocusedTime={this.addFocusedTime}
          getBreakTime={this.getBreakTime}
        />
        {isSettingClick ? (
          <Setting
            ToggleNightMode={this.ToggleNightMode}
            ToggleSettingPanel={this.ToggleSettingPanel}
          />
        ) : (
          ""
        )}
        {isToDoClick ? (
          <ToDosPanel
            setCurDo={this.setCurDo}
            reallocateToDos={this.reallocateToDos}
            toDos={this.state.toDos}
          />
        ) : (
          ""
        )}
        {isPlayerClick ? (
          <PlayerPanel
            isPlay={isPlay}
            tooglePlay={this.togglePlay}
            togglePlayerButton={this.togglePlayerButton}
            playNextSong={this.playNextSong}
            playPrevSong={this.playPrevSong}
          />
        ) : (
          ""
        )}
        <Player />
        <ButtonConatiner>
          <PlayerButton
            isPlay={isPlay}
            togglePlayerButton={this.togglePlayerButton}
          />
          <ToDosButton
            curDo={curDo}
            toggleToDo={this._toggleToDo}
            isToDoClick={isToDoClick}
            isStudy={isStudy}
          />
          <SettingButton
            isSettingClick={isSettingClick}
            ToggleSettingPanel={this.ToggleSettingPanel}
            isStudy={isStudy}
          />
        </ButtonConatiner>
      </ThemeProvider>
    );
  }
}

const ButtonConatiner = styled.div`
  position: absolute;
  left: 20px;
  top: 15px;
  height: 50px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function mapStateToProps(state, ownProps) {
  return { time: state.time, sets: state.sets };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setTimer: (min, sec) => dispatch(actionCreators.setTimer(min, sec)),
    clearSets: () => dispatch(actionCreators.clearSets()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
