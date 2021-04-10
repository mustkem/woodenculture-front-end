import Head from "next/head";

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
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rise Decor</title>
        <meta
          name="description"
          content="RiseDecor one stop solution for all wooden and interior needs"
        />
      </Head>{" "}
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
