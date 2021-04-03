import { API_URL } from "../../config";
import axios from "axios";

export const fetchSubCategories = async () => {
  return axios
    .get(API_URL + "/sub-categories", {
      // params: {
      //   ID: 12345,
      // },
    })
    .then(function (response) {
      return response.data.body;
    })
    .catch(function (error) {
      console.log(error);
    });
};
