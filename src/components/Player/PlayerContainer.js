import React, { useRef } from "react";
import YoutubePlayer from "./YoutubePlayer";
import PlayerPresenter from "./PlayerPresenter";

export default ({
  isPlay,
  isPlayerClick,
  toggleIsPlay,
  togglePlayerButton,
}) => {
  const playerRef = useRef();

  const playPrevSong = () => {
    playerRef.current.changeMusic("dTwj7PhpY9M");
  };

  const playNextSong = () => {
    playerRef.current.changeMusic("dTwj7PhpY9M");
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
      <YoutubePlayer ref={playerRef} />
      {isPlayerClick ? (
        <PlayerPresenter
          isPlay={isPlay}
          toggleIsPlay={togglePlay}
          togglePlayerButton={togglePlayerButton}
          playNextSong={playNextSong}
          playPrevSong={playPrevSong}
        />
      ) : (
        ""
      )}
    </>
  );
};
