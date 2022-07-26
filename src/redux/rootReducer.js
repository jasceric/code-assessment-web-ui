import { combineReducers } from 'redux';
import productReducer from './Products/product-reducer';

const rootReducer = combineReducers({
  products: productReducer
});

export default rootReducer;
