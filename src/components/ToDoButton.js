import React from "react";
import styled from "styled-components";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function ToDoButton() {
  return (
    <ToDoButton onClick={this.props.toggleToDo}>
      <FontAwesomeIcon icon={faPen} style={{ marginRight: 10 }} />
      {this.props.curDo}
    </ToDoButton>
  );
}

const ToDoButton = styled.div`
  width: 120px;
  height: 50px;
  margin-right: 15px;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.isFocus ? "#ff8f70" : "#bdc3c7")};
`;
