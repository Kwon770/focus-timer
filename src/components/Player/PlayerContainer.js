import React, { useRef } from "react";
import YoutubePlayer from "./YoutubePlayer";
import PlayerPresenter from "./PlayerPresenter";
import {
  videoIdlist,
  getTheme,
  getCurrentSong,
  getPrevSong,
  getNextSong,
} from "./Playlist";

export default ({
  isPlay,
  isPlayerClick,
  toggleIsPlay,
  togglePlayerButton,
}) => {
  const playerRef = useRef();

  const changeTheme = (idx) => {
    getTheme(idx);
    playerRef.current.changeMusic(getCurrentSong());
  };

  const playPrevSong = () => {
    playerRef.current.changeMusic(getPrevSong());
  };

  const playNextSong = () => {
    playerRef.current.changeMusic(getNextSong());
  };

  const togglePlay = () => {
    toggleIsPlay();
    if (isPlay) {
      playerRef.current.pauseMusic();
    } else {
      playerRef.current.playMusic();
    }
  };

  return (
    <>
      <YoutubePlayer
        ref={playerRef}
        getCurrentSong={getCurrentSong}
        playNextSong={playNextSong}
      />
      {isPlayerClick ? (
        <PlayerPresenter
          isPlay={isPlay}
          toggleIsPlay={togglePlay}
          togglePlayerButton={togglePlayerButton}
          videoIdlist={videoIdlist}
          changeTheme={changeTheme}
          playNextSong={playNextSong}
          playPrevSong={playPrevSong}
        />
      ) : (
        ""
      )}
    </>
  );
};
