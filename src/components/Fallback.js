import React from 'react';
import styled from 'styled-components';

const FallbackUi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.7);
  font-size: calc(20px + 1vmin);
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute;
  z-index: 1000;
`;

const Fallback = () => {
  return (
    <FallbackUi>
      Loading ..
    </FallbackUi>
  );
}

export default Fallback;