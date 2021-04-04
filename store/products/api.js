import { API_URL } from "../../config";
import axios from "axios";

export const fetchProducts = async (payload) => {
  return axios({
    method: "get",
    url: API_URL + "/feed/products",
    params: payload.params,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
