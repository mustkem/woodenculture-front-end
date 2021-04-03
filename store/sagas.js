import { all } from "redux-saga/effects";
import { homeSagas } from "./Home";
import { commonSagas } from "./common";

export default function* rootSaga() {
  yield all([...homeSagas, ...commonSagas]);
}
