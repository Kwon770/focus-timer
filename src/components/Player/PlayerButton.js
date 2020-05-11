import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function PlayerButton(props) {
  const [isOverlay, setIsOverlay] = useState(false);

  return (
    <>
      <Button
        isPlay={props.isPlay}
        onClick={props.togglePlayerButton}
        onMouseOver={() => setIsOverlay(true)}
        onMouseLeave={() => setIsOverlay(false)}
      >
        <IconWrapper isOverlay={isOverlay}>
          <FontAwesomeIcon icon={faItunesNote} size="2x" />
        </IconWrapper>
        {isOverlay ? (
          <ButtonOverlay isPlayerClick={props.isPlayerClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </ButtonOverlay>
        ) : (
          ""
        )}
      </Button>
    </>
  );
}

const ButtonOverlay = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) =>
    props.isPlayerClick
      ? props.theme.highLightColor
      : props.theme.darkDisabledColor};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  ${(props) => (props.isOverlay ? "filter: blur(3px)" : "")};
  ${(props) => (props.isOverlay ? "-webkit-filter: blur(3px)" : "")};
`;

const Button = styled.div`
  ${(props) => props.theme.button}
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  color: ${(props) =>
    props.isPlay ? props.theme.highLightColor : props.theme.darkDisabledColor};
  font-size: 20px;
  padding-right: 5px;
  &:hover {
    background-color: ${(props) => props.theme.lightDisabledColor};
  }
`;
