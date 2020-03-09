import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

export default function Page(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};