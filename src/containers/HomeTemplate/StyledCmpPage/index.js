import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const spin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${(props) => (props.primary ? "#3498db" : "red")};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;

export default function StyledCmpPage() {
  return (
    <div>
      <h3>Styled Component</h3>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Loader></Loader>
    </div>
  );
}
