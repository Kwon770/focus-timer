import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faPen,
  faClock,
  faBars,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import Store from "store";

class TimerPresenter extends React.Component {
  state = {
    isClockBtnClick: false,
    isSettingBtnClick: false
  };
  render() {
    const { isClockBtnClick, isSettingBtnClick } = this.state;
    return (
      <Container>
        <MenuConatiner>
          <CurrentDoPanel>
            <FontAwesomeIcon icon={faPen} style={{ marginRight: 10 }} />
            Code
            <SettingPanel>
              <CogBtn>
                <FontAwesomeIcon icon={faCog} />
              </CogBtn>
              <ClockBtn
                onClick={() =>
                  this.setState({
                    isClockBtnClick: true,
                    isSettingBtnClick: false
                  })
                }
                {...this.state}
              >
                <FontAwesomeIcon icon={faClock} style={{ marginRight: 20 }} />
              </ClockBtn>
              <SettingBtn>
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={() =>
                    this.setState({
                      isClockBtnClick: false,
                      isSettingBtnClick: true
                    })
                  }
                  {...this.state}
                />
              </SettingBtn>
            </SettingPanel>
          </CurrentDoPanel>
        </MenuConatiner>
        <ClockBtnPanelList {...this.state}>
          <BtnPanelElement onClick={this._handleClockBtnClick}>
            Time Timer
          </BtnPanelElement>
          <BtnPanelElement onClick={this._handleClockBtnClick}>
            Digital Timer
          </BtnPanelElement>
        </ClockBtnPanelList>
        <SettingBtnPanelList {...this.state}>
          <BtnPanelElement onClick={this._handleSettingBtnClick}>
            Pomo
          </BtnPanelElement>
          <BtnPanelElement onClick={this._handleSettingBtnClick}>
            60m
          </BtnPanelElement>
          <BtnPanelElement onClick={this._handleSettingBtnClick}>
            30m
          </BtnPanelElement>
          <BtnPanelElement onClick={this._handleSettingBtnClick}>
            10m
          </BtnPanelElement>
        </SettingBtnPanelList>
        <TimerContainer>
          <DigitalTimer>25</DigitalTimer>
          <DigitalTimer>
            '<DigitalTimerDot>'</DigitalTimerDot>
          </DigitalTimer>
          <DigitalTimer>00</DigitalTimer>
          <PlayerPreview>Soup Asmr - Tokyo Cafe Asmr</PlayerPreview>
        </TimerContainer>
        <TimerBtnContainer>
          <TimerBtn>
            <FontAwesomeIcon icon={faPlay} size="4x" color="white" />
          </TimerBtn>
          <TimerBtn>
            <FontAwesomeIcon icon={faPause} size="4x" color="white" />
          </TimerBtn>
          <TimerBtn>
            <FontAwesomeIcon icon={faStop} size="4x" color="white" />
          </TimerBtn>
        </TimerBtnContainer>
      </Container>
    );
  }
  _handleClockBtnClick = () => {
    //
    //
    this.setState({
      isClockBtnClick: false,
      isSettingBtnClick: false
    });
  };
  _handleSettingBtnClick = () => {
    //
    //
    this.setState({
      isClockBtnClick: false,
      isSettingBtnClick: false
    });
  };
}

const BtnPanelElement = styled.li`
  width: 90px;
  font-size: 15px;
  font-weight: 300;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClockBtnPanelList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: ${props => (props.isClockBtnClick ? "59%" : "54%")};
  color: ${props => (props.isClockBtnClick ? "#bdc3c7" : "rgba(0, 0, 0, 0)")};
  width: ${props => (props.isClockBtnClick ? "200px" : "0px")};
  height: 50px;
  transition: all 0.5s ease-in-out;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
`;

const SettingBtnPanelList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: ${props => (props.isSettingBtnClick ? "59%" : "54%")};
  color: ${props => (props.isSettingBtnClick ? "#bdc3c7" : "rgba(0, 0, 0, 0)")};
  width: ${props => (props.isSettingBtnClick ? "380px" : "0px")};
  height: 50px;
  transition: all 0.5s ease-in-out;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
`;

const ClockBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 22px;
  color: rgba(255, 143, 112, 0);
  font-size: 20px;
  transition: all 0.3s ease-in-out;
`;

const SettingBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 58px;
  color: rgba(255, 143, 112, 0);
  font-size: 20px;
  transition: all 0.3s ease-in-out;
`;
const CogBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  color: rgba(255, 143, 112, 255);
  font-size: 20px;
  transition: all 0.3s ease-in-out;
`;

const SettingPanel = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 135px;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 100px;
    transition: all 0.3s ease-in-out;
  }
  &:hover > ${ClockBtn} {
    color: rgba(255, 143, 112, 255);
    transition: color 0.3s ease-in-out;
  }
  &:hover > ${SettingBtn} {
    color: rgba(255, 143, 112, 255);
    transition: color 0.3s ease-in-out;
  }
  &:hover > ${CogBtn} {
    color: rgba(255, 143, 112, 0);
    transition: color 0.3s ease-in-out;
  }
`;

const CurrentDoPanel = styled.div`
  z-index: 10;
  position: relative;
  width: 120px;
  height: 50px;
  margin-right: 20px;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #ff8f70;
`;

const MenuConatiner = styled.div`
  position: absolute;
  top: 20px;
  left: 47%;
`;

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

const PlayerPreview = styled.div`
  position: absolute;
  top: 185px;
  width: 290px;
  margin-top: 0;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  text-align: center;
  color: white;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
`;

export default TimerPresenter;
