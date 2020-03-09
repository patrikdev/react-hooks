import React from 'react';
import Page from '../../components/Page';
import Content from '../../components/Content';

export default function HomePage(){
  return (
    <Page>
      <Content>
        <button>Funções</button>
        <button>Classes</button>
      </Content>
    </Page>
  );
};