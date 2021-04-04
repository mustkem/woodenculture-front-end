import * as actions from "./actions";
import * as types from "./types";
import * as selectors from "./selectors";
import sagas from "./sagas";
import { productsReducer } from "./reducers";

const productsActions = {
  ...actions,
};

const productsTypes = {
  ...types,
};

const productsSelectors = {
  ...selectors,
};

const productsSagas = [sagas()];

export { productsActions, productsTypes, productsSelectors, productsSagas, productsReducer };
