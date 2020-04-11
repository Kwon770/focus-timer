import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import FlipMove from "react-flip-move";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { AddingColumn } from "./AddingColumn";
import { ToDoColumn } from "./ToDoColumn";

export default function ToDosPanel(props) {
  const {
    isEdit,
    toDos,
    toggleEditMode,
    addToDo,
    deleteToDo,
    setCurDo,
  } = props;

  const [isInput, setIsInput] = useState(false);
  const [input, setInput] = useState("");

  const toggleInputAdd = (e) => {
    e.preventDefault();
    const _input = e.target.value;
    if (_input.trim() === "") {
      setIsInput(false);
      setInput("");
    } else {
      setIsInput(true);
      setInput(_input);
    }
  };

  const tryAdding = () => {
    if (isInput) {
      addToDo(input);
      setInput("");
      setIsInput(false);
    }
  };

  return (
    <Panel>
      <Title_Container>
        <FontAwesomeIcon icon={faClipboard} style={{ marginRight: 10 }} />
        Todo
      </Title_Container>
      <Edit_Button isEdit={isEdit} onClick={toggleEditMode}>
        <FontAwesomeIcon icon={faPen} />
      </Edit_Button>
      <List_Conatiner>
        <FlipMove enterAnimation="fade" leaveAnimation="fade">
          {toDos.map((toDo) => {
            if (toDo.isButton) {
              return (
                <AddingColumn
                  key={toDo.id}
                  tryAdding={tryAdding}
                  toggleInputAdd={toggleInputAdd}
                  input={input}
                  isInput={isInput}
                />
              );
            } else {
              return (
                <ToDoColumn
                  key={toDo.id}
                  isEdit={isEdit}
                  deleteToDo={deleteToDo}
                  {...toDo}
                />
              );
            }
          })}
        </FlipMove>
      </List_Conatiner>
    </Panel>
  );
}

const List_Conatiner = styled.ul`
  list-style: none;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const Title_Container = styled.div`
  align-items: center;
  justify-content: space-around;
  font-size: 25px;
  font-weight: 600;
  /* color: */
`;

const Edit_Button = styled.div`
  color: ${(props) =>
    props.isEdit ? props.theme.hlColor : props.theme.disColor};
  position: absolute;
  top: 25px;
  right: 27px;
  padding: 0px 4px;
  font-size: 20px;
  background-color: ${(props) => props.theme.panelBgColor};
`;

const Panel = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  max-height: 380px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.panelBgColor};
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
