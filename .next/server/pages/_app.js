module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "https://woodenculture-backend.herokuapp.com"; // export const API_URL = "http://localhost:8080";

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_myAccount_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/myAccount.scss */ "./styles/myAccount.scss");
/* harmony import */ var _styles_myAccount_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_myAccount_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/app.scss */ "./styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_responsive_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/responsive.scss */ "./styles/responsive.scss");
/* harmony import */ var _styles_responsive_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_thunk_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store-thunk/store */ "./store-thunk/store.js");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\woodenculture\\woodenculture-front-end\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import "react-datepicker/dist/react-datepicker.css";









const WrappedApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_thunk_store__WEBPACK_IMPORTED_MODULE_9__["wrapper"].withRedux(WrappedApp));

/***/ }),

/***/ "./store-thunk/Home/actions.js":
/*!*************************************!*\
  !*** ./store-thunk/Home/actions.js ***!
  \*************************************/
/*! exports provided: fetchSubCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSubCategories", function() { return fetchSubCategories; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store-thunk/Home/types.js");

const fetchSubCategories = payload => {
  console.log("first action");
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS"],
    payload
  };
};

/***/ }),

/***/ "./store-thunk/Home/api.js":
/*!*********************************!*\
  !*** ./store-thunk/Home/api.js ***!
  \*********************************/
/*! exports provided: fetchSubCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSubCategories", function() { return fetchSubCategories; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const fetchSubCategories = async () => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + "/sub-categories", {// params: {
    //   ID: 12345,
    // },
  }).then(function (response) {
    return response.data.body;
  }).catch(function (error) {
    console.log(error);
  });
};

/***/ }),

/***/ "./store-thunk/Home/index.js":
/*!***********************************!*\
  !*** ./store-thunk/Home/index.js ***!
  \***********************************/
/*! exports provided: homeActions, homeTypes, homeSelectors, homeSagas, homeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeActions", function() { return homeActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeTypes", function() { return homeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeSelectors", function() { return homeSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeSagas", function() { return homeSagas; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store-thunk/Home/actions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store-thunk/Home/types.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./store-thunk/Home/selectors.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./store-thunk/Home/sagas.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./store-thunk/Home/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "homeReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_4__["homeReducer"]; });

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const homeActions = _objectSpread({}, _actions__WEBPACK_IMPORTED_MODULE_0__);

const homeTypes = _objectSpread({}, _types__WEBPACK_IMPORTED_MODULE_1__);

const homeSelectors = _objectSpread({}, _selectors__WEBPACK_IMPORTED_MODULE_2__);

const homeSagas = [Object(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"])()];


/***/ }),

/***/ "./store-thunk/Home/reducers.js":
/*!**************************************!*\
  !*** ./store-thunk/Home/reducers.js ***!
  \**************************************/
/*! exports provided: homeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeReducer", function() { return homeReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store-thunk/Home/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  fetchProducts: {
    data: null,
    loading: false,
    error: null
  }
};

const fetchProducts = (state = initialState.fetchProducts, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          data: null,
          error: null
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          data: action.payload
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_FAILED"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.error
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_CLEAR"]:
      {
        return _objectSpread({}, initialState.fetchProducts);
      }

    default:
      return state;
  }
};

const homeReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  fetchProducts
});

/***/ }),

/***/ "./store-thunk/Home/sagas.js":
/*!***********************************!*\
  !*** ./store-thunk/Home/sagas.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homeSagas; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store-thunk/Home/types.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./store-thunk/Home/api.js");


 // worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchSubCategories(payload) {
  try {
    // do api call
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["fetchSubCategories"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_SUCCESS"],
      payload: response
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_SUCCESS"],
      error: error && error.message
    });
  }
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/


function* homeSagas() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS"], fetchSubCategories);
}

/***/ }),

/***/ "./store-thunk/Home/selectors.js":
/*!***************************************!*\
  !*** ./store-thunk/Home/selectors.js ***!
  \***************************************/
/*! exports provided: getSubCategoriesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubCategoriesData", function() { return getSubCategoriesData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const getState = state => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(state, "home");

const getSubCategoriesData = state => {
  const _state = getState(state);

  const subCategoriesData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(_state, "fetchProducts", {});

  return {
    data: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(subCategoriesData, "data", null),
    loading: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(subCategoriesData, "loading"),
    error: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(subCategoriesData, "error")
  };
};

/***/ }),

/***/ "./store-thunk/Home/types.js":
/*!***********************************!*\
  !*** ./store-thunk/Home/types.js ***!
  \***********************************/
