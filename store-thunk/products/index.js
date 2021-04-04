import * as actions from "./actions";
import * as types from "./types";
import { productsReducer } from "./reducers";

const productsActions = {
  ...actions,
};

const productsTypes = {
  ...types,
};

export { productsActions, productsTypes, productsReducer };
