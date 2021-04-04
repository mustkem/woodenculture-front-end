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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zPlV");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tyWD");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K7k0");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("OdrH");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_myAccount_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("DfTI");
/* harmony import */ var _styles_myAccount_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_myAccount_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("EvPg");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_thunk_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("plQo");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import "react-datepicker/dist/react-datepicker.css";








const WrappedApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps));
};

/* harmony default export */ __webpack_exports__["default"] = (_store_thunk_store__WEBPACK_IMPORTED_MODULE_8__[/* wrapper */ "a"].withRedux(WrappedApp));

/***/ }),

/***/ "Bk6j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ commonApis; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ commonReducer; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ commonActions; });

// UNUSED EXPORTS: commonTypes

// NAMESPACE OBJECT: ./store-thunk/common/types.js
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, "LOGIN", function() { return LOGIN; });
__webpack_require__.d(types_namespaceObject, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
__webpack_require__.d(types_namespaceObject, "LOGIN_FAILED", function() { return LOGIN_FAILED; });
__webpack_require__.d(types_namespaceObject, "LOGIN_CLEAR", function() { return LOGIN_CLEAR; });
__webpack_require__.d(types_namespaceObject, "SIGNUP", function() { return SIGNUP; });
__webpack_require__.d(types_namespaceObject, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
__webpack_require__.d(types_namespaceObject, "SIGNUP_FAILED", function() { return SIGNUP_FAILED; });
__webpack_require__.d(types_namespaceObject, "SIGNUP_CLEAR", function() { return SIGNUP_CLEAR; });
__webpack_require__.d(types_namespaceObject, "GET_USER_STATUS", function() { return GET_USER_STATUS; });
__webpack_require__.d(types_namespaceObject, "GET_USER_STATUS_SUCCESS", function() { return GET_USER_STATUS_SUCCESS; });
__webpack_require__.d(types_namespaceObject, "GET_USER_STATUS_FAILED", function() { return GET_USER_STATUS_FAILED; });
__webpack_require__.d(types_namespaceObject, "SET_LOGIN_MODEL", function() { return SET_LOGIN_MODEL; });

// NAMESPACE OBJECT: ./store-thunk/common/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "login", function() { return login; });
__webpack_require__.d(actions_namespaceObject, "loginSucess", function() { return loginSucess; });
__webpack_require__.d(actions_namespaceObject, "signup", function() { return signup; });
__webpack_require__.d(actions_namespaceObject, "getUserStatus", function() { return getUserStatus; });
__webpack_require__.d(actions_namespaceObject, "setLoginModel", function() { return setLoginModel; });

// NAMESPACE OBJECT: ./store-thunk/common/api.js
var api_namespaceObject = {};
__webpack_require__.r(api_namespaceObject);
__webpack_require__.d(api_namespaceObject, "login", function() { return api_login; });
__webpack_require__.d(api_namespaceObject, "signup", function() { return api_signup; });
__webpack_require__.d(api_namespaceObject, "getUserStatus", function() { return api_getUserStatus; });

// CONCATENATED MODULE: ./store-thunk/common/types.js
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
// CONCATENATED MODULE: ./store-thunk/common/actions.js

const login = payload => {
  return {
    type: LOGIN,
    payload
  };
};
const loginSucess = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};
const signup = payload => {
  return {
    type: SIGNUP,
    payload
  };
};
const getUserStatus = payload => {
  return {
    type: GET_USER_STATUS,
    payload
  };
};
const setLoginModel = payload => {
  return {
    type: SET_LOGIN_MODEL,
    payload
  };
};
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./store-thunk/common/reducers.js
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

const reducers_signup = (state = signupData, action) => {
  switch (action.type) {
    case SIGNUP:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          error: null
        });
      }

    case SIGNUP_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          data: action.payload
        });
      }

    case SIGNUP_FAILED:
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
    case LOGIN:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          error: null
        });
      }

    case LOGIN_SUCCESS:
      {
        console.log("test1", action.payload);
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          data: action.payload
        });
      }

    case LOGIN_FAILED:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.error
        });
      }

    case GET_USER_STATUS_SUCCESS:
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
    case SET_LOGIN_MODEL:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loginModel: action.payload
        });
      }

    default:
      return state;
  }
};

const commonReducer = Object(external_redux_["combineReducers"])({
  user,
  signup: reducers_signup,
  duck
});
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./store-thunk/common/api.js