/*! exports provided: FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_CLEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS", function() { return FETCH_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_SUCCESS", function() { return FETCH_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_FAILED", function() { return FETCH_PRODUCTS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_CLEAR", function() { return FETCH_PRODUCTS_CLEAR; });
const moduleName = "HOME";
const FETCH_PRODUCTS = `${moduleName}/FETCH_PRODUCTS`;
const FETCH_PRODUCTS_SUCCESS = `${moduleName}/FETCH_PRODUCTS_SUCCESS`;
const FETCH_PRODUCTS_FAILED = `${moduleName}/FETCH_PRODUCTS_FAILED`;
const FETCH_PRODUCTS_CLEAR = `${moduleName}/FETCH_PRODUCTS_CLEAR`;

/***/ }),

/***/ "./store-thunk/common/actions.js":
/*!***************************************!*\
  !*** ./store-thunk/common/actions.js ***!
  \***************************************/
/*! exports provided: login, loginSucess, signup, getUserStatus, setLoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSucess", function() { return loginSucess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserStatus", function() { return getUserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoginModel", function() { return setLoginModel; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store-thunk/common/types.js");

const login = payload => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN"],
    payload
  };
};
const loginSucess = payload => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
    payload
  };
};
const signup = payload => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SIGNUP"],
    payload
  };
};
const getUserStatus = payload => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_USER_STATUS"],
    payload
  };
};
const setLoginModel = payload => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_LOGIN_MODEL"],
    payload
  };
};

/***/ }),

/***/ "./store-thunk/common/api.js":
/*!***********************************!*\
  !*** ./store-thunk/common/api.js ***!
  \***********************************/
/*! exports provided: login, signup, getUserStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserStatus", function() { return getUserStatus; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./store-thunk/common/actions.js");



const login = payload => dispatch => {
  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["login"])());
  return axios__WEBPACK_IMPORTED_MODULE_1___default()({
    method: "post",
    url: _config__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + "/auth/login",
    data: payload
  }).then(function (response) {
    localStorage.setItem("woodenculture-token", response.data.token);
    const data = response.data;
    data.isLogedin = true;
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["loginSucess"])(data));
    return data;
  }).catch(function (error) {
    console.log(error);
    return {
      isLogedin: false
    };
  });
};
const signup = payload => dispatch => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default()({
    method: "put",
    url: _config__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + "/auth/signup",
    data: payload
  }).then(function (response) {
    return {
      status: true
    };
  }).catch(function (error) {
    return {
      status: false
    };
  });
};
const getUserStatus = payload => dispatch => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default()({
    method: "get",
    url: _config__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + "/auth/status",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("woodenculture-token")
    }
  }).then(function (response) {
    const data = response.data;
    data.isLogedin = true;
    console.log("testddddd", data);
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["loginSucess"])(data));
    return data;
  }).catch(function (error) {
    return {
      isLogedin: false
    };
  });
};

/***/ }),

/***/ "./store-thunk/common/index.js":
/*!*************************************!*\
  !*** ./store-thunk/common/index.js ***!
  \*************************************/
/*! exports provided: commonApis, commonTypes, commonReducer, commonActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonApis", function() { return commonApis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonTypes", function() { return commonTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonActions", function() { return commonActions; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store-thunk/common/actions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store-thunk/common/types.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./store-thunk/common/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["commonReducer"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./store-thunk/common/api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const commonApis = _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_3__);

const commonActions = _objectSpread({}, _actions__WEBPACK_IMPORTED_MODULE_0__);

const commonTypes = _objectSpread({}, _types__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./store-thunk/common/reducers.js":
/*!****************************************!*\
  !*** ./store-thunk/common/reducers.js ***!
  \****************************************/
/*! exports provided: commonReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonReducer", function() { return commonReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store-thunk/common/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  user: {
    data: null,
    loading: false,
    error: null
  }
};
const duckData = {
  loginModel: false
};
const signupData = {
  data: {
    status: false
  },
  loading: true,
  error: null
};

const signup = (state = signupData, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["SIGNUP"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          error: null
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          data: action.payload
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_FAILED"]:
      {
        return {
          data: action.payload,
          loading: false,
          error: action.error
        };
      }

    default:
      return state;
  }
};

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          error: null
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
      {
        console.log("test1", action.payload);
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          data: action.payload
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAILED"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.error
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["GET_USER_STATUS_SUCCESS"]:
      {
        console.log("test2", action.payload);
        return _objectSpread(_objectSpread({}, state), {}, {
          data: action.payload,
          loading: false
        });
      }

    default:
      return state;
  }
};

const duck = (state = duckData, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_LOGIN_MODEL"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loginModel: action.payload
        });
      }

    default:
      return state;
  }
};

const commonReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user,
  signup,
  duck
});

/***/ }),

