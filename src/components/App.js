import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { breakDark, focusDark, breakLight, focusLight } from "../Styles/theme";
import Timer from "./Timer";
import PlayerButton from "./Player/PlayerButton";
import Player from "./Player";
import SettingButton from "./Setting/SettingButton";
import Setting from "./Setting";
import ToDosButton from "./ToDos/ToDosButton";
import ToDosPanel from "./ToDos";

const LOCAL_DATE = "localDate";
const PLAY = "play";
const TODOS_LS = "todosLocalStorage";
const CUR_DO = "curDo";
const CUR_DO_ID = "curDoId";
const NIGHT_MODE = "nightMode";
const AUTO_START = "autoStart";
const OVER_COUNT = "overCount";
const POMODORO = "pomodoro";
const FOCUS_TIME = "focusTime";
const SHORT_BREAK_TIME = "shortBreakTime";
const LONG_BREAK_TIME = "longBreakTime";

class App extends Component {
  componentDidMount() {
    this.checkLastDate();
    this.ApplyTheme();
    this.loadTime();
    // localStorage.setItem(PLAY, JSON.stringify(true));
    // localStorage.setItem(CUR_DO, JSON.stringify(""));
    // localStorage.setItem(CUR_DO_ID, JSON.stringify(""));
    // localStorage.setItem(TODOS_LS, JSON.stringify([]));
    // localStorage.setItem(NIGHT_MODE, JSON.stringify(true));
    // localStorage.setItem(AUTO_START, JSON.stringify(true));
    // localStorage.setItem(OVER_COUNT, JSON.stringify(true));
    // localStorage.setItem(POMODORO, JSON.stringify(true));
    // localStorage.setItem(FOCUS_TIME, JSON.stringify(1));
    // localStorage.setItem(SHORT_BREAK_TIME, JSON.stringify(1));
    // localStorage.setItem(LONG_BREAK_TIME, JSON.stringify(1));
  }

  state = {
    theme: focusLight,
    isFocus: true,
    isStudy: false,
    // Player
    isPlayerClick: false,
    isPlay: JSON.parse(localStorage.getItem(PLAY)),
    // ToDos
    isToDoClick: false,
    curDo: JSON.parse(localStorage.getItem(CUR_DO)),
    curDoId: JSON.parse(localStorage.getItem(CUR_DO_ID)),
    toDos: JSON.parse(localStorage.getItem(TODOS_LS)),
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

  toggleIsPlay = () => {
    this.setState({ isPlay: !this.state.isPlay }, () =>
      localStorage.setItem(PLAY, JSON.stringify(this.state.isPlay))
    );
  };

  togglePlayerButton = () => {
    this.setState({ isPlayerClick: !this.state.isPlayerClick });
  };

  checkLastDate = () => {
    const lastDate = localStorage.getItem(LOCAL_DATE);
    const date = new Date();
    const curDate = date.getMonth() + "." + date.getDate();
    if (lastDate !== curDate) {
      let newToDos = [];
      this.state.toDos.forEach((toDo) => {
        toDo.todayTime = 0;
        toDo.isDone = false;
        newToDos.push(toDo);
      });
      this.reallocateToDos(newToDos);
      this.props.clearSets();
      localStorage.setItem(LOCAL_DATE, curDate);
    }
  };

  saveToDos = () => {
    let savingToDos = [];
    this.state.toDos.forEach((toDo) => {
      if (toDo.isButton === false) savingToDos.push(toDo);
    });
    localStorage.setItem(TODOS_LS, JSON.stringify(savingToDos));
  };

  setCurDo = (curDo, curDoId) => {
    this.setState({ curDo, curDoId });
  };

  reallocateToDos = (newToDos) => {
    this.setState({ toDos: newToDos }, () => this.saveToDos());
  };

  addFocusedTime = (time) => {
    let newToDos = [];
    this.state.toDos.forEach((toDo) => {
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

  toggleToDo = () => {
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
    this.setState({ isSettingClick: !this.state.isSettingClick }, async () => {
      if (!this.state.isSettingClick) {
        await this.ReloadOptions();

        if (this.state.isFocus) {
          this.props.setTimer(this.state.focusTime, 0);
        } else {
          this.props.setTimer(this.getBreakTime(), 0);
        }
      }
    });
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
            toggleToDo={this.toggleToDo}
            setCurDo={this.setCurDo}
            reallocateToDos={this.reallocateToDos}
            toDos={this.state.toDos}
          />
        ) : (
          ""
        )}
        <Player
          isPlay={isPlay}
          isPlayerClick={isPlayerClick}
          toggleIsPlay={this.toggleIsPlay}
          togglePlayerButton={this.togglePlayerButton}
        />
        <ButtonConatiner>
          <PlayerButton
            isPlay={isPlay}
            togglePlayerButton={this.togglePlayerButton}
          />
          <ToDosButton
            curDo={curDo}
            toggleToDo={this.toggleToDo}
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
