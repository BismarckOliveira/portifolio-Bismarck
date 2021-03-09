import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';

import App from './pages/index';

ReactDOM.render(
  <React.StrictMode>
    <App />

    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root'),
);