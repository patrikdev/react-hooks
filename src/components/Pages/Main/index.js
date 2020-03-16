import React from 'react';
import styled from 'styled-components';

import Names from '../Names';
import CountryList  from '../Country';


const S = {
  Container: styled.div``,

  ContainerNames: styled.div`
    background: #dcdcdc;
  `,

  ContainerCountry: styled.div`
    background: #f8f8ff;
  `,
}

export default function Main() {

  return (  
    <S.Container>
      <S.ContainerNames>
        <Names />
      </S.ContainerNames>
      <S.ContainerCountry>
        <CountryList />
      </S.ContainerCountry>
    </S.Container>
  )
}