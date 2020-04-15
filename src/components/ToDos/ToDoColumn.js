import React, { forwardRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrutch, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const ConvertToTimeFormat = (time) => {
  const hour = time / 60;
  const min = time % 60;
  return `${hour}h ${min}m`;
};

export const ToDoColumn = forwardRef((props, ref) => (
  <List_Element ref={ref}>
    <Element_Container>
      <Progress_Icon
        isSelected={props.isSelected}
        onClick={() => props.selectToDo(props.id)}
      >
        <FontAwesomeIcon
          icon={faCrutch}
          style={{ marginRight: 15, fontSize: 20 }}
        />
      </Progress_Icon>
      <Information_Container>
        {props.isEdit ? (
          <ToDoInput
            value={props.input}
            onChange={(e) => props.setInput(e.target.value)}
          />
        ) : (
          <ToDo_Title>{props.name}</ToDo_Title>
        )}
        <ToDo_Time>{ConvertToTimeFormat(props.time)}</ToDo_Time>
      </Information_Container>
    </Element_Container>
    {props.isEditMode ? (
      props.isEdit ? (
        <EditButton_Container>
          <Edit_Button
            isMode={true}
            onClick={() => props.changeToDo(props.id, props.input)}
          >
            <FontAwesomeIcon icon={faPen} />
          </Edit_Button>
        </EditButton_Container>
      ) : (
        <EditButton_Container>
          <Edit_Button
            isMode={false}
            onClick={() => {
              props.setInput(props.name);
              props.editToDo(props.id);
            }}
          >
            <FontAwesomeIcon icon={faPen} style={{ marginRight: 10 }} />
          </Edit_Button>
          <Edit_Button
            isMode={false}
            onClick={() => props.deleteToDo(props.id)}
          >
            <FontAwesomeIcon icon={faTrash} style={{ marginRight: 10 }} />
          </Edit_Button>
        </EditButton_Container>
      )
    ) : (
      <Progress_Button onClick={() => props.toggleToDoProgress(props.id)}>
        {props.isDone ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </Progress_Button>
    )}
  </List_Element>
));

const ToDoInput = styled.input`
  width: 150px;
  margin: 0;
  padding: 4px 0px;
  border: none;
  border-bottom: 1px solid #bdc3c7;
  text-align: start;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.panelFontColor};
  background-color: ${(props) => props.theme.panelBgColor};
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.hlColor};
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

const EditButton_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Edit_Button = styled.div`
  color: ${(props) =>
    props.isMode ? props.theme.hlColor : props.theme.disColor};
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
  width: 260px;
`;
