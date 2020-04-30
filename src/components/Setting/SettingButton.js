import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function SettingButton(props) {
  return (
    <Button
      onClick={props.ToggleSettingPanel}
      isSettingClick={props.isSettingClick}
      isStudy={props.isStudy}
    >
      <FontAwesomeIcon icon={faCog} />
    </Button>
  );
}

const Button = styled.div`
  ${(props) => props.theme.button}
  position: absolute;
  z-index: 1;
  top: 10px;
  width: 50px;
  height: 50px;
  left: ${(props) => (props.isStudy ? "10px" : "85px")};
  transition: left 0.6s ease-in-out;
  color: ${(props) =>
    props.isSettingClick ? props.theme.highLightColor : props.theme.disColor};
`;
