import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from './layouts/App';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 
  process.env.NODE_ENV === 'production' ? process.env.PROD_SERVER_URL : `${process.env.DEV_SERVER_URL}:${process.env.FRONTEND_PORT}`;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
