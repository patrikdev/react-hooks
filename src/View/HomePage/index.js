import React from 'react';
// import Page from '../../components/Page';
import styled from 'styled-components';
import Header from '../../components/Header';
import Main from '../../components/Pages/main';

const S = {
  
  Container: styled.div`
  `,

  Button: styled.button`
    padding: 10px 25px;
    color: #fafafa;
    font-size: 14px;
    
  `,
}



export default function HomePage(){
  return (
    <S.Container>
        <Header />
        <Main />
    </S.Container>
  );
};