/***/ "./store-thunk/common/types.js":
/*!*************************************!*\
  !*** ./store-thunk/common/types.js ***!
  \*************************************/
/*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_CLEAR, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILED, SIGNUP_CLEAR, GET_USER_STATUS, GET_USER_STATUS_SUCCESS, GET_USER_STATUS_FAILED, SET_LOGIN_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILED", function() { return LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_CLEAR", function() { return LOGIN_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_FAILED", function() { return SIGNUP_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_CLEAR", function() { return SIGNUP_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_STATUS", function() { return GET_USER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_STATUS_SUCCESS", function() { return GET_USER_STATUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_STATUS_FAILED", function() { return GET_USER_STATUS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOGIN_MODEL", function() { return SET_LOGIN_MODEL; });
const moduleName = "USER";
const LOGIN = `${moduleName}/LOGIN`;
const LOGIN_SUCCESS = `${moduleName}/LOGIN_SUCCESS`;
const LOGIN_FAILED = `${moduleName}/LOGIN_FAILED`;
const LOGIN_CLEAR = `${moduleName}/LOGIN_CLEAR`;
const SIGNUP = `${moduleName}/SIGNUP`;
const SIGNUP_SUCCESS = `${moduleName}/SIGNUP_SUCCESS`;
const SIGNUP_FAILED = `${moduleName}/SIGNUP_FAILED`;
const SIGNUP_CLEAR = `${moduleName}/SIGNUP_CLEAR`;
const GET_USER_STATUS = `${moduleName}/GET_USER_STATUS`;
const GET_USER_STATUS_SUCCESS = `${moduleName}/GET_USER_STATUS_SUCCESS`;
const GET_USER_STATUS_FAILED = `${moduleName}/GET_USER_STATUS_FAILED`;
const SET_LOGIN_MODEL = `${moduleName}/SET_LOGIN_MODEL`;

/***/ }),

/***/ "./store-thunk/products/actions.js":
/*!*****************************************!*\
  !*** ./store-thunk/products/actions.js ***!
  \*****************************************/
/*! exports provided: fetchProducts, fetchProductsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductsSuccess", function() { return fetchProductsSuccess; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store-thunk/products/types.js");

const fetchProducts = payload => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS"],
    payload
  };
};
const fetchProductsSuccess = payload => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_SUCCESS"],
    payload
  };
};

/***/ }),

/***/ "./store-thunk/products/api.js":
/*!*************************************!*\
  !*** ./store-thunk/products/api.js ***!
  \*************************************/
/*! exports provided: fetchProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./store-thunk/products/actions.js");



const fetchProducts = params => dispatch => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default()({
    method: "get",
    url: _config__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + "/feed/products",
    params
  }).then(function (response) {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchProductsSuccess"])(response.data));
    return response.data;
  }).catch(function (error) {
    return error;
  });
};

/***/ }),

/***/ "./store-thunk/products/index.js":
/*!***************************************!*\
  !*** ./store-thunk/products/index.js ***!
  \***************************************/
/*! exports provided: productsActions, productsTypes, productsReducer, productsApis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsActions", function() { return productsActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsTypes", function() { return productsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsApis", function() { return productsApis; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store-thunk/products/actions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store-thunk/products/types.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./store-thunk/products/api.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./store-thunk/products/reducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productsReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_3__["productsReducer"]; });

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const productsActions = _objectSpread({}, _actions__WEBPACK_IMPORTED_MODULE_0__);

const productsTypes = _objectSpread({}, _types__WEBPACK_IMPORTED_MODULE_1__);

const productsApis = _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_2__);



/***/ }),

/***/ "./store-thunk/products/reducers.js":
/*!******************************************!*\
  !*** ./store-thunk/products/reducers.js ***!
  \******************************************/
/*! exports provided: productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsReducer", function() { return productsReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store-thunk/products/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  fetchProducts: {
    data: null,
    loading: false,
    error: null
  }
};

const fetchProducts = (state = initialState.fetchProducts, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          data: null,
          error: null
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_SUCCESS"]:
      {
        // console.log("222222222222222222222222", action.payload);
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          data: action.payload
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_FAILED"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.error
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUCTS_CLEAR"]:
      {
        return _objectSpread({}, initialState.fetchProducts);
      }

    default:
      return state;
  }
};

const productsReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  fetchProducts
});

/***/ }),

/***/ "./store-thunk/products/types.js":
/*!***************************************!*\
  !*** ./store-thunk/products/types.js ***!
  \***************************************/
