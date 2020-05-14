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
import SettingPanel from "./Setting";
import ToDosButton from "./ToDos/ToDosButton";
import ToDosPanel from "./ToDos";
import NoticeButton from "./NoticeButton";
import NoticePanel from "./NoticePanel";

const FOCUS = "focus";
const PREV_NOTICE_ID = "prevNoticeId";
const SETS = "sets";
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
  constructor(props) {
    super(props);
    this.checkLocalStorage();
  }
  componentDidMount() {
    this.checkLastDate();
    this.applyTheme();
    this.loadTime();
    this.showNotice();
  }

  state = {
    theme: focusLight,
    isFocus: JSON.parse(localStorage.getItem(FOCUS)),
    isProgress: false,
    // Notice Information
    isNoticeClick: false, //
    prevNotiveId: JSON.parse(localStorage.getItem(PREV_NOTICE_ID)),
    curNotiveId: "0.0.1",
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

  checkLocalStorage = () => {
    if (localStorage.getItem(PREV_NOTICE_ID) === null) {
      localStorage.setItem(PREV_NOTICE_ID, JSON.stringify("0.0.0"));
    }
    if (localStorage.getItem(FOCUS) === null) {
      localStorage.setItem(FOCUS, JSON.stringify(true));
    }
    if (localStorage.getItem(SETS) === null) {
      localStorage.setItem(SETS, JSON.stringify([[]]));
    }
    if (localStorage.getItem(LOCAL_DATE) === null) {
      const date = new Date();
      localStorage.setItem(
        LOCAL_DATE,
        JSON.stringify(date.getMonth() + "." + date.getDate())
      );
    }
    if (localStorage.getItem(PLAY) === null) {
      localStorage.setItem(PLAY, JSON.stringify(true));
    }
    if (localStorage.getItem(CUR_DO) === null) {
      localStorage.setItem(CUR_DO, JSON.stringify("Code"));
    }
    if (localStorage.getItem(CUR_DO_ID) === null) {
      localStorage.setItem(CUR_DO_ID, JSON.stringify(1589183103335));
    }
    if (localStorage.getItem(TODOS_LS) === null) {
      localStorage.setItem(
        TODOS_LS,
        JSON.stringify([
          {
            id: 1589183103335,
            isButton: false,
            isSelected: true,
            name: "Code",
            totalTime: 70,
            todayTime: 10,
            isDone: false,
            isEdit: false,
          },
        ])
      );
    }
    if (localStorage.getItem(NIGHT_MODE) === null) {
      localStorage.setItem(NIGHT_MODE, JSON.stringify(false));
    }
    if (localStorage.getItem(AUTO_START) === null) {
      localStorage.setItem(AUTO_START, JSON.stringify(false));
    }
    if (localStorage.getItem(OVER_COUNT) === null) {
      localStorage.setItem(OVER_COUNT, JSON.stringify(false));
    }
    if (localStorage.getItem(POMODORO) === null) {
      localStorage.setItem(POMODORO, JSON.stringify(true));
    }
    if (localStorage.getItem(FOCUS_TIME) === null) {
      localStorage.setItem(FOCUS_TIME, JSON.stringify(30));
    }
    if (localStorage.getItem(SHORT_BREAK_TIME) === null) {
      localStorage.setItem(SHORT_BREAK_TIME, JSON.stringify(5));
    }
    if (localStorage.getItem(LONG_BREAK_TIME) === null) {
      localStorage.setItem(LONG_BREAK_TIME, JSON.stringify(15));
    }
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

  applyTheme = () => {
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

  // NOTICE

  toggleNoticeClick = () => {
    this.setState({ isNoticeClick: !this.state.isNoticeClick });
  };

  showNotice = () => {
    if (this.state.curNotiveId !== this.state.prevNotiveId) {
      this.toggleNoticeClick();
    }
  };

  toggleNotice = async () => {
    if (this.state.prevNotiveId === this.state.curNotiveId) {
      await this.setState({ prevNotiveId: "0.0.0" }, () =>
        localStorage.setItem(
          PREV_NOTICE_ID,
          JSON.stringify(this.state.prevNotiveId)
        )
      );
    } else {
      await this.setState({ prevNotiveId: this.state.curNotiveId }, () =>
        localStorage.setItem(
          PREV_NOTICE_ID,
          JSON.stringify(this.state.prevNotiveId)
        )
      );
    }
  };

  getNoticeState = () => {
    return this.state.curNotiveId === this.state.prevNotiveId;
  };

  // PLAYER

  toggleIsPlay = () => {
    this.setState({ isPlay: !this.state.isPlay }, () =>
      localStorage.setItem(PLAY, JSON.stringify(this.state.isPlay))
    );
  };

  togglePlayerClick = () => {
    this.setState({
      isPlayerClick: !this.state.isPlayerClick,
      isToDoClick: false,
      isSettingClick: false,
    });
  };

  // TODO

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

  // TIMER

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

  toggleToDo = () => {
    this.setState({
      isToDoClick: !this.state.isToDoClick,
      isPlayerClick: false,
      isSettingClick: false,
    });
    let savingToDos = [];
    this.state.toDos.forEach((toDo) => {
      if (toDo.isButton === false) savingToDos.push(toDo);
    });
    this.reallocateToDos(savingToDos);
  };

  toggleIsFocus = () => {
    this.setState({ isFocus: !this.state.isFocus }, () =>
      localStorage.setItem(FOCUS, JSON.stringify(this.state.isFocus))
    );
  };

  changeIsProgress = (bool) => {
    this.setState({ isProgress: bool });
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
      this.props.setTimer(this.getBreakTime(), 0);
    }
  };

  // SETTING

  reloadOptions = () => {
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

  toggleSettingClick = () => {
    this.setState(
      {
        isSettingClick: !this.state.isSettingClick,
        isPlayerClick: false,
        isToDoClick: false,
      },
      async () => {
        if (!this.state.isSettingClick) {
          await this.reloadOptions();

          if (this.state.isFocus) {
            this.props.setTimer(this.state.focusTime, 0);
          } else {
            this.props.setTimer(this.getBreakTime(), 0);
          }
        }
      }
    );
  };

  toggleNightMode = () => {
    this.setState({ isNightMode: !this.state.isNightMode }, () =>
      this.applyTheme()
    );
  };

  render() {
    const {
      theme,
      isFocus,
      isProgress,
      // Notice Information
      isNoticeClick,
      // Player
      isPlayerClick,
      isPlay,
      // ToDo
      isToDoClick,
      curDo,
      // Setting
      isSettingClick,
      isAutoStart,
      isOverCount,
      isPomodoro,
      focusTime,
      shortBreakTime,
      longBreakTime,
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Timer
          ref={this.Timer}
          isMenu={
            isSettingClick || isToDoClick || isPlayerClick || isNoticeClick
          }
          isPomodoro={isPomodoro}
          isAutoStart={isAutoStart}
          isOverCount={isOverCount}
          isFocus={isFocus}
          focusTime={focusTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}
          toggleIsFocus={this.toggleIsFocus}
          changeIsProgress={this.changeIsProgress}
          applyTheme={this.applyTheme}
          addFocusedTime={this.addFocusedTime}
          getBreakTime={this.getBreakTime}
        />
        {isSettingClick ? (
          <SettingPanel
            toggleNightMode={this.toggleNightMode}
            toggleSettingClick={this.toggleSettingClick}
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
        {isNoticeClick ? (
          <NoticePanel
            toggleNoticeClick={this.toggleNoticeClick}
            toggleNotice={this.toggleNotice}
            getNoticeState={this.getNoticeState}
          />
        ) : (
          ""
        )}
        <Player
          isPlay={isPlay}
          isPlayerClick={isPlayerClick}
          toggleIsPlay={this.toggleIsPlay}
          togglePlayerClick={this.togglePlayerClick}
        />
        <ButtonConatiner Left>
          <PlayerButton
            isPlay={isPlay}
            isPlayerClick={isPlayerClick}
            togglePlayerClick={this.togglePlayerClick}
          />
          <ToDosButton
            curDo={curDo}
            toggleToDo={this.toggleToDo}
            isToDoClick={isToDoClick}
            isProgress={isProgress}
          />
          <SettingButton
            isSettingClick={isSettingClick}
            toggleSettingClick={this.toggleSettingClick}
            isProgress={isProgress}
          />
        </ButtonConatiner>
        <ButtonConatiner Right>
          <NoticeButton toggleNoticeClick={this.toggleNoticeClick} />
        </ButtonConatiner>
      </ThemeProvider>
    );
  }
}

const ButtonConatiner = styled.div`
  position: absolute;
  ${(props) =>
    props.Left ? "left:15px; top: 15px;" : "right: 55px; top: 35px;"}
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
