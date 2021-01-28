import { call, put, takeLatest } from "redux-saga/effects";

import * as types from "./types";
import { login as loginApi, signup as signupApi } from "./api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
  try {
    // do api call
    const response = yield call(loginApi, action.payload);
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: types.LOGIN_FAILED,
      error: error && error.message,
    });
  }
}

function* signup(action) {
  try {
    // do api call
    const response = yield call(signupApi, action.payload);
    yield put({
      type: types.SIGNUP_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: types.SIGNUP_FAILED,
      error: error && error.message,
    });
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* commonSagas() {
  yield takeLatest(types.LOGIN, login);
  yield takeLatest(types.SIGNUP, signup);
}
