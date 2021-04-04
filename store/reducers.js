import { combineReducers } from "redux";

import { homeReducer as home } from "./Home";
import { commonReducer as common } from "./common";
import { productsReducer as products } from "./products";

export default combineReducers({
  common,
  // home,
  products,
});
