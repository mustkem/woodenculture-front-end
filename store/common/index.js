import * as actions from "./actions";
import * as types from "./types";
import sagas from "./sagas";
import { commonReducer } from "./reducers";

const commonSagas = [sagas()];

const commonActions = {
  ...actions,
};

const commonTypes = {
  ...types,
};

export { commonActions, commonTypes, commonSagas, commonReducer };
