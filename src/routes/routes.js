import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import NotFound from "../components/NotFound/NotFound";

export default (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="*" component={ NotFound }/>
  </Switch>
);
