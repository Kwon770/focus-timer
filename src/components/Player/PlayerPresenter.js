import React from "react";
import Wave from "react-wavify";
import useToggle from "../../Hooks/useToggle";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faBars,
  faPlay,
  faPause,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

// https://coderwall.com/p/nihgwq/get-a-thumbnail-from-a-youtube-video

export default ({
  isPlay,
  toggleIsPlay,
  togglePlayerButton,
  playNextSong,
  playPrevSong,
}) => {
  const playlist = useToggle(false);
  return (
    <Panel>
      <TopButtonsWrapper>
        <FontAwesomeIcon icon={faChevronLeft} onClick={togglePlayerButton} />
        {playlist.value ? (
          <FontAwesomeIcon icon={faItunesNote} {...playlist} />
        ) : (
          <FontAwesomeIcon icon={faBars} {...playlist} />
        )}
      </TopButtonsWrapper>
      {playlist.value ? (
        <Main>
          <PlaylistWrapper>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
            <PlayerlistElement>123</PlayerlistElement>
          </PlaylistWrapper>
        </Main>
      ) : (
        <Main>
          <TitleWrapper>
            <Name>ASMR</Name>
            <Author>Soup Asmr</Author>
          </TitleWrapper>
          <ThumbnailWrapper>
            <FontAwesomeIcon
              icon={faAngleLeft}
              size="2x"
              onClick={playPrevSong}
            />
            <Thumbnail />
            <FontAwesomeIcon
              icon={faAngleRight}
              size="2x"
              onClick={playNextSong}
            />
          </ThumbnailWrapper>
        </Main>
      )}
      <Wave fill="#EFEFF8" paused={isPlay} />
      <Button onClick={toggleIsPlay}>
        {isPlay ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </Button>
    </Panel>
  );
};

const PlayerlistElement = styled.li`
  color: ${(props) => props.theme.panelFontColor};
`;

const PlaylistWrapper = styled.ul`
  overflow-y: scroll;
  list-style: none;
  width: 100%;
  height: 100%;
  margin: 0;
  /* padding: 0px 10px; */
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 45px;
  left: 50%;
  margin-left: -35px;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${(props) => props.theme.panelBgColor};
  box-shadow: rgba(0, 0, 0, 0.27) 0 10px 20px;
  color: ${(props) => props.theme.panelFontColor};
  font-size: 22px;
`;

const Thumbnail = styled.div`
  background-image: url("https://img.youtube.com/vi/K3Qzzggn--s/0.jpg");
  background-size: cover;
  background-position: center;
  width: 110px;
  height: 110px;
  box-shadow: rgba(0, 0, 0, 0.37) 0 10px 20px;
  border-radius: 7px;
  margin: 20px 30px;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.panelFontColor};
`;

const Author = styled.span`
  color: ${(props) => props.theme.darkDisabledColor};
  font-size: 12px;
  margin-top: 2px;
`;

const Name = styled.span`
  color: ${(props) => props.theme.panelFontColor};
  font-size: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopButtonsWrapper = styled.div`
  ${(props) => props.theme.topButtonsWrapper}
`;

const Main = styled.main`
  width: 100%;
  height: 196px;
`;

const Panel = styled.div`
  ${(props) => props.theme.panel}
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -150px;
  height: 440px;
  width: 300px;
`;
