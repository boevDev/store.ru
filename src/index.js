import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './utils/Context';

const rootView = document.getElementById('root');

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Context>
          <App />
        </Context>
      </BrowserRouter>
    </React.StrictMode>,
    rootView
  );
}
