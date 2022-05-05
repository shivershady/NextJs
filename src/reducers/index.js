import { combineReducers } from "redux";

import productReducer from "./product";
import categoryReducer from "./category";
import slideReducer from "./slide";


const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  slide: slideReducer,
});

export default rootReducer;
