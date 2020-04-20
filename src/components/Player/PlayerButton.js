import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";

export default function PlayerButton(props) {
  // return <Preview>Soup Asmr - Tokyo Cafe Asmr</Preview>;
  return (
    <Button>
      <FontAwesomeIcon icon={faItunesNote} size="2x" />
    </Button>
  );
}

const Button = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${(props) => props.theme.panelBgColor};
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  color: ${(props) =>
    props.isSettingClick ? props.theme.hlColor : props.theme.disColor};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
`;
