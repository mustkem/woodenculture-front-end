import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "react-datepicker/dist/react-datepicker.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Assets/Style/Style.scss";
import "../CSS/App.css";
import "../CSS/main.css";
import "../Assets/Style/myAccount/myAccount.scss";

import theme from "../MaterialUI/theme";

import { appStore } from "../store";

import Layout from "../Components/Layout";

function App({ children }) {
  return (
    <Provider store={appStore}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div className="router">
              {/* <Layout> */}
              {children}
              {/* </Layout> */}
            </div>
          </Router>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
