import React from 'react';
import { Router } from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';

import Routes from './routes/index';
import history from './services/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={5000}/>
      </Router>
    </>
  );
}

export default App;
