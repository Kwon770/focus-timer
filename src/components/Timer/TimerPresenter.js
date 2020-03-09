import React from "react";
import styled from "styled-components";
import Store from "store";

const TimerPresenter = () => (
  <Container>
    <DigitalTimer>1111</DigitalTimer>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1abc9c;
`;

const DigitalTimer = styled.span`
  color: white;
`;

export default TimerPresenter;
