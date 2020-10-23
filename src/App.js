import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "react-datepicker/dist/react-datepicker.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Assets/Style/Style.scss";
import "./CSS/App.css";
import "./CSS/main.css";
import "./Assets/Style/myAccount/myAccount.scss";

import theme from "./MaterialUI/theme";

import { appStore } from "./store";

import Layout from "./Components/Layout";

import Home from "./Components/Home/Home";
import SubCategories from "./Components/SubCategories";
import SubCategoryDetail from "./Components/SubCategoryDetail";

import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/SignUp";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div className="router">
              <Layout>
                <Switch>
                  <Route exact path="/:category/:subcategory">
                    <SubCategoryDetail />
                  </Route>
                  <Route exact path="/:category">
                    <SubCategories />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/signup">
                    <Signup />
                  </Route>
                </Switch>
              </Layout>
            </div>
          </Router>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
