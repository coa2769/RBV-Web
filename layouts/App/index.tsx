import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Login from '@pages/Login';
import Main from '@layouts/Main';

import '@components/common/common.css';

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to='/login'></Redirect>
    </Route>

    <Route exact path="/main">
      <Redirect to="/main/cog"></Redirect>
    </Route>

    <Route path="/login" component={Login}></Route>
    <Route path="/main" component={Main}></Route>
  </Switch>
)

export default App;
