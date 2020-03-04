import React from 'react';
import {BrowserRouter as Route, Switch, BrowserRouter} from 'react-router-dom';
import Funcao from '../Hooks/Funcao';
import Classes from '../Hooks/Classes';

export default function Routes() {
  return (
    <div>
      <BrowserRouter basename='app'>
        <Switch>
          <Route exact path='/'><Funcao /></Route>
          <Route exact path='/classes'><Classes /></Route>
          <Route><div>Pagina não encontrada</div></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}