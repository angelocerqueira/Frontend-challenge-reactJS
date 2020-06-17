import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import PostMessage from '../pages/PostMessage';
import GetMessage from '../pages/GetMessage';
import GetMemory from '../pages/GetMemory';
import Home from '../pages/Home';
import GetLive from '../pages/GetLive';


export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"  exact component={ Home } />
        <Route path="/home"  exact component={ Home } />
        <Route path="/getmessage" exact component={ GetMessage } />
        <Route path="/getmemory" exact component={ GetMemory } />
        <Route path="/live" exact component={ GetLive } />
        <Route path="/postmessage/" exact component={ PostMessage } />
      </Switch>
    </BrowserRouter>
  );
}