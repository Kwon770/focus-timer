import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function SettingButton(props) {
  return (
    <Button
      onClick={props.toggleSetting}
      isSettingClick={props.isSettingClick}
      isStudy={props.isStudy}
    >
      <FontAwesomeIcon icon={faCog} />
    </Button>
  );
}

const Button = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: ${(props) => (props.isStudy ? "10px" : "85px")};
  transition: left 0.6s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${(props) =>
    props.isSettingClick ? props.theme.hlColor : props.theme.disColor};
  font-size: 20px;
  background-color: ${(props) => props.theme.panelBgColor};
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
`;
