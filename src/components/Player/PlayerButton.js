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
          <ButtonOverlay>
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
  color: ${(props) => props.theme.disColor};
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
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${(props) => props.theme.panelBgColor};
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  color: ${(props) =>
    props.isPlay ? props.theme.hlColor : props.theme.disColor};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
`;
