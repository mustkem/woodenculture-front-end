webpackHotUpdate_N_E("pages/_app",{

/***/ "./store-thunk/products/api.js":
/*!*************************************!*\
  !*** ./store-thunk/products/api.js ***!
  \*************************************/
/*! exports provided: fetchProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProducts\", function() { return fetchProducts; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./store-thunk/products/actions.js\");\n\n\n\nvar fetchProducts = function fetchProducts(payload) {\n  return function (diapatch) {\n    return axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      method: \"get\",\n      url: _config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"] + \"/feed/products\",\n      params: payload.params\n    }).then(function (response) {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchProductsSuccess\"])(response.data));\n      return response.data;\n    })[\"catch\"](function (error) {\n      return error;\n    });\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUtdGh1bmsvcHJvZHVjdHMvYXBpLmpzPzNiNjciXSwibmFtZXMiOlsiZmV0Y2hQcm9kdWN0cyIsInBheWxvYWQiLCJkaWFwYXRjaCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiQVBJX1VSTCIsInBhcmFtcyIsInRoZW4iLCJyZXNwb25zZSIsImRpc3BhdGNoIiwiZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRDtBQUFBLFNBQWEsVUFBQ0MsUUFBRCxFQUFjO0FBQ3RELFdBQU9DLDRDQUFLLENBQUM7QUFDWEMsWUFBTSxFQUFFLEtBREc7QUFFWEMsU0FBRyxFQUFFQywrQ0FBTyxHQUFHLGdCQUZKO0FBR1hDLFlBQU0sRUFBRU4sT0FBTyxDQUFDTTtBQUhMLEtBQUQsQ0FBTCxDQUtKQyxJQUxJLENBS0MsVUFBVUMsUUFBVixFQUFvQjtBQUN4QkMsY0FBUSxDQUFDQyxxRUFBb0IsQ0FBQ0YsUUFBUSxDQUFDRyxJQUFWLENBQXJCLENBQVI7QUFDQSxhQUFPSCxRQUFRLENBQUNHLElBQWhCO0FBQ0QsS0FSSSxXQVNFLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEIsYUFBT0EsS0FBUDtBQUNELEtBWEksQ0FBUDtBQVlELEdBYjRCO0FBQUEsQ0FBdEIiLCJmaWxlIjoiLi9zdG9yZS10aHVuay9wcm9kdWN0cy9hcGkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdHNTdWNjZXNzIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSAocGF5bG9hZCkgPT4gKGRpYXBhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHVybDogQVBJX1VSTCArIFwiL2ZlZWQvcHJvZHVjdHNcIixcclxuICAgIHBhcmFtczogcGF5bG9hZC5wYXJhbXMsXHJcbiAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store-thunk/products/api.js\n");

/***/ }),

/***/ "./store-thunk/products/index.js":
/*!***************************************!*\
  !*** ./store-thunk/products/index.js ***!
  \***************************************/
/*! exports provided: productsActions, productsTypes, productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsActions\", function() { return productsActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsTypes\", function() { return productsTypes; });\n/* harmony import */ var _home_mustkeem_Documents_My_Projects_all_projects_woodenculture_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./store-thunk/products/actions.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./store-thunk/products/types.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ \"./store-thunk/products/api.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./store-thunk/products/reducers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"productsReducer\", function() { return _reducers__WEBPACK_IMPORTED_MODULE_4__[\"productsReducer\"]; });\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_mustkeem_Documents_My_Projects_all_projects_woodenculture_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar productsActions = _objectSpread({}, _actions__WEBPACK_IMPORTED_MODULE_1__);\n\nvar productsTypes = _objectSpread({}, _types__WEBPACK_IMPORTED_MODULE_2__);\n\nvar productsApis = _objectSpread({}, _api__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUtdGh1bmsvcHJvZHVjdHMvaW5kZXguanM/NDA5YiJdLCJuYW1lcyI6WyJwcm9kdWN0c0FjdGlvbnMiLCJhY3Rpb25zIiwicHJvZHVjdHNUeXBlcyIsInR5cGVzIiwicHJvZHVjdHNBcGlzIiwiYXBpcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUscUJBQ2hCQyxxQ0FEZ0IsQ0FBckI7O0FBSUEsSUFBTUMsYUFBYSxxQkFDZEMsbUNBRGMsQ0FBbkI7O0FBSUEsSUFBTUMsWUFBWSxxQkFDYkMsaUNBRGEsQ0FBbEI7O0FBSUEiLCJmaWxlIjoiLi9zdG9yZS10aHVuay9wcm9kdWN0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBhcGlzIGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0c1JlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuY29uc3QgcHJvZHVjdHNBY3Rpb25zID0ge1xyXG4gIC4uLmFjdGlvbnMsXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0c1R5cGVzID0ge1xyXG4gIC4uLnR5cGVzLFxyXG59O1xyXG5cclxuY29uc3QgcHJvZHVjdHNBcGlzID0ge1xyXG4gIC4uLmFwaXMsXHJcbn07XHJcblxyXG5leHBvcnQgeyBwcm9kdWN0c0FjdGlvbnMsIHByb2R1Y3RzVHlwZXMsIHByb2R1Y3RzUmVkdWNlciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store-thunk/products/index.js\n");

/***/ })

})