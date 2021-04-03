import { API_URL } from "../../config";
import axios from "axios";

export const login = async (payload) => {
  return axios({
    method: "post",
    url: API_URL + "/auth/login",
    data: payload,
  })
    .then(function (response) {
      localStorage.setItem("woodenculture-token", response.data.token);
      const data = response.data;
      data.isLogedin = true;

      return data;
    })
    .catch(function (error) {
      console.log(error);
      return { isLogedin: false };
    });
};

export const signup = async (payload) => {
  return axios({
    method: "put",
    url: API_URL + "/auth/signup",
    data: payload,
  })
    .then(function (response) {
      return { status: true };
    })
    .catch(function (error) {
      return { status: false };
    });
};

export const getUserStatus = async (payload) => {
  return axios({
    method: "get",
    url: API_URL + "/auth/status",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("woodenculture-token"),
    },
  })
    .then(function (response) {
      const data = response.data;
      data.isLogedin = true;
      return data;
    })
    .catch(function (error) {
      return { isLogedin: false };
    });
};
