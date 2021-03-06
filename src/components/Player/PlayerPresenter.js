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

export default ({
  title,
  author,
  thumbnail,
  isPlay,
  togglePlay,
  togglePlayerClick,
  videoIdlist,
  openCurSong,
  getThemeIdx,
  changeTheme,
  playNextSong,
  playPrevSong,
}) => {
  const playlist = useToggle(false);
  return (
    <Panel>
      <TopButtonsWrapper>
        <FontAwesomeIcon icon={faChevronLeft} onClick={togglePlayerClick} />
        {playlist.value ? (
          <FontAwesomeIcon icon={faItunesNote} {...playlist} />
        ) : (
          <FontAwesomeIcon icon={faBars} {...playlist} />
        )}
      </TopButtonsWrapper>
      {playlist.value ? (
        <Main>
          <PlaylistWrapper>
            {Object.keys(videoIdlist).map((theme, index) => (
              <PlayerlistElement
                onClick={() => changeTheme(index)}
                isSelected={index === getThemeIdx()}
              >
                {theme}
              </PlayerlistElement>
            ))}
          </PlaylistWrapper>
        </Main>
      ) : (
        <Main>
          <TitleWrapper>
            <Name>{title}</Name>
            <Author>{author}</Author>
          </TitleWrapper>
          <ThumbnailWrapper>
            <FontAwesomeIcon
              icon={faAngleLeft}
              size="2x"
              onClick={playPrevSong}
            />
            <Thumbnail url={thumbnail} onClick={openCurSong} />
            <FontAwesomeIcon
              icon={faAngleRight}
              size="2x"
              onClick={playNextSong}
            />
          </ThumbnailWrapper>
        </Main>
      )}
      <Wave fill="#EFEFF8" paused={!isPlay} />
      <Button onClick={togglePlay}>
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
  color: ${(props) =>
    props.isSelected ? props.theme.highLightColor : props.theme.panelFontColor};
  margin-bottom: 15px;
  user-select: none;
`;

const PlaylistWrapper = styled.ul`
  overflow-y: scroll;
  list-style: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0px 10px;
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
  &:hover {
    background-color: ${(props) => props.theme.lightDisabledColor};
  }
`;

const Thumbnail = styled.div`
  background-image: url(${(props) => props.url});
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
  text-align: center;
`;

const Name = styled.span`
  color: ${(props) => props.theme.panelFontColor};
  font-size: 15px;
  text-align: center;
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
  margin-top: -200px;
  margin-left: -150px;
  width: 300px;
`;
