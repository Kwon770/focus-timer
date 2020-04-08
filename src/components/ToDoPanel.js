import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faClipboard,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";

export default function ToDoPanel(props) {
  const { toDos } = props;
  const ConvertToTimeFormat = (time) => {
    const hour = time / 60;
    const min = time % 60;
    return `${hour}h ${min}m`;
  };
  return (
    <Panel>
      <Title_Container>
        <FontAwesomeIcon icon={faClipboard} style={{ marginRight: 10 }} />
        Todo
      </Title_Container>
      <Plus_Button>
        <FontAwesomeIcon icon={faPlus} />
      </Plus_Button>
      <List_Conatiner>
        {toDos.map((toDo) => (
          <List_Element>
            <Element_Container>
              <Progress_Icon isSelected={toDo.isSelected}>
                <FontAwesomeIcon icon={faPen} style={{ marginRight: 15 }} />
              </Progress_Icon>
              <Information_Container>
                <ToDo_Title>{toDo.name}</ToDo_Title>
                <ToDo_Time>{ConvertToTimeFormat(toDo.time)}</ToDo_Time>
              </Information_Container>
            </Element_Container>
            <Progress_Button>
              {toDo.isDone ? (
                <FontAwesomeIcon icon={faCheckCircle} />
              ) : (
                <FontAwesomeIcon icon={faCircle} />
              )}
            </Progress_Button>
          </List_Element>
        ))}
      </List_Conatiner>
    </Panel>
  );
}

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
  /* color: */
`;

const Progress_Button = styled.div`
  color: ${(props) => props.theme.hlColor};
`;

const Information_Container = styled.div``;

const Progress_Icon = styled.div`
  color: ${(props) => props.theme.hlColor};
  opacity: ${(props) => (!props.isSelected ? "0" : "")};
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

const Plus_Button = styled.div`
  color: ${(props) => props.theme.hlColor};
  position: absolute;
  top: 25px;
  right: 26px;
  padding: 0px 4px;
  border-style: solid;
  border-color: ${(props) => props.theme.hlColor};
  border-width: 3px;
  border-radius: 15px;
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
