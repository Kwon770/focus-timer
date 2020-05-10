import React, { useState } from "react";
import styled from "styled-components";
import FlipMove from "react-flip-move";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { AddingColumn } from "./AddingColumn";
import { ToDoColumn } from "./ToDoColumn";

export default function ToDosPanel(props) {
  const {
    isEditMode,
    toDos,
    addToDo,
    deleteToDo,
    editToDo,
    changeToDo,
    selectToDo,
    toggleToDoProgress,
    toggleEditMode,
  } = props;

  const [isAddInput, setIsAddInput] = useState(false);
  const [addInput, setAddInput] = useState("");
  const [changeInput, setChangeInput] = useState("");

  const toggleInputAdd = (e) => {
    e.preventDefault();
    const _input = e.target.value;
    if (_input.trim() === "") {
      setIsAddInput(false);
      setAddInput("");
    } else {
      setIsAddInput(true);
      setAddInput(_input);
    }
  };

  const tryAdding = () => {
    if (isAddInput) {
      addToDo(addInput);
      setAddInput("");
      setIsAddInput(false);
    }
  };

  return (
    <Panel>
      <TitleWrapper>
        <FontAwesomeIcon icon={faClipboard} style={{ marginRight: 10 }} />
        Todo
      </TitleWrapper>
      <EditButton isEditMode={isEditMode} onClick={toggleEditMode}>
        <FontAwesomeIcon icon={faPen} />
      </EditButton>
      <ListConatiner>
        <FlipMove enterAnimation="fade" leaveAnimation="fade">
          {toDos.map((toDo) => {
            if (toDo.isButton) {
              return (
                <AddingColumn
                  key={toDo.id}
                  tryAdding={tryAdding}
                  toggleInputAdd={toggleInputAdd}
                  input={addInput}
                  isInput={isAddInput}
                />
              );
            } else {
              return (
                <ToDoColumn
                  key={toDo.id}
                  isEditMode={isEditMode}
                  deleteToDo={deleteToDo}
                  editToDo={editToDo}
                  changeToDo={changeToDo}
                  selectToDo={selectToDo}
                  toggleToDoProgress={toggleToDoProgress}
                  input={changeInput}
                  setInput={setChangeInput}
                  {...toDo}
                />
              );
            }
          })}
        </FlipMove>
      </ListConatiner>
    </Panel>
  );
}

const ListConatiner = styled.ul`
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

const TitleWrapper = styled.div`
  align-items: center;
  justify-content: space-around;
  font-size: 25px;
  font-weight: 600;
  color: ${(props) => props.theme.panelFontColor};
`;

const EditButton = styled.div`
  color: ${(props) =>
    props.isEditMode
      ? props.theme.highLightColor
      : props.theme.darkDisabledColor};
  position: absolute;
  top: 25px;
  right: 27px;
  padding: 0px 4px;
  font-size: 20px;
  background-color: ${(props) => props.theme.panelBgColor};
`;

const Panel = styled.div`
  ${(props) => props.theme.panel}
  padding: 20px;
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
