import * as types from "./types";

export const fetchSubCategories = (payload) => {
  console.log("first action");
  return {
    type: types.FETCH_PRODUCTS,
    payload,
  };
};
