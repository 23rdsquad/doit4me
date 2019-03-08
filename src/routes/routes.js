import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import SignIn from '../components/SignIn/SignIn'
import CreateTask from '../components/CreateTask/CreateTask'
import NotFound from "../components/NotFound/NotFound"

export default (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route path="/create" component={ CreateTask }/>
    <Route path="/signin" component={ SignIn }/>
    <Route path="*" component={ NotFound }/>
  </Switch>
);
