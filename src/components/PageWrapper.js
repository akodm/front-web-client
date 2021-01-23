import React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  font-size: calc(10px + 2vmin);
  position: relative;
`;

const PageWrapper = props => {
  const { children } = props;
  return (
    <WrapperContainer>
      {children}
    </WrapperContainer>
  );
}

export default PageWrapper;