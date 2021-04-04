import * as types from "./types";

export const fetchProducts = (payload) => {
  return {
    type: types.FETCH_PRODUCTS,
    payload,
  };
};

export const fetchProductsSuccess = (payload) => {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload,
  };
};
