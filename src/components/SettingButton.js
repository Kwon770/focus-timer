import React from "react";
import styled from "styled-components";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function SettingButton() {
  return (
    <CogBtn
      onClick={this.props.toggleSetting}
      isPanel={this.props.isSettingClick}
    >
      <FontAwesomeIcon icon={faCog} />
    </CogBtn>
  );
}

const CogBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${props => (props.isPanel ? "#ff8f70" : "#bdc3c7")};
  font-size: 20px;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
`;