const api_login = payload => dispatch => {
  dispatch(login());
  return external_axios_default()({
    method: "post",
    url: config["a" /* API_URL */] + "/auth/login",
    data: payload
  }).then(function (response) {
    localStorage.setItem("woodenculture-token", response.data.token);
    const data = response.data;
    data.isLogedin = true;
    dispatch(loginSucess(data));
    return data;
  }).catch(function (error) {
    console.log(error);
    return {
      isLogedin: false
    };
  });
};
const api_signup = payload => dispatch => {
  return external_axios_default()({
    method: "put",
    url: config["a" /* API_URL */] + "/auth/signup",
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
const api_getUserStatus = payload => dispatch => {
  return external_axios_default()({
    method: "get",
    url: config["a" /* API_URL */] + "/auth/status",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("woodenculture-token")
    }
  }).then(function (response) {
    const data = response.data;
    data.isLogedin = true;
    console.log("testddddd", data);
    dispatch(loginSucess(data));
    return data;
  }).catch(function (error) {
    return {
      isLogedin: false
    };
  });
};
// CONCATENATED MODULE: ./store-thunk/common/index.js
function common_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function common_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { common_ownKeys(Object(source), true).forEach(function (key) { common_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { common_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function common_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const commonApis = common_objectSpread({}, api_namespaceObject);

const commonActions = common_objectSpread({}, actions_namespaceObject);

const commonTypes = common_objectSpread({}, types_namespaceObject);



/***/ }),

/***/ "DfTI":
/***/ (function(module, exports) {



/***/ }),

/***/ "EvPg":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "OdrH":
/***/ (function(module, exports) {



/***/ }),

/***/ "QJtX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ productsReducer; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ productsApis; });

// UNUSED EXPORTS: productsActions, productsTypes

// NAMESPACE OBJECT: ./store-thunk/products/types.js
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, "FETCH_PRODUCTS", function() { return FETCH_PRODUCTS; });
__webpack_require__.d(types_namespaceObject, "FETCH_PRODUCTS_SUCCESS", function() { return FETCH_PRODUCTS_SUCCESS; });
__webpack_require__.d(types_namespaceObject, "FETCH_PRODUCTS_FAILED", function() { return FETCH_PRODUCTS_FAILED; });
__webpack_require__.d(types_namespaceObject, "FETCH_PRODUCTS_CLEAR", function() { return FETCH_PRODUCTS_CLEAR; });

// NAMESPACE OBJECT: ./store-thunk/products/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "fetchProducts", function() { return fetchProducts; });
__webpack_require__.d(actions_namespaceObject, "fetchProductsSuccess", function() { return fetchProductsSuccess; });

// NAMESPACE OBJECT: ./store-thunk/products/api.js
var api_namespaceObject = {};
__webpack_require__.r(api_namespaceObject);
__webpack_require__.d(api_namespaceObject, "fetchProducts", function() { return api_fetchProducts; });

// CONCATENATED MODULE: ./store-thunk/products/types.js
const moduleName = "PRODUCTS";
const FETCH_PRODUCTS = `${moduleName}/FETCH_PRODUCTS`;
const FETCH_PRODUCTS_SUCCESS = `${moduleName}/FETCH_PRODUCTS_SUCCESS`;
const FETCH_PRODUCTS_FAILED = `${moduleName}/FETCH_PRODUCTS_FAILED`;
const FETCH_PRODUCTS_CLEAR = `${moduleName}/FETCH_PRODUCTS_CLEAR`;
// CONCATENATED MODULE: ./store-thunk/products/actions.js

const fetchProducts = payload => {
  return {
    type: FETCH_PRODUCTS,
    payload
  };
};
const fetchProductsSuccess = payload => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload
  };
};
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./store-thunk/products/api.js



const api_fetchProducts = params => dispatch => {
  return external_axios_default()({
    method: "get",
    url: config["a" /* API_URL */] + "/feed/products",
    params
  }).then(function (response) {
    dispatch(fetchProductsSuccess(response.data));
    return response.data;
  }).catch(function (error) {
    return error;
  });
};
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./store-thunk/products/reducers.js
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

const reducers_fetchProducts = (state = initialState.fetchProducts, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          data: null,
          error: null
        });
      }

    case FETCH_PRODUCTS_SUCCESS:
      {
        // console.log("222222222222222222222222", action.payload);
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          data: action.payload
        });
      }

    case FETCH_PRODUCTS_FAILED:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.error
        });
      }

    case FETCH_PRODUCTS_CLEAR:
      {
        return _objectSpread({}, initialState.fetchProducts);
      }

    default:
      return state;
  }
};

