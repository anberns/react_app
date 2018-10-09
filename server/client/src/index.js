// main index.js => redux / data handling

// NPM installed materialize-css module
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
 

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    // read changes to store and update components
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);
