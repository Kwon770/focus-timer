import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";

export default ({ toggleNoticeClick, toggleNotice, getNoticeState }) => {
  return (
    <Panel>
      <TopButtonsWrapper>
        <FontAwesomeIcon icon={faChevronLeft} onClick={toggleNoticeClick} />
      </TopButtonsWrapper>
      <Notice>
        <Title>📌 Notice</Title>
        <Column>
          This is under development. Lot of change may be come. But Don't worry
          the losing your data.
        </Column>
        <Title>🚀 New Feature</Title>
        <Column>
          - Even you are on break step, timer will remember when you restart
          broswer
        </Column>
        <Column>- Notice and Instruction Panel is added ! </Column>
        <Title>🐞 Debug</Title>
        <Column>- The time data of ToDo will work again !</Column>
        <Column>- The ui of Todo will work right from now on!</Column>
        <Column>- The problem in music play loop is fixed !</Column>
        <Column>- The minor bug of timer is sloved !</Column>
        <Button state={getNoticeState()} onClick={toggleNotice}>
          {getNoticeState() ? (
            <FontAwesomeIcon icon={faCheckSquare} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
          )}
          {"  Don't show thie notice till next update"}
        </Button>
      </Notice>
    </Panel>
  );
};

const Instruction = styled.main``;

const Notice = styled.main``;

const Button = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 13px;
  color: ${(props) =>
    props.state ? props.theme.highLightColor : props.theme.darkDisabledColor};
`;

const Column = styled.div`
  width: 100%;
  margin: 4px 0px;
`;

const Title = styled.div`
  width: 100%;
  font-weight: 700;
  margin-top: 18px;
`;

const TopButtonsWrapper = styled.div`
  ${(props) => props.theme.topButtonsWrapper}
`;

const Panel = styled.div`
  ${(props) => props.theme.panel}
  padding: 30px;
  padding-top: 20px;
  margin-top: -200px;
  margin-left: -200px;
  width: 400px;
`;
