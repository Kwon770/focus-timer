import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {
  faClipboard,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";

export default function ToDoPanel(props) {
  const {} = props;
  return (
    <Panel>
      <TitleContainer>
        <FontAwesomeIcon icon={faClipboard} style={{ marginRight: 10 }} />
        Todo
      </TitleContainer>
      <List_Conatiner>
        <List_Element>
          <Di>
            <Progress_Icon>
              <FontAwesomeIcon icon={faPen} style={{ marginRight: 15 }} />
            </Progress_Icon>
            <Information_Container>
              <ToDo_Title>Coding</ToDo_Title>
              <ToDo_Time>3h 00m (3set)</ToDo_Time>
            </Information_Container>
          </Di>
          <Progress_Button>
            <FontAwesomeIcon icon={faCheckCircle} />
          </Progress_Button>
        </List_Element>
        <List_Element>
          <Di>
            <Progress_Icon>
              <FontAwesomeIcon icon={faPen} style={{ marginRight: 15 }} />
            </Progress_Icon>
            <Information_Container>
              <ToDo_Title>Japanese</ToDo_Title>
              <ToDo_Time>3h 00m (3set)</ToDo_Time>
            </Information_Container>
          </Di>
          <Progress_Button>
            <FontAwesomeIcon icon={faCircle} />
          </Progress_Button>
        </List_Element>
        <List_Element>
          <Di>
            <Progress_Icon>
              <FontAwesomeIcon icon={faPen} style={{ marginRight: 15 }} />
            </Progress_Icon>
            <Information_Container>
              <ToDo_Title>English</ToDo_Title>
              <ToDo_Time>3h 00m (3set)</ToDo_Time>
            </Information_Container>
          </Di>
          <Progress_Button>
            <FontAwesomeIcon icon={faCircle} />
          </Progress_Button>
        </List_Element>
      </List_Conatiner>
    </Panel>
  );
}

const Di = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToDo_Time = styled.h5`
  margin: 7px 0px;
  font-weight: 400;
  /* color: */
`;

const ToDo_Title = styled.h4`
  margin: 7px 0px;
  /* color: */
`;

const Progress_Button = styled.div``;

const Information_Container = styled.div``;

const Progress_Icon = styled.div`
  /* color: */
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const TitleContainer = styled.div`
  align-items: center;
  justify-content: space-around;
  font-size: 25px;
  font-weight: 600;
  /* color: */
`;

const Panel = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  /* height: 450px; */
  border-radius: 25px;
  background-color: ${(props) => props.theme.panelBgColor};
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
