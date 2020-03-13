import React from 'react';
import styled from  'styled-components';

const Container = styled.header`
  height: 50px;
  width: 100%;
  background: #da552f;
  font-size: 18px;
  font-weight: bold;
  color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function Header() {
  return (
    <Container id='Wrapper-Header'>
        API
    </Container>
  );
}