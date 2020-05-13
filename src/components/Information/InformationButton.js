import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function PlayerButton(props) {
  //   const [isOverlay, setIsOverlay] = useState(false);

  return (
    <>
      <Button
      // isPlay={props.isPlay}
      // onClick={props.togglePlayerClick}
      // onMouseOver={() => setIsOverlay(true)}
      // onMouseLeave={() => setIsOverlay(false)}
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </Button>
    </>
  );
}

const Button = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  color: ${(props) =>
    props.isPlay ? props.theme.highLightColor : props.theme.lightDisabledColor};
  font-size: 30px;
  padding-right: 5px;
  &:hover {
    background-color: ${(props) => props.theme.lightDisabledColor};
  }
`;
