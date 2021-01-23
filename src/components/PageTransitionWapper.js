import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const TransitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px;
`;

const Animated = animated(TransitionContainer);

const PageTransitionWapper = props => {
  const { children } = props;
  const useProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <Animated style={useProps}>
      {children}
    </Animated>
  );
}

export default PageTransitionWapper;