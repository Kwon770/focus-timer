import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default ({ toggleNoticeClick }) => {
  return (
    <>
      <Button onClick={toggleNoticeClick}>
        <FontAwesomeIcon icon={faInfoCircle} />
      </Button>
    </>
  );
};

const Button = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0px;
  color: ${(props) => props.theme.lightDisabledColor};
  font-size: 30px;
  padding-right: 5px;
  &:hover {
    color: ${(props) => props.theme.darkDisabledColor};
  }
`;
