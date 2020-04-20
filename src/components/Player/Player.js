import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

export default function Player() {
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <YoutubeWrapper>
      <YouTube videoId="K3Qzzggn--s" opts={opts} />
    </YoutubeWrapper>
  );
}

const YoutubeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
