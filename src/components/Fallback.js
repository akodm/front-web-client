import React from 'react';
import styled from 'styled-components';

const FallbackUi = styled.div`
  font-size: calc(20px + 1vmin);
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Fallback = () => {
  return (
    <FallbackUi>
      Loading ..
    </FallbackUi>
  );
}

export default Fallback;