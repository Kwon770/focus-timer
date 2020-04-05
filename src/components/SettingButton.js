import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function SettingButton(props) {
  return (
    <Button onClick={props.toggleSetting} isSettingClick={props.isSettingClick}>
      <FontAwesomeIcon icon={faCog} />
    </Button>
  );
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${(props) => (props.isSettingClick ? props.theme.hlColor : "#bdc3c7")};
  font-size: 20px;
  background-color: ${(props) => props.theme.panelBgColor};
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
`;
