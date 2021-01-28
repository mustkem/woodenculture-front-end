import { combineReducers } from "redux";

import { homeReducer as home } from "./Home";
import { commonReducer as common } from "./common";

export default combineReducers({
  home,
  common,
});