/*! exports provided: FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_CLEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS", function() { return FETCH_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_SUCCESS", function() { return FETCH_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_FAILED", function() { return FETCH_PRODUCTS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_CLEAR", function() { return FETCH_PRODUCTS_CLEAR; });
const moduleName = "PRODUCTS";
const FETCH_PRODUCTS = `${moduleName}/FETCH_PRODUCTS`;
const FETCH_PRODUCTS_SUCCESS = `${moduleName}/FETCH_PRODUCTS_SUCCESS`;
const FETCH_PRODUCTS_FAILED = `${moduleName}/FETCH_PRODUCTS_FAILED`;
const FETCH_PRODUCTS_CLEAR = `${moduleName}/FETCH_PRODUCTS_CLEAR`;

/***/ }),

/***/ "./store-thunk/reducers.js":
/*!*********************************!*\
  !*** ./store-thunk/reducers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./store-thunk/Home/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./store-thunk/common/index.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products */ "./store-thunk/products/index.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  common: _common__WEBPACK_IMPORTED_MODULE_2__["commonReducer"],
  home: _Home__WEBPACK_IMPORTED_MODULE_1__["homeReducer"],
  products: _products__WEBPACK_IMPORTED_MODULE_3__["productsReducer"]
}));

/***/ }),

/***/ "./store-thunk/store.js":
/*!******************************!*\
  !*** ./store-thunk/store.js ***!
  \******************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./store-thunk/reducers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.count) nextState.count = state.count; // preserve count value on client side navigation

    return nextState;
  } else {
    return Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"])(state, action);
  }
};

const initStore = () => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a]));
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(initStore);

/***/ }),

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/myAccount.scss":
/*!*******************************!*\
  !*** ./styles/myAccount.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/responsive.scss":
/*!********************************!*\
  !*** ./styles/responsive.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUtdGh1bmsvSG9tZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlLXRodW5rL0hvbWUvYXBpLmpzIiwid2VicGFjazovLy8uL3N0b3JlLXRodW5rL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUtdGh1bmsvSG9tZS9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS10aHVuay9Ib21lL3NhZ2FzLmpzIiwid2VicGFjazovLy8uL3N0b3JlLXRodW5rL0hvbWUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3N0b3JlLXRodW5rL0hvbWUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUtdGh1bmsvY29tbW9uL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUtdGh1bmsvY29tbW9uL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS10aHVuay9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUtdGh1bmsvY29tbW9uL3JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3N0b3JlLXRodW5rL2NvbW1vbi90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS10aHVuay9wcm9kdWN0cy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlLXRodW5rL3Byb2R1Y3RzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS10aHVuay9wcm9kdWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS10aHVuay9wcm9kdWN0cy9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS10aHVuay9wcm9kdWN0cy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS10aHVuay9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS10aHVuay9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJXcmFwcGVkQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImZldGNoU3ViQ2F0ZWdvcmllcyIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInR5cGVzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJob21lQWN0aW9ucyIsImFjdGlvbnMiLCJob21lVHlwZXMiLCJob21lU2VsZWN0b3JzIiwic2VsZWN0b3JzIiwiaG9tZVNhZ2FzIiwic2FnYXMiLCJpbml0aWFsU3RhdGUiLCJmZXRjaFByb2R1Y3RzIiwibG9hZGluZyIsInN0YXRlIiwiYWN0aW9uIiwiaG9tZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJjYWxsIiwiZmV0Y2hTdWJDYXRlZ29yaWVzQXBpIiwicHV0IiwibWVzc2FnZSIsInRha2VMYXRlc3QiLCJnZXRTdGF0ZSIsIl8iLCJnZXRTdWJDYXRlZ29yaWVzRGF0YSIsIl9zdGF0ZSIsInN1YkNhdGVnb3JpZXNEYXRhIiwibW9kdWxlTmFtZSIsIkZFVENIX1BST0RVQ1RTIiwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RTX0ZBSUxFRCIsIkZFVENIX1BST0RVQ1RTX0NMRUFSIiwibG9naW4iLCJsb2dpblN1Y2VzcyIsInNpZ251cCIsImdldFVzZXJTdGF0dXMiLCJzZXRMb2dpbk1vZGVsIiwiZGlzcGF0Y2giLCJsb2dpbkluaXRpYXRlIiwibWV0aG9kIiwidXJsIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwiaXNMb2dlZGluIiwic3RhdHVzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRJdGVtIiwiY29tbW9uQXBpcyIsImFwaXMiLCJjb21tb25BY3Rpb25zIiwiY29tbW9uVHlwZXMiLCJ1c2VyIiwiZHVja0RhdGEiLCJsb2dpbk1vZGVsIiwic2lnbnVwRGF0YSIsImR1Y2siLCJjb21tb25SZWR1Y2VyIiwiTE9HSU4iLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTEVEIiwiTE9HSU5fQ0xFQVIiLCJTSUdOVVAiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMRUQiLCJTSUdOVVBfQ0xFQVIiLCJHRVRfVVNFUl9TVEFUVVMiLCJHRVRfVVNFUl9TVEFUVVNfU1VDQ0VTUyIsIkdFVF9VU0VSX1NUQVRVU19GQUlMRUQiLCJTRVRfTE9HSU5fTU9ERUwiLCJmZXRjaFByb2R1Y3RzU3VjY2VzcyIsInBhcmFtcyIsInByb2R1Y3RzQWN0aW9ucyIsInByb2R1Y3RzVHlwZXMiLCJwcm9kdWN0c0FwaXMiLCJwcm9kdWN0c1JlZHVjZXIiLCJjb21tb24iLCJob21lIiwicHJvZHVjdHMiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVxdWlyZSIsImFwcGx5TWlkZGxld2FyZSIsInJlZHVjZXIiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwiY291bnQiLCJyb290UmVkdWNlciIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwidGh1bmtNaWRkbGV3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LHdFQUFhLENBQUNILFNBQUQsQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJQLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly93b29kZW5jdWx0dXJlLWJhY2tlbmQuaGVyb2t1YXBwLmNvbVwiO1xyXG4vLyBleHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XHJcbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbi8vIGltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5cclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL215QWNjb3VudC5zY3NzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvYXBwLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3Jlc3BvbnNpdmUuc2Nzc1wiO1xyXG5cclxuXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmUtdGh1bmsvc3RvcmVcIjtcclxuXHJcbmNvbnN0IFdyYXBwZWRBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChXcmFwcGVkQXBwKTtcclxuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFN1YkNhdGVnb3JpZXMgPSAocGF5bG9hZCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiZmlyc3QgYWN0aW9uXCIpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiB0eXBlcy5GRVRDSF9QUk9EVUNUUyxcclxuICAgIHBheWxvYWQsXHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3ViQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXhpb3NcclxuICAgIC5nZXQoQVBJX1VSTCArIFwiL3N1Yi1jYXRlZ29yaWVzXCIsIHtcclxuICAgICAgLy8gcGFyYW1zOiB7XHJcbiAgICAgIC8vICAgSUQ6IDEyMzQ1LFxyXG4gICAgICAvLyB9LFxyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5ib2R5O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4vc2VsZWN0b3JzXCI7XHJcbmltcG9ydCBzYWdhcyBmcm9tIFwiLi9zYWdhc1wiO1xyXG5pbXBvcnQgeyBob21lUmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5jb25zdCBob21lQWN0aW9ucyA9IHtcclxuICAuLi5hY3Rpb25zLFxyXG59O1xyXG5cclxuY29uc3QgaG9tZVR5cGVzID0ge1xyXG4gIC4uLnR5cGVzLFxyXG59O1xyXG5cclxuY29uc3QgaG9tZVNlbGVjdG9ycyA9IHtcclxuICAuLi5zZWxlY3RvcnMsXHJcbn07XHJcblxyXG5jb25zdCBob21lU2FnYXMgPSBbc2FnYXMoKV07XHJcblxyXG5leHBvcnQgeyBob21lQWN0aW9ucywgaG9tZVR5cGVzLCBob21lU2VsZWN0b3JzLCBob21lU2FnYXMsIGhvbWVSZWR1Y2VyIH07XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGZldGNoUHJvZHVjdHM6IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBmZXRjaFByb2R1Y3RzID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLmZldGNoUHJvZHVjdHMsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZXMuRkVUQ0hfUFJPRFVDVFM6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIHR5cGVzLkZFVENIX1BST0RVQ1RTX1NVQ0NFU1M6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgdHlwZXMuRkVUQ0hfUFJPRFVDVFNfRkFJTEVEOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgdHlwZXMuRkVUQ0hfUFJPRFVDVFNfQ0xFQVI6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pbml0aWFsU3RhdGUuZmV0Y2hQcm9kdWN0cyxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZVJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGZldGNoUHJvZHVjdHMsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBmZXRjaFN1YkNhdGVnb3JpZXMgYXMgZmV0Y2hTdWJDYXRlZ29yaWVzQXBpIH0gZnJvbSBcIi4vYXBpXCI7XHJcblxyXG4vLyB3b3JrZXIgU2FnYTogd2lsbCBiZSBmaXJlZCBvbiBVU0VSX0ZFVENIX1JFUVVFU1RFRCBhY3Rpb25zXHJcbmZ1bmN0aW9uKiBmZXRjaFN1YkNhdGVnb3JpZXMocGF5bG9hZCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBkbyBhcGkgY2FsbFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGZldGNoU3ViQ2F0ZWdvcmllc0FwaSwgcGF5bG9hZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiB0eXBlcy5GRVRDSF9QUk9EVUNUU19TVUNDRVNTLFxyXG4gICAgICBwYXlsb2FkOiByZXNwb25zZSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiB0eXBlcy5GRVRDSF9QUk9EVUNUU19TVUNDRVNTLFxyXG4gICAgICBlcnJvcjogZXJyb3IgJiYgZXJyb3IubWVzc2FnZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICBBbHRlcm5hdGl2ZWx5IHlvdSBtYXkgdXNlIHRha2VMYXRlc3QuXHJcblxyXG4gIERvZXMgbm90IGFsbG93IGNvbmN1cnJlbnQgZmV0Y2hlcyBvZiB1c2VyLiBJZiBcIlVTRVJfRkVUQ0hfUkVRVUVTVEVEXCIgZ2V0c1xyXG4gIGRpc3BhdGNoZWQgd2hpbGUgYSBmZXRjaCBpcyBhbHJlYWR5IHBlbmRpbmcsIHRoYXQgcGVuZGluZyBmZXRjaCBpcyBjYW5jZWxsZWRcclxuICBhbmQgb25seSB0aGUgbGF0ZXN0IG9uZSB3aWxsIGJlIHJ1bi5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGhvbWVTYWdhcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KHR5cGVzLkZFVENIX1BST0RVQ1RTLCBmZXRjaFN1YkNhdGVnb3JpZXMpO1xyXG59XHJcbiIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmNvbnN0IGdldFN0YXRlID0gKHN0YXRlKSA9PiBfLmdldChzdGF0ZSwgXCJob21lXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN1YkNhdGVnb3JpZXNEYXRhID0gKHN0YXRlKSA9PiB7XHJcbiAgY29uc3QgX3N0YXRlID0gZ2V0U3RhdGUoc3RhdGUpO1xyXG4gIGNvbnN0IHN1YkNhdGVnb3JpZXNEYXRhID0gXy5nZXQoX3N0YXRlLCBcImZldGNoUHJvZHVjdHNcIiwge30pO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBfLmdldChzdWJDYXRlZ29yaWVzRGF0YSwgXCJkYXRhXCIsIG51bGwpLFxyXG4gICAgbG9hZGluZzogXy5nZXQoc3ViQ2F0ZWdvcmllc0RhdGEsIFwibG9hZGluZ1wiKSxcclxuICAgIGVycm9yOiBfLmdldChzdWJDYXRlZ29yaWVzRGF0YSwgXCJlcnJvclwiKSxcclxuICB9O1xyXG59O1xyXG4iLCJjb25zdCBtb2R1bGVOYW1lID0gXCJIT01FXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRkVUQ0hfUFJPRFVDVFMgPSBgJHttb2R1bGVOYW1lfS9GRVRDSF9QUk9EVUNUU2A7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9QUk9EVUNUU19TVUNDRVNTID0gYCR7bW9kdWxlTmFtZX0vRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTU2A7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9QUk9EVUNUU19GQUlMRUQgPSBgJHttb2R1bGVOYW1lfS9GRVRDSF9QUk9EVUNUU19GQUlMRURgO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfUFJPRFVDVFNfQ0xFQVIgPSBgJHttb2R1bGVOYW1lfS9GRVRDSF9QUk9EVUNUU19DTEVBUmA7XHJcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiB0eXBlcy5MT0dJTixcclxuICAgIHBheWxvYWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2VzcyA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHR5cGVzLkxPR0lOX1NVQ0NFU1MsXHJcbiAgICBwYXlsb2FkLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogdHlwZXMuU0lHTlVQLFxyXG4gICAgcGF5bG9hZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJTdGF0dXMgPSAocGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiB0eXBlcy5HRVRfVVNFUl9TVEFUVVMsXHJcbiAgICBwYXlsb2FkLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9naW5Nb2RlbCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHR5cGVzLlNFVF9MT0dJTl9NT0RFTCxcclxuICAgIHBheWxvYWQsXHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIGxvZ2luU3VjZXNzLFxyXG4gIGxvZ2luIGFzIGxvZ2luSW5pdGlhdGUsXHJcbiAgZ2V0VXNlclN0YXR1cyBhcyBnZXRVc2VyU3RhdHVzQWN0aW9uLFxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IChwYXlsb2FkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChsb2dpbkluaXRpYXRlKCkpO1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgdXJsOiBBUElfVVJMICsgXCIvYXV0aC9sb2dpblwiLFxyXG4gICAgZGF0YTogcGF5bG9hZCxcclxuICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid29vZGVuY3VsdHVyZS10b2tlblwiLCByZXNwb25zZS5kYXRhLnRva2VuKTtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGRhdGEuaXNMb2dlZGluID0gdHJ1ZTtcclxuICAgICAgZGlzcGF0Y2gobG9naW5TdWNlc3MoZGF0YSkpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgaXNMb2dlZGluOiBmYWxzZSB9O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gKHBheWxvYWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwicHV0XCIsXHJcbiAgICB1cmw6IEFQSV9VUkwgKyBcIi9hdXRoL3NpZ251cFwiLFxyXG4gICAgZGF0YTogcGF5bG9hZCxcclxuICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiB7IHN0YXR1czogdHJ1ZSB9O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBmYWxzZSB9O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlclN0YXR1cyA9IChwYXlsb2FkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgdXJsOiBBUElfVVJMICsgXCIvYXV0aC9zdGF0dXNcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndvb2RlbmN1bHR1cmUtdG9rZW5cIiksXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGRhdGEuaXNMb2dlZGluID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0ZGRkZGRcIiwgZGF0YSk7XHJcbiAgICAgIGRpc3BhdGNoKGxvZ2luU3VjZXNzKGRhdGEpKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgaXNMb2dlZGluOiBmYWxzZSB9O1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb21tb25SZWR1Y2VyIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFwaXMgZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5jb25zdCBjb21tb25BcGlzID0ge1xyXG4gIC4uLmFwaXMsXHJcbn07XHJcblxyXG5jb25zdCBjb21tb25BY3Rpb25zID0ge1xyXG4gIC4uLmFjdGlvbnMsXHJcbn07XHJcblxyXG5jb25zdCBjb21tb25UeXBlcyA9IHtcclxuICAuLi50eXBlcyxcclxufTtcclxuXHJcbmV4cG9ydCB7IGNvbW1vbkFwaXMsIGNvbW1vblR5cGVzLCBjb21tb25SZWR1Y2VyLCBjb21tb25BY3Rpb25zIH07XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBkdWNrRGF0YSA9IHtcclxuICBsb2dpbk1vZGVsOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHNpZ251cERhdGEgPSB7XHJcbiAgZGF0YTogeyBzdGF0dXM6IGZhbHNlIH0sXHJcbiAgbG9hZGluZzogdHJ1ZSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHNpZ251cCA9IChzdGF0ZSA9IHNpZ251cERhdGEsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZXMuU0lHTlVQOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgdHlwZXMuU0lHTlVQX1NVQ0NFU1M6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgdHlwZXMuU0lHTlVQX0ZBSUxFRDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdXNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZS51c2VyLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIHR5cGVzLkxPR0lOOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIHR5cGVzLkxPR0lOX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0MVwiLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIHR5cGVzLkxPR0lOX0ZBSUxFRDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIHR5cGVzLkdFVF9VU0VSX1NUQVRVU19TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGVzdDJcIiwgYWN0aW9uLnBheWxvYWQpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZHVjayA9IChzdGF0ZSA9IGR1Y2tEYXRhLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIHR5cGVzLlNFVF9MT0dJTl9NT0RFTDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ2luTW9kZWw6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25SZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyLFxyXG4gIHNpZ251cCxcclxuICBkdWNrLFxyXG59KTtcclxuIiwiY29uc3QgbW9kdWxlTmFtZSA9IFwiVVNFUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0gYCR7bW9kdWxlTmFtZX0vTE9HSU5gO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fU1VDQ0VTUyA9IGAke21vZHVsZU5hbWV9L0xPR0lOX1NVQ0NFU1NgO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTEVEID0gYCR7bW9kdWxlTmFtZX0vTE9HSU5fRkFJTEVEYDtcclxuZXhwb3J0IGNvbnN0IExPR0lOX0NMRUFSID0gYCR7bW9kdWxlTmFtZX0vTE9HSU5fQ0xFQVJgO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUCA9IGAke21vZHVsZU5hbWV9L1NJR05VUGA7XHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9IGAke21vZHVsZU5hbWV9L1NJR05VUF9TVUNDRVNTYDtcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9GQUlMRUQgPSBgJHttb2R1bGVOYW1lfS9TSUdOVVBfRkFJTEVEYDtcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9DTEVBUiA9IGAke21vZHVsZU5hbWV9L1NJR05VUF9DTEVBUmA7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfU1RBVFVTID0gYCR7bW9kdWxlTmFtZX0vR0VUX1VTRVJfU1RBVFVTYDtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1NUQVRVU19TVUNDRVNTID0gYCR7bW9kdWxlTmFtZX0vR0VUX1VTRVJfU1RBVFVTX1NVQ0NFU1NgO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfU1RBVFVTX0ZBSUxFRCA9IGAke21vZHVsZU5hbWV9L0dFVF9VU0VSX1NUQVRVU19GQUlMRURgO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9MT0dJTl9NT0RFTCA9IGAke21vZHVsZU5hbWV9L1NFVF9MT0dJTl9NT0RFTGA7XHJcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHR5cGVzLkZFVENIX1BST0RVQ1RTLFxyXG4gICAgcGF5bG9hZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHNTdWNjZXNzID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogdHlwZXMuRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQsXHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBmZXRjaFByb2R1Y3RzU3VjY2VzcyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzID0gKHBhcmFtcykgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHVybDogQVBJX1VSTCArIFwiL2ZlZWQvcHJvZHVjdHNcIixcclxuICAgIHBhcmFtcyxcclxuICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCAqIGFzIGFwaXMgZnJvbSBcIi4vYXBpXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzUmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5jb25zdCBwcm9kdWN0c0FjdGlvbnMgPSB7XHJcbiAgLi4uYWN0aW9ucyxcclxufTtcclxuXHJcbmNvbnN0IHByb2R1Y3RzVHlwZXMgPSB7XHJcbiAgLi4udHlwZXMsXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0c0FwaXMgPSB7XHJcbiAgLi4uYXBpcyxcclxufTtcclxuXHJcbmV4cG9ydCB7IHByb2R1Y3RzQWN0aW9ucywgcHJvZHVjdHNUeXBlcywgcHJvZHVjdHNSZWR1Y2VyLCBwcm9kdWN0c0FwaXMgfTtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZmV0Y2hQcm9kdWN0czoge1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGZldGNoUHJvZHVjdHMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUuZmV0Y2hQcm9kdWN0cywgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSB0eXBlcy5GRVRDSF9QUk9EVUNUUzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgdHlwZXMuRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzoge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMlwiLCBhY3Rpb24ucGF5bG9hZCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSB0eXBlcy5GRVRDSF9QUk9EVUNUU19GQUlMRUQ6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSB0eXBlcy5GRVRDSF9QUk9EVUNUU19DTEVBUjoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZS5mZXRjaFByb2R1Y3RzLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1JlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGZldGNoUHJvZHVjdHMsXHJcbn0pO1xyXG4iLCJjb25zdCBtb2R1bGVOYW1lID0gXCJQUk9EVUNUU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZFVENIX1BST0RVQ1RTID0gYCR7bW9kdWxlTmFtZX0vRkVUQ0hfUFJPRFVDVFNgO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyA9IGAke21vZHVsZU5hbWV9L0ZFVENIX1BST0RVQ1RTX1NVQ0NFU1NgO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfUFJPRFVDVFNfRkFJTEVEID0gYCR7bW9kdWxlTmFtZX0vRkVUQ0hfUFJPRFVDVFNfRkFJTEVEYDtcclxuZXhwb3J0IGNvbnN0IEZFVENIX1BST0RVQ1RTX0NMRUFSID0gYCR7bW9kdWxlTmFtZX0vRkVUQ0hfUFJPRFVDVFNfQ0xFQVJgO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGhvbWVSZWR1Y2VyIGFzIGhvbWUgfSBmcm9tIFwiLi9Ib21lXCI7XHJcbmltcG9ydCB7IGNvbW1vblJlZHVjZXIgYXMgY29tbW9uIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzUmVkdWNlciBhcyBwcm9kdWN0cyB9IGZyb20gXCIuL3Byb2R1Y3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGNvbW1vbixcclxuICBob21lLFxyXG4gIHByb2R1Y3RzLFxyXG59KTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTtcclxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgfVxyXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxyXG4gICAgICAuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cclxuICAgIH07XHJcbiAgICBpZiAoc3RhdGUuY291bnQpIG5leHRTdGF0ZS5jb3VudCA9IHN0YXRlLmNvdW50OyAvLyBwcmVzZXJ2ZSBjb3VudCB2YWx1ZSBvbiBjbGllbnQgc2lkZSBuYXZpZ2F0aW9uXHJcbiAgICByZXR1cm4gbmV4dFN0YXRlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbdGh1bmtNaWRkbGV3YXJlXSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==