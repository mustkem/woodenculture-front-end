import Home from "./Home";
import { homeActions, homeSelectors } from "../../store/Home";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { getSubCategoriesData } = homeSelectors;
  return {
    subCategories: getSubCategoriesData(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  const { fetchSubCategories } = homeActions;
  return {
    fetchSubCategories: () => dispatch(fetchSubCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
