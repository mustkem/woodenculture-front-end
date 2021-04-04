webpackHotUpdate_N_E("pages/products/[tag]",{

/***/ "./store-thunk/products/api.js":
/*!*************************************!*\
  !*** ./store-thunk/products/api.js ***!
  \*************************************/
/*! exports provided: fetchProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProducts\", function() { return fetchProducts; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./store-thunk/products/actions.js\");\n\n\n\nvar fetchProducts = function fetchProducts(params) {\n  return function (dispatch) {\n    return axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      method: \"get\",\n      url: _config__WEBPACK_IMPORTED_MODULE_0__[\"API_URL\"] + \"/feed/products\",\n      params: params\n    }).then(function (response) {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchProductsSuccess\"])(response.data));\n      return response.data;\n    })[\"catch\"](function (error) {\n      return error;\n    });\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUtdGh1bmsvcHJvZHVjdHMvYXBpLmpzPzNiNjciXSwibmFtZXMiOlsiZmV0Y2hQcm9kdWN0cyIsInBhcmFtcyIsImRpc3BhdGNoIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJBUElfVVJMIiwidGhlbiIsInJlc3BvbnNlIiwiZmV0Y2hQcm9kdWN0c1N1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRDtBQUFBLFNBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQ3JELFdBQU9DLDRDQUFLLENBQUM7QUFDWEMsWUFBTSxFQUFFLEtBREc7QUFFWEMsU0FBRyxFQUFFQywrQ0FBTyxHQUFHLGdCQUZKO0FBR1hMLFlBQU0sRUFBTkE7QUFIVyxLQUFELENBQUwsQ0FLSk0sSUFMSSxDQUtDLFVBQVVDLFFBQVYsRUFBb0I7QUFDeEJOLGNBQVEsQ0FBQ08scUVBQW9CLENBQUNELFFBQVEsQ0FBQ0UsSUFBVixDQUFyQixDQUFSO0FBQ0EsYUFBT0YsUUFBUSxDQUFDRSxJQUFoQjtBQUNELEtBUkksV0FTRSxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCLGFBQU9BLEtBQVA7QUFDRCxLQVhJLENBQVA7QUFZRCxHQWI0QjtBQUFBLENBQXRCIiwiZmlsZSI6Ii4vc3RvcmUtdGh1bmsvcHJvZHVjdHMvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBmZXRjaFByb2R1Y3RzU3VjY2VzcyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RzID0gKHBhcmFtcykgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHVybDogQVBJX1VSTCArIFwiL2ZlZWQvcHJvZHVjdHNcIixcclxuICAgIHBhcmFtcyxcclxuICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store-thunk/products/api.js\n");

/***/ })

})