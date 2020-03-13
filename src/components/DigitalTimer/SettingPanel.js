import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "store";

class SettingPanel extends Component {
  state = {
    isMenuClick: this.props.MenuClick
  };

  _handleCustom = () => {
    this.props.toggleCustom(true);
  };
  _handlePomo = () => {
    this.props.toggleCustom(false);
  };

  render() {
    const { isCustom, isMenuClick } = this.props;
    return (
      <Panel>
        <ButtonColumn>
          <ButtonConatiner>
            <Title>Clock Mode</Title>
            <SettingButton>
              Time Timer
              <SettingDescription Left>
                Intuitive analog clock
              </SettingDescription>
            </SettingButton>
            <SettingButton>
              Digital Timer
              <SettingDescription Left>
                Accurate digital clock
              </SettingDescription>
            </SettingButton>
          </ButtonConatiner>
          <ButtonConatiner>
            <Title>Time Mode</Title>
            <SettingButton onClick={this._handlePomo} Custom={!isCustom}>
              Pomodoro
              <SettingDescription>
                1 long focus after 4 short focus with break
              </SettingDescription>
            </SettingButton>
            <SettingButton onClick={this._handleCustom} Custom={isCustom}>
              Custom
              <SettingDescription>Custom time set</SettingDescription>
            </SettingButton>
          </ButtonConatiner>
        </ButtonColumn>
        <ButtonColumn>
          <ButtonConatiner>
            <Title>Timer Mode</Title>
            <SettingButton>
              Timer Auto Start
              <SettingDescription Left>
                If focus or break is done, start next timer automatically
              </SettingDescription>
            </SettingButton>
            <SettingButton>
              Over Counting
              <SettingDescription Left>
                If you don't press next Button, It will count time till you
                press
              </SettingDescription>
            </SettingButton>
          </ButtonConatiner>
          <ButtonConatiner>
            <Title>Time Setting</Title>
            <SettingButton>
              Focus Time
              <TimeInput />
              <SettingDescription>
                Time to focus on what you do (minute)
              </SettingDescription>
            </SettingButton>
            <SettingButton>
              Short break Time
              <TimeInput />
              <SettingDescription>
                Short break time after repeated focus (minute)
              </SettingDescription>
            </SettingButton>
            <SettingButton>
              Long Break Time
              <TimeInput />
              <SettingDescription>
                Long break time after 2 repeated focus (4 repeated with
                Pomodoro) (minute)
              </SettingDescription>
            </SettingButton>
          </ButtonConatiner>
        </ButtonColumn>
        <ApplyButton onClick={() => this.setState({ isMenuClick: false })}>
          Apply
        </ApplyButton>
      </Panel>
    );
  }
}

const ApplyButton = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background-color: #ff8f70;
  color: white;
`;

const SettingDescription = styled.div`
  display: none;
  position: absolute;
  top: 0;
  ${props => (props.Left ? "right: 155px;" : "left: 155px;")}
  width: 200px;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: white;
  word-break: break-all;
`;

const TimeInput = styled.input.attrs(props => ({ type: `number` }))`
  width: 35px;
  padding: 3px 0px;
  border: none;
  border-bottom: 1px solid #bdc3c7;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: black;
  &:focus {
    outline: none;
  }
`;

const SettingButton = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 118px;
  font-weight: 300;
  color: ${props => (props.Custom ? "#ff8f70" : "black")};

  &:hover > ${SettingDescription} {
    display: block;
  }
`;

const Title = styled.h3`
  font-weight: 400;
`;

const ButtonConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonColumn = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Panel = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  height: 450px;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
`;

function mapStateToProps(state, ownProps) {
  return { isCustom: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleCustom: bool => dispatch(actionCreators.toggleCustom(bool))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingPanel);
