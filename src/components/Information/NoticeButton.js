import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

export default ({ toggleNoticeClick }) => {
  return (
    <>
      <Button onClick={toggleNoticeClick}>
        <FontAwesomeIcon icon={faWrench} />
      </Button>
    </>
  );
};

const Button = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: -50px;
  width: 70px;
  color: ${(props) => props.theme.lightDisabledColor};
  font-size: 30px;
  padding-right: 5px;
  &:hover {
    color: ${(props) => props.theme.darkDisabledColor};
  }
`;
