import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

const surveyReducer = (state=[], action) => {
  if (action.type === 'SEND_FEEDBACK'){
      return [...state, action.payload];
  }
  else if(action.type === `UNDO_LAST`){
    state.pop();
    return state;
  }
  else if(action.type === 'RESET'){
    return [];
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
      surveyReducer,
  }),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
