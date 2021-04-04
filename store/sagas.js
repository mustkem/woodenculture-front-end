import { all } from "redux-saga/effects";
import { homeSagas } from "./Home";
import { productsSagas } from "./products";

import { commonSagas } from "./common";

export default function* rootSaga() {
  yield all([...commonSagas, ...productsSagas]);
}
