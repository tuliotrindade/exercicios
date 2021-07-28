import { createStore, combineReducers } from 'redux';
import Reducer from '../reducers';

const rootReducer = combineReducers({ Reducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
);

export default store;