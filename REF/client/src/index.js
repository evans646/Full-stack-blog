import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';//there is a problem with the react dom
import './index.css';
import './app/App.css';

import { App, serviceWorker } from './app';
import {Provider} from 'react-redux';

import 'animate.css';

import {configureStore} from './store/store';


const store = configureStore({});


ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
