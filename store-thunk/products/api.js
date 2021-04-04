import { API_URL } from "../../config";
import axios from "axios";
import { fetchProductsSuccess } from "./actions";

export const fetchProducts = (params) => (dispatch) => {
  return axios({
    method: "get",
    url: API_URL + "/feed/products",
    params,
  })
    .then(function (response) {
      dispatch(fetchProductsSuccess(response.data));
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
