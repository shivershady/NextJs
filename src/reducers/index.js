import { combineReducers } from "redux";

import productReducer from "./product";
import categoryReducer from "./category";
import slideReducer from "./slide";
import articleReducer from "./article";
import orderReducer from "./order";


const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  slide: slideReducer,
  article : articleReducer,
  order : orderReducer,
});

export default rootReducer;
