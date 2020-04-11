import React, { forwardRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrutch,
  faPen,
  faTrash,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const ConvertToTimeFormat = (time) => {
  const hour = time / 60;
  const min = time % 60;
  return `${hour}h ${min}m`;
};

export const ToDoColumn = forwardRef((props, ref) => (
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
    {props.isEdit ? (
      <EditButton_Container>
        <Edit_Button>
          <FontAwesomeIcon icon={faPen} style={{ marginRight: 10 }} />
        </Edit_Button>
        <Edit_Button>
          <FontAwesomeIcon icon={faTrash} style={{ marginRight: 10 }} />
        </Edit_Button>
        <Edit_Button>
          <FontAwesomeIcon icon={faSort} style={{ marginRight: 0 }} />
        </Edit_Button>
      </EditButton_Container>
    ) : (
      <Progress_Button>
        {props.isDone ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </Progress_Button>
    )}
  </List_Element>
));

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
  color: ${(props) => props.theme.disColor};
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
