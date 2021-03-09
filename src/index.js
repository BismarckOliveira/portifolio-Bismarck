import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';

import Dashboard from './pages/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />

    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root'),
);