import { combineReducers } from "redux";
import * as types from "./types";

const initialState = {
  user: {
    data: null,
    loading: false,
    error: null,
  },
};

const signupData = {
  data: { status: false },
  loading: true,
  error: null,
};

const signup = (state = signupData, action) => {
  switch (action.type) {
    case types.SIGNUP: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case types.SIGNUP_FAILED: {
      return {
        data: action.payload,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case types.LOGIN: {
      return {
        ...state,
        loading: true,

        error: null,
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case types.LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export const commonReducer = combineReducers({
  user,
  signup,
});