import * as types from "./types";

export const login = (payload) => {
  return {
    type: types.LOGIN,
    payload,
  };
};

export const signup = (payload) => {
  return {
    type: types.SIGNUP,
    payload,
  };
};

export const getUserStatus = (payload) => {
  return {
    type: types.GET_USER_STATUS,
    payload,
  };
};

export const setLoginModel = (payload) => {
  return {
    type: types.SET_LOGIN_MODEL,
    payload,
  };
};
