import { ActionTypes } from './product-types';
import mockProducts from '../../mocks/products';

const INITIAL_STATE = {
  products: mockProducts,
  currentItem: null
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case ActionTypes.SET_PRODUCTS:
    //   return {};
    // case ActionTypes.SELECTED_PRODUCT:
    //   return {};
    case ActionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
