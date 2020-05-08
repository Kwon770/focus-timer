import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

export default forwardRef((props, ref) => {
  const [music, setMusic] = useState("K3Qzzggn--s");
  const myRef = useRef();

  useImperativeHandle(ref, () => ({
    changeMusic(id) {
      setMusic(id);
    },

    playMusic() {
      myRef.current.playVideo();
    },

    pauseMusic() {
      myRef.current.pauseVideo();
    },
  }));

  const a = () => {
    console.log(myRef);
    myRef.current.internalPlayer.pauseVideo();
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <YoutubeWrapper>
      <YouTube ref={myRef} videoId={music} opts={opts} />
    </YoutubeWrapper>
  );
});

const YoutubeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
