import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  max-width: 1000px;
  text-align: center;
`;

export default function Content() {
  return (
    <Wrapper>
      <button>Funções</button>
      <button>Classes</button>
    </Wrapper>
  )
}