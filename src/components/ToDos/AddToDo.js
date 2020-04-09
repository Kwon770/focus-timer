import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddToDo(props) {
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
      props.addToDo(input);
      setInput("");
    }
  };

  return (
    <List_Element>
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
  );
}

const Element_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Progress_Icon = styled.div`
  color: ${(props) =>
    props.isInput ? props.theme.hlColor : props.theme.disColor};
`;

const List_Element = styled.li`
  margin: 10px 0px;
  padding: 0px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
