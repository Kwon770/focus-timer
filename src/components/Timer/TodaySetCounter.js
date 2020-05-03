import React from "react";
import styled from "styled-components";

export default function TodaySetCounter(props) {
  return (
    <SetWrapper>
      {props.sets.map((set) => (
        <Set />
      ))}
    </SetWrapper>
  );
}

const SetWrapper = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Set = styled.li`
  width: 15px;
  height: 15px;
  border-radius: 7px;
  background-color: white;
  margin: 0px 10px;
`;
