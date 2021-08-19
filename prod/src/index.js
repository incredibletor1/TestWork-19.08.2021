import React from 'react';
import './index.css';
import ReactDOM from 'react-dom'
import App from './Pages/App';
import { Provider } from 'react-redux';
import { store } from './Store/Store'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  (<BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ),
  document.getElementById('root')
);

