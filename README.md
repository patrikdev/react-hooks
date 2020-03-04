# React Hooks
Introdução em React Hooks

- Lembrete de anotações feitas pelo site oficial do React.


### o que são Hooks ?
- Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais. Hooks não funcionam dentro de classes — eles permitem que você use React sem classes.

> Hooks são funções JavaScript, mas eles impões duas regras adicionais:

- Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de loops, condições ou funções aninhadas.

- Apenas chame Hooks de componentes funcionais. Não chame Hooks de funções JavaScript comuns. (Há apenas um outro lugar válido para se chamar Hooks — dentro dos seus próprios Hooks customizados.

> useEffect

- O Hook de Efeito, useEffect, adiciona a funcionalidade de executar efeitos colaterais através de um componente funcional. Segue a mesma finalidade do componentDidMount, componentDidUpdate, e componentWillUnmount em classes React, mas unificado em uma mesma API. 

- Quando você chama useEffect, você está dizendo ao React para executar a sua função de “efeito” após liberar as mudanças para o DOM. 

- Efeitos são declarados dentro do componente, para que eles tenham acesso as suas props e state.   

- Efeitos também podem opcionalmente especificar como “limpar” (clean up) retornando uma função após a execução deles. 