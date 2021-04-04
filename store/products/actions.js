import * as types from "./types";

export const fetchProducts = (payload) => {
  return {
    type: types.FETCH_PRODUCTS,
    payload,
  };
};
