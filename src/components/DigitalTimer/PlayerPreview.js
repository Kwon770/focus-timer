import React, { Component } from "react";
import styled from "styled-components";

export default class PlayerPreview extends Component {
  render() {
    return <Preview>Soup Asmr - Tokyo Cafe Asmr</Preview>;
  }
}

const Preview = styled.div`
  position: absolute;
  top: 185px;
  width: 290px;
  margin-top: 0;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  text-align: center;
  color: white;
`;
