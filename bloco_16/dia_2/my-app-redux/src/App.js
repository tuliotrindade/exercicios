import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrados from './pages/cadastrados';
import Cadastro from './pages/cadastro';

function App() {
  return ( 
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/cadastrados" component={ Cadastrados } />
          <Route path="/cadastro" component={ Cadastro } />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
