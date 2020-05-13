import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default ({ toggleNoticeClick }) => {
  return (
    <Panel>
      <TopButtonsWrapper>
        <FontAwesomeIcon icon={faChevronLeft} onClick={toggleNoticeClick} />
      </TopButtonsWrapper>
    </Panel>
  );
};

const TopButtonsWrapper = styled.div`
  ${(props) => props.theme.topButtonsWrapper}
`;

const Panel = styled.div`
  ${(props) => props.theme.panel}
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -150px;
  padding: 20px;
  width: 300px;
`;
