import * as actions from "./actions";
import * as types from "./types";
import { commonReducer } from "./reducers";

import * as apis from "./api";

const commonApis = {
  ...apis,
};

const commonActions = {
  ...actions,
};

const commonTypes = {
  ...types,
};

export { commonApis, commonTypes, commonReducer, commonActions };
