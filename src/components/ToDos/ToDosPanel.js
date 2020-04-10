import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import FlipMove from "react-flip-move";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCrutch, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faClipboard,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";

export default function ToDosPanel(props) {
  const { isEdit, toDos, toggleEditMode, addToDo, setCurDo } = props;

  const ConvertToTimeFormat = (time) => {
    const hour = time / 60;
    const min = time % 60;
    return `${hour}h ${min}m`;
  };
  const [isInput, setIsInput] = useState(false);
  const [input, setInput] = useState("");

  const toggleInputAdd = (_input) => {
    if (_input === null || _input.trim() === "") {
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

  const AddingColumn = forwardRef((props, ref) => (
    <List_Element ref={ref}>
      <Element_Container>
        <Progress_Icon isInput={isInput} onClick={tryAdding}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ marginRight: 15, fontSize: 20 }}
          />
        </Progress_Icon>
        <Add_Input
          placeholder="Click to Add ToDo"
          value={input}
          onInput={(e) => toggleInputAdd(e.target.value)}
        />
      </Element_Container>
    </List_Element>
  ));

  const ToDoColumn = forwardRef((props, ref) => (
    <List_Element ref={ref}>
      <Element_Container>
        <Progress_Icon isSelected={props.isSelected}>
          <FontAwesomeIcon
            icon={faCrutch}
            style={{ marginRight: 15, fontSize: 20 }}
          />
        </Progress_Icon>
        <Information_Container>
          <ToDo_Title>{props.name}</ToDo_Title>
          <ToDo_Time>{ConvertToTimeFormat(props.time)}</ToDo_Time>
        </Information_Container>
      </Element_Container>
      <Progress_Button>
        {props.isDone ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </Progress_Button>
    </List_Element>
  ));

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
              return <AddingColumn key={toDo.key} />;
            } else {
              return <ToDoColumn key={toDo.key} {...toDo} />;
            }
          })}
        </FlipMove>
      </List_Conatiner>
    </Panel>
  );
}

const Add_Input = styled.input`
  border: none;
  padding-bottom: 3px;
  height: 30px;
  width: 180px;
  color: ${(props) => props.theme.panelFontColor};
  font-size: 17px;
  font-weight: 700;
  background-color: ${(props) => props.theme.panelBgColor};
  ::placeholder {
    color: ${(props) => props.theme.disColor};
    font-size: 17px;
    font-weight: 700;
  }
  &:focus {
    outline: none;
  }
`;

const Element_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToDo_Time = styled.h5`
  margin: 7px 0px;
  font-weight: 400;
  color: ${(props) => props.theme.disColor};
`;

const ToDo_Title = styled.h4`
  margin: 7px 0px;
  color: ${(props) => props.theme.panelFontColor};
`;

const Progress_Button = styled.div`
  color: ${(props) => props.theme.hlColor};
`;

const Information_Container = styled.div``;

const Progress_Icon = styled.div`
  color: ${(props) =>
    props.isSelected ? props.theme.hlColor : props.theme.disColor};
`;

const List_Element = styled.li`
  margin: 10px 0px;
  padding: 0px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

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
