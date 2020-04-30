import React, { forwardRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const AddingColumn = forwardRef((props, ref) => (
  <List ref={ref}>
    <ElementWrapper>
      <PlusIcon isInput={props.isInput} onClick={props.tryAdding}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ marginRight: 15, fontSize: 20 }}
        />
      </PlusIcon>
      <TitleInput
        placeholder="Click to Add ToDo"
        value={props.input}
        onInput={props.toggleInputAdd}
      />
    </ElementWrapper>
  </List>
));

const PlusIcon = styled.div`
  color: ${(props) =>
    props.isInput ? props.theme.highLightColor : props.theme.disColor};
`;

const TitleInput = styled.input`
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
`;

const ElementWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.li`
  margin: 10px 0px;
  padding: 0px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
`;
