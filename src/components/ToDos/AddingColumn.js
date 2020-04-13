import React, { forwardRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const AddingColumn = forwardRef((props, ref) => (
  <List_Element ref={ref}>
    <Element_Container>
      <Plus_Icon isInput={props.isInput} onClick={props.tryAdding}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ marginRight: 15, fontSize: 20 }}
        />
      </Plus_Icon>
      <Add_Input
        placeholder="Click to Add ToDo"
        value={props.input}
        onInput={props.toggleInputAdd}
      />
    </Element_Container>
  </List_Element>
));

const Plus_Icon = styled.div`
  color: ${(props) =>
    props.isInput ? props.theme.hlColor : props.theme.disColor};
`;

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

const List_Element = styled.li`
  margin: 10px 0px;
  padding: 0px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
`;