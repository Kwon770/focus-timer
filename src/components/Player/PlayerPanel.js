import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";

export default function PlayerPanel(props) {
  return (
    <Panel>
      <TopButtonWrapper>
        <FontAwesomeIcon icon={faChevronLeft} />
        <FontAwesomeIcon icon={faBars} />
      </TopButtonWrapper>
      <TitleWrapper>
        <Name>ASMR</Name>
        <Author>Soup Asmr</Author>
      </TitleWrapper>
    </Panel>
  );
}

const Author = styled.span`
  color: ${(props) => props.theme.disColor};
  font-size: 12px;
  margin-top: 2px;
`;

const Name = styled.span`
  color: ${(props) => props.theme.panelFontColor};
  font-size: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 15px;
  color: ${(props) => props.theme.disColor};
`;

const Panel = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -150px;
  height: 300px;
  width: 300px;
  padding: 20px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.panelBgColor};
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
