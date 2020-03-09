import React from 'react';
import {BrowserRouter as Route, Switch, BrowserRouter} from 'react-router-dom';
import Funcao from '../Hooks/Funcao';
import Classes from '../Hooks/Classes';
import HomePage from '../View/HomePage';

export default function Routes() {
  return (
    <div>
      <BrowserRouter basename='app'>
        <Switch>
          <Route exact path='/'><HomePage /></Route>
          <Route exact path='/funcao'><Funcao /></Route>
          <Route exact path='/classes'><Classes /></Route>
          <Route><div>Pagina não encontrada</div></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}