const productsReducer = Object(external_redux_["combineReducers"])({
  fetchProducts: reducers_fetchProducts
});
// CONCATENATED MODULE: ./store-thunk/products/index.js
function products_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function products_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { products_ownKeys(Object(source), true).forEach(function (key) { products_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { products_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function products_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const productsActions = products_objectSpread({}, actions_namespaceObject);

const productsTypes = products_objectSpread({}, types_namespaceObject);

const productsApis = products_objectSpread({}, api_namespaceObject);



/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
const API_URL = "https://woodenculture-backend.herokuapp.com"; // export const API_URL = "http://localhost:8080";

/***/ }),

/***/ "plQo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ wrapper; });

// NAMESPACE OBJECT: ./store-thunk/Home/types.js
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, "FETCH_PRODUCTS", function() { return FETCH_PRODUCTS; });
__webpack_require__.d(types_namespaceObject, "FETCH_PRODUCTS_SUCCESS", function() { return FETCH_PRODUCTS_SUCCESS; });
__webpack_require__.d(types_namespaceObject, "FETCH_PRODUCTS_FAILED", function() { return FETCH_PRODUCTS_FAILED; });
__webpack_require__.d(types_namespaceObject, "FETCH_PRODUCTS_CLEAR", function() { return FETCH_PRODUCTS_CLEAR; });

// NAMESPACE OBJECT: ./store-thunk/Home/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "fetchSubCategories", function() { return fetchSubCategories; });

// NAMESPACE OBJECT: ./store-thunk/Home/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getSubCategoriesData", function() { return getSubCategoriesData; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./store-thunk/Home/types.js
const moduleName = "HOME";
const FETCH_PRODUCTS = `${moduleName}/FETCH_PRODUCTS`;
const FETCH_PRODUCTS_SUCCESS = `${moduleName}/FETCH_PRODUCTS_SUCCESS`;
const FETCH_PRODUCTS_FAILED = `${moduleName}/FETCH_PRODUCTS_FAILED`;
const FETCH_PRODUCTS_CLEAR = `${moduleName}/FETCH_PRODUCTS_CLEAR`;
// CONCATENATED MODULE: ./store-thunk/Home/actions.js

const fetchSubCategories = payload => {
  console.log("first action");
  return {
    type: FETCH_PRODUCTS,
    payload
  };
};
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./store-thunk/Home/selectors.js


const getState = state => external_lodash_default.a.get(state, "home");

const getSubCategoriesData = state => {
  const _state = getState(state);

  const subCategoriesData = external_lodash_default.a.get(_state, "fetchProducts", {});

  return {
    data: external_lodash_default.a.get(subCategoriesData, "data", null),
    loading: external_lodash_default.a.get(subCategoriesData, "loading"),
    error: external_lodash_default.a.get(subCategoriesData, "error")
  };
};
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./store-thunk/Home/api.js


const api_fetchSubCategories = async () => {
  return external_axios_default.a.get(config["a" /* API_URL */] + "/sub-categories", {// params: {
    //   ID: 12345,
    // },
  }).then(function (response) {
    return response.data.body;
  }).catch(function (error) {
    console.log(error);
  });
};
// CONCATENATED MODULE: ./store-thunk/Home/sagas.js


 // worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* sagas_fetchSubCategories(payload) {
  try {
    // do api call
    const response = yield Object(effects_["call"])(api_fetchSubCategories, payload);
    yield Object(effects_["put"])({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: FETCH_PRODUCTS_SUCCESS,
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
  yield Object(effects_["takeLatest"])(FETCH_PRODUCTS, sagas_fetchSubCategories);
}
// CONCATENATED MODULE: ./store-thunk/Home/reducers.js
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
    case FETCH_PRODUCTS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          data: null,
          error: null
        });
      }

    case FETCH_PRODUCTS_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          data: action.payload
        });
      }

    case FETCH_PRODUCTS_FAILED:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.error
        });
      }

    case FETCH_PRODUCTS_CLEAR:
      {
        return _objectSpread({}, initialState.fetchProducts);
      }

    default:
      return state;
  }
};

const homeReducer = Object(external_redux_["combineReducers"])({
  fetchProducts
});
// CONCATENATED MODULE: ./store-thunk/Home/index.js
function Home_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Home_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Home_ownKeys(Object(source), true).forEach(function (key) { Home_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Home_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Home_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const homeActions = Home_objectSpread({}, actions_namespaceObject);

const homeTypes = Home_objectSpread({}, types_namespaceObject);

const homeSelectors = Home_objectSpread({}, selectors_namespaceObject);

const Home_homeSagas = [homeSagas()];

// EXTERNAL MODULE: ./store-thunk/common/index.js + 4 modules
var common = __webpack_require__("Bk6j");

// EXTERNAL MODULE: ./store-thunk/products/index.js + 4 modules
var products = __webpack_require__("QJtX");

// CONCATENATED MODULE: ./store-thunk/reducers.js




/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  common: common["c" /* commonReducer */],
  home: homeReducer,
  products: products["b" /* productsReducer */]
}));
// CONCATENATED MODULE: ./store-thunk/store.js
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const reducer = (state, action) => {
  if (action.type === external_next_redux_wrapper_["HYDRATE"]) {
    const nextState = store_objectSpread(store_objectSpread({}, state), action.payload);

    if (state.count) nextState.count = state.count; // preserve count value on client side navigation

    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = () => {
  return Object(external_redux_["createStore"])(reducer, bindMiddleware([external_redux_thunk_default.a]));
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(initStore);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });