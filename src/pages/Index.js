import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: gray;
  position: relative;
  z-index: 1;
`;

const Index = props => {
  return (
    <Container>
      First Page.
    </Container>
  );
}

export default Index;