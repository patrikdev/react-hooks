import React from 'react';
// import Page from '../../components/Page';
import styled from 'styled-components';
import Header from '../../components/Header';
import Main from '../../components/Pages/Main';

const S = {
  Container: styled.div`
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