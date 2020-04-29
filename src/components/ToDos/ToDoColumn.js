import React, { forwardRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrutch, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const ConvertToTimeFormat = (time, fullFormat) => {
  const hour = Math.floor(time / 60);
  const min = time % 60;
  if (fullFormat) {
    return `${hour}h ${min}m`;
  } else {
    return `${hour}h`;
  }
};

export const ToDoColumn = forwardRef((props, ref) => (
  <List ref={ref}>
    <ElementWrapper>
      <ProgressIcon
        isSelected={props.isSelected}
        onClick={() => props.selectToDo(props.id)}
      >
        <FontAwesomeIcon
          icon={faCrutch}
          style={{ marginRight: 15, fontSize: 20 }}
        />
      </ProgressIcon>
      <InformationWrapper>
        {props.isEdit ? (
          <TitleInput
            value={props.input}
            onChange={(e) => props.setInput(e.target.value)}
          />
        ) : (
          <Title>{props.name}</Title>
        )}
        <Time>{`
        ${ConvertToTimeFormat(props.todayTime, true)} (${ConvertToTimeFormat(
          props.totalTime,
          false
        )})`}</Time>
      </InformationWrapper>
    </ElementWrapper>
    {props.isEditMode ? (
      props.isEdit ? (
        <EditButtonWrapper>
          <EditButton
            isMode={true}
            onClick={() => props.changeToDo(props.id, props.input)}
          >
            <FontAwesomeIcon icon={faPen} />
          </EditButton>
        </EditButtonWrapper>
      ) : (
        <EditButtonWrapper>
          <EditButton
            isMode={false}
            onClick={() => {
              props.setInput(props.name);
              props.editToDo(props.id);
            }}
          >
            <FontAwesomeIcon icon={faPen} style={{ marginRight: 10 }} />
          </EditButton>
          <EditButton isMode={false} onClick={() => props.deleteToDo(props.id)}>
            <FontAwesomeIcon icon={faTrash} style={{ marginRight: 10 }} />
          </EditButton>
        </EditButtonWrapper>
      )
    ) : (
      <ProgressButton onClick={() => props.toggleToDoProgress(props.id)}>
        {props.isDone ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </ProgressButton>
    )}
  </List>
));

const TitleInput = styled.input`
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
`;

const ElementWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Time = styled.h5`
  margin: 7px 0px;
  font-weight: 400;
  color: ${(props) => props.theme.disColor};
`;

const Title = styled.h4`
  margin: 7px 0px;
  color: ${(props) => props.theme.panelFontColor};
`;

const EditButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditButton = styled.div`
  color: ${(props) =>
    props.isMode ? props.theme.hlColor : props.theme.disColor};
`;

const ProgressButton = styled.div`
  color: ${(props) => props.theme.hlColor};
`;

const InformationWrapper = styled.div``;

const ProgressIcon = styled.div`
  color: ${(props) =>
    props.isSelected ? props.theme.hlColor : props.theme.disColor};
`;

const List = styled.li`
  margin: 10px 0px;
  padding: 0px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
`;
