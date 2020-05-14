import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrutch } from "@fortawesome/free-solid-svg-icons";

export default function ToDosButton(props) {
  return (
    <Button
      onClick={() => {
        if (!props.isProgress) {
          props.toggleToDo();
        }
      }}
      isToDoClick={props.isToDoClick}
      isProgress={props.isProgress}
    >
      <FontAwesomeIcon icon={faCrutch} style={{ marginRight: 10 }} />
      {props.curDo}
    </Button>
  );
}

const Button = styled.div`
  ${(props) => props.theme.button}
  position: absolute;
  z-index: 1;
  top: 10px;
  left: ${(props) => (props.isProgress ? "85px" : "150px")};
  transition: left 0.6s ease-in-out;
  height: 50px;
  padding: 0px 15px;
  font-weight: 600;
  user-select: none;
  color: ${(props) =>
    props.isToDoClick
      ? props.theme.highLightColor
      : props.theme.darkDisabledColor};
  &:hover {
    background-color: ${(props) =>
      props.isProgress
        ? props.theme.panelBgColor
        : props.theme.lightDisabledColor};
  }
`;
