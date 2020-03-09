import React from 'react';
import Page from '../../components/Page';
import Content from '../../components/Content';
import styled from 'styled-components';

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
    <Page>
      <Content>
          <S.Container>
            <S.Button>Funções</S.Button>
            <S.Button>Classes</S.Button>
          </S.Container>
      </Content>
    </Page>
  );
};