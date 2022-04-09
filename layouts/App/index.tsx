import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Login from '@pages/Login';
import Main from '@layouts/Main';

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to='/login'></Redirect>
    </Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/main/:type" component={Main}></Route>
  </Switch>
)

export default App;
