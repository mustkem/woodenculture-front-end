import * as actions from "./actions";
import * as types from "./types";
import * as apis from "./api";
import { productsReducer } from "./reducers";

const productsActions = {
  ...actions,
};

const productsTypes = {
  ...types,
};

const productsApis = {
  ...apis,
};

export { productsActions, productsTypes, productsReducer, productsApis };
