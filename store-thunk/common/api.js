import { API_URL } from "../../config";
import axios from "axios";
import {
  loginSucess,
  login as loginInitiate,
  getUserStatus as getUserStatusAction,
} from "./actions";

export const login = (payload) => (dispatch) => {
  dispatch(loginInitiate());
  return axios({
    method: "post",
    url: API_URL + "/auth/login",
    data: payload,
  })
    .then(function (response) {
      localStorage.setItem("woodenculture-token", response.data.token);
      const data = response.data;
      data.isLogedin = true;
      dispatch(loginSucess(data));
      return data;
    })
    .catch(function (error) {
      console.log(error);
      return { isLogedin: false };
    });
};

export const signup = (payload) => (dispatch) => {
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

export const getUserStatus = (payload) => (dispatch) => {
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
      console.log("testddddd", data);
      dispatch(loginSucess(data));

      return data;
    })
    .catch(function (error) {
      return { isLogedin: false };
    });
};
