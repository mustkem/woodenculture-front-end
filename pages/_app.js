import { Provider } from "react-redux";

import "../styles/globals.css";

// import "react-datepicker/dist/react-datepicker.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/style.scss";
import "../styles/myAccount.scss";

import "../styles/app.scss";
import "../styles/responsive.scss";


import { wrapper } from "../store-thunk/store";

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
