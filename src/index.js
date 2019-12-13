import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const REDUCER = (state=[], action) => {
  if (action.type === 'ORDER_PIZZA'){
      return action.payload
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
      REDUCER
  }),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
