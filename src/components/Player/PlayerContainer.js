import React, { useRef, useState } from "react";
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
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [thumbnail, setThumbnail] = useState();

  const getSongInformation = (id) => {
    const jUrl =
      "https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + id;

    fetch(jUrl)
      .then((res) => res.json())
      .then((out) => {
        setTitle(out["title"]);
        setAuthor(out["author_name"]);
        setThumbnail(out["thumbnail_url"]);
      });
  };

  const changeTheme = (idx) => {
    getTheme(idx);
    playerRef.current.changeMusic(getCurrentSong());
    getSongInformation(getCurrentSong());
  };

  const playPrevSong = () => {
    playerRef.current.changeMusic(getPrevSong());
    getSongInformation(getCurrentSong());
  };

  const playNextSong = () => {
    playerRef.current.changeMusic(getNextSong());
    getSongInformation(getCurrentSong());
  };

  const togglePlay = () => {
    if (isPlay) {
      playerRef.current.pauseMusic();
    } else {
      playerRef.current.playMusic();
    }
    toggleIsPlay();
  };

  getSongInformation(getCurrentSong());
  return (
    <>
      <YoutubePlayer
        ref={playerRef}
        getCurrentSong={getCurrentSong}
        playNextSong={playNextSong}
      />
      {isPlayerClick ? (
        <PlayerPresenter
          title={title}
          author={author}
          thumbnail={thumbnail}
          isPlay={isPlay}
          togglePlay={togglePlay}
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
