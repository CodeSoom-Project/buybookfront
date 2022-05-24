import React from 'react';

import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
