import {createStore, combineReducers} from 'redux';

import counterReducer from './counter';
import listReducer from './productList';
import productReducer from './productDetails';

const rootReducer = combineReducers({
  counter: counterReducer,
  list: listReducer,
  detail: productReducer,
});

export default createStore(rootReducer);
