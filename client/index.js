import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import HomePage from './components/index.js';

const appDiv = document.querySelector('#app');

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  appDiv,
  () => {
    console.log('Application rendered!');
  },
);
