import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default ({ toggleNoticeClick }) => {
  const notice = `
  This is under development. Lot of change may 
  be come. But Don't worry the losing your data.
  `;

  const feature = `
  - Even you are on break step, timer will 
    remember when you restart broswer
  `;

  const debug = `
  - The time data of ToDo will work again !
  - The ui of Todo will work right from now on!
  - The problem in music play loop is fixed !
  - The minor bug of timer is sloved!
  `;

  return (
    <Panel>
      <TopButtonsWrapper>
        <FontAwesomeIcon icon={faChevronLeft} onClick={toggleNoticeClick} />
      </TopButtonsWrapper>
      <Title>📌 Notice</Title>
      <Main>
        <pre>{notice}</pre>
      </Main>
      <Title>🚀 New Feature</Title>
      <Main>
        <pre>{feature}</pre>
      </Main>
      <Title>🐞 Debug</Title>
      <Main>
        <pre>{debug}</pre>
      </Main>
    </Panel>
  );
};

const Main = styled.main`
  width: 100%;
`;

const Title = styled.span`
  width: 100%;
  font-weight: 700;
  margin-top: 10px;
`;

const TopButtonsWrapper = styled.div`
  ${(props) => props.theme.topButtonsWrapper}
`;

const Panel = styled.div`
  ${(props) => props.theme.panel}
  margin-top: -200px;
  margin-left: -200px;
  width: 400px;
`;
