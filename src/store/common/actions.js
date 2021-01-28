import * as types from "./types";

export const login = (payload) => {
  console.log("login");
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
