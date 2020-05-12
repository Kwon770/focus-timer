import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

const PLAY = "play";
window.YTConfig = {
  host: "https://www.youtube.com",
};
// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

export default forwardRef((props, ref) => {
  const [music, setMusic] = useState(props.getCurrentSong());
  const myRef = useRef();

  useImperativeHandle(ref, () => ({
    changeMusic(id) {
      setMusic(id);
    },

    playMusic() {
      myRef.current.internalPlayer.playVideo();
      myRef.current.internalPlayer.unMute();
      myRef.current.internalPlayer.setVolume(45);
    },

    pauseMusic() {
      myRef.current.internalPlayer.pauseVideo();
    },
  }));

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 0, //
    },
  };
  return (
    <YoutubeWrapper>
      <YouTube
        ref={myRef}
        videoId={music}
        opts={opts}
        onEnd={() => props.playNextSong()}
        onReady={(e) => {
          e.target.unMute();
          e.target.setVolume(45);
          if (JSON.parse(localStorage.getItem(PLAY))) {
            e.target.playVideo();
          }
        }}
      />
    </YoutubeWrapper>
  );
});

const YoutubeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
