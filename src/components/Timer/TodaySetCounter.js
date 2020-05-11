import React from "react";
import styled from "styled-components";

export default function TodaySetCounter(props) {
  return (
    <SetWrapper>
      {props.sets.map((set, index) => {
        if (index < 8) {
          return <Set key={index} />;
        } else if (index === 8) {
          return <SetCounter>+ {props.sets.length - 8}</SetCounter>;
        } else {
          return;
        }
      })}
    </SetWrapper>
  );
}

const SetWrapper = styled.ul`
  position: absolute;
  left: 0;
  top: -20px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Set = styled.li`
  width: 15px;
  height: 15px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.fontColor};
  margin: 0px 10px;
`;

const SetCounter = styled.li`
  margin-left: 10px;
  color: ${(props) => props.theme.fontColor};
  font-weight: 600;
  font-size: 20px;
`;
