import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Actions from './actions';
import { Router } from './router';
import Store from './store';

Store.dispatch(Actions.App.load());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root'),
);
