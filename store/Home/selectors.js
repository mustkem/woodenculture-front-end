import _ from "lodash";

const getState = (state) => _.get(state, "home");

export const getSubCategoriesData = (state) => {
  const _state = getState(state);
  const subCategoriesData = _.get(_state, "fetchProducts", {});
  return {
    data: _.get(subCategoriesData, "data", null),
    loading: _.get(subCategoriesData, "loading"),
    error: _.get(subCategoriesData, "error"),
  };
};
