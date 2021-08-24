import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import './global.css';

const App = () => {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
