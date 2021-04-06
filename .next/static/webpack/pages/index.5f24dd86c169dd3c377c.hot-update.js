webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Home/components/OurCustomers/OurCustomers.js":
/*!*****************************************************************!*\
  !*** ./Components/Home/components/OurCustomers/OurCustomers.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Admin_Desktop_woodenculture_woodenculture_front_end_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\woodenculture\\woodenculture-front-end\\Components\\Home\\components\\OurCustomers\\OurCustomers.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Admin_Desktop_woodenculture_woodenculture_front_end_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function OurCustomers() {
  _s();

  var _this = this;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(settings),
      sliderSetting = _useState[0],
      setSliderSetting = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var windowWidth = window.innerWidth;
    console.log("testtt", windowWidth);
    var slidesToShow = windowWidth > 767 ? 4 : 1;

    var updatedSettings = _objectSpread({}, sliderSetting);

    updatedSettings.slidesToShow = slidesToShow;
    console.log("testttt", updatedSettings);
    setSliderSetting(updatedSettings);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "social-reach",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "What do people say about us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({}, settings), {}, {
        children: feedback.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "name",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: " block",
                    children: item.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "location",
                  children: item.location
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: item.comment
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, _this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(OurCustomers, "YN6tE3OJvJQNR+zLGWpzh26/yBo=");

_c = OurCustomers;
/* harmony default export */ __webpack_exports__["default"] = (OurCustomers);
var feedback = [{
  name: "Rahul Kumar",
  location: "Delhi",
  comment: "Excellent service loved the values they bought to us."
}, {
  name: "Divya Goyal",
  location: "Gurgaon",
  comment: "Thank you so much for making our home beautiful."
}, {
  name: "Jatin Malik",
  location: "Gurgaon",
  comment: "I am more than happy with the service I have received and I would have no hesitation in recommending Rise Decor."
}, {
  name: "Kishore Yerra",
  location: "Noida",
  comment: "I am impressed by their expertise, commitment and knowledge in furnitures."
}];

var _c;

$RefreshReg$(_c, "OurCustomers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lL2NvbXBvbmVudHMvT3VyQ3VzdG9tZXJzL091ckN1c3RvbWVycy5qcyJdLCJuYW1lcyI6WyJPdXJDdXN0b21lcnMiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ1c2VTdGF0ZSIsInNsaWRlclNldHRpbmciLCJzZXRTbGlkZXJTZXR0aW5nIiwidXNlRWZmZWN0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZWRTZXR0aW5ncyIsImZlZWRiYWNrIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJsb2NhdGlvbiIsImNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFDdEIsTUFBSUMsUUFBUSxHQUFHO0FBQ2JDLFFBQUksRUFBRSxLQURPO0FBRWJDLFlBQVEsRUFBRSxJQUZHO0FBR2JDLFNBQUssRUFBRSxHQUhNO0FBSWJDLGdCQUFZLEVBQUUsQ0FKRDtBQUtiQyxrQkFBYyxFQUFFO0FBTEgsR0FBZjs7QUFEc0Isa0JBUW9CQyxzREFBUSxDQUFDTixRQUFELENBUjVCO0FBQUEsTUFRZk8sYUFSZTtBQUFBLE1BUUFDLGdCQVJBOztBQVV0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFVBQTNCO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JKLFdBQXRCO0FBQ0EsUUFBTU4sWUFBWSxHQUFHTSxXQUFXLEdBQUcsR0FBZCxHQUFvQixDQUFwQixHQUF3QixDQUE3Qzs7QUFDQSxRQUFNSyxlQUFlLHFCQUFRUixhQUFSLENBQXJCOztBQUNBUSxtQkFBZSxDQUFDWCxZQUFoQixHQUErQkEsWUFBL0I7QUFDQVMsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkMsZUFBdkI7QUFDQVAsb0JBQWdCLENBQUNPLGVBQUQsQ0FBaEI7QUFDRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGtEQUFELGtDQUFZZixRQUFaO0FBQUEsa0JBQ0dnQixRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDdEIsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxFQUFmO0FBQUEsd0NBSUU7QUFBSywyQkFBUyxFQUFDLE1BQWY7QUFBQSx5Q0FDRTtBQUFNLDZCQUFTLEVBQUMsUUFBaEI7QUFBQSw4QkFBMEJBLElBQUksQ0FBQ0M7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFPRTtBQUFLLDJCQUFTLEVBQUMsVUFBZjtBQUFBLDRCQUEyQkQsSUFBSSxDQUFDRTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVdFO0FBQUEsMEJBQUlGLElBQUksQ0FBQ0c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFpQkQsU0FsQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJEOztHQWhEUXRCLFk7O0tBQUFBLFk7QUFrRE1BLDJFQUFmO0FBRUEsSUFBTWlCLFFBQVEsR0FBRyxDQUNmO0FBQ0VHLE1BQUksRUFBRSxhQURSO0FBRUVDLFVBQVEsRUFBRSxPQUZaO0FBR0VDLFNBQU8sRUFBRTtBQUhYLENBRGUsRUFNZjtBQUNFRixNQUFJLEVBQUUsYUFEUjtBQUVFQyxVQUFRLEVBQUUsU0FGWjtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQU5lLEVBV2Y7QUFDRUYsTUFBSSxFQUFFLGFBRFI7QUFFRUMsVUFBUSxFQUFFLFNBRlo7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FYZSxFQWlCZjtBQUNFRixNQUFJLEVBQUUsZUFEUjtBQUVFQyxVQUFRLEVBQUUsT0FGWjtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQWpCZSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZjI0ZGQ4NmMxNjlkZDNjMzc3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5cclxuZnVuY3Rpb24gT3VyQ3VzdG9tZXJzKCkge1xyXG4gIHZhciBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgfTtcclxuICBjb25zdCBbc2xpZGVyU2V0dGluZywgc2V0U2xpZGVyU2V0dGluZ10gPSB1c2VTdGF0ZShzZXR0aW5ncylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0ZXN0dHRcIiwgd2luZG93V2lkdGgpXHJcbiAgICBjb25zdCBzbGlkZXNUb1Nob3cgPSB3aW5kb3dXaWR0aCA+IDc2NyA/IDQgOiAxO1xyXG4gICAgY29uc3QgdXBkYXRlZFNldHRpbmdzID0geyAuLi5zbGlkZXJTZXR0aW5nIH07XHJcbiAgICB1cGRhdGVkU2V0dGluZ3Muc2xpZGVzVG9TaG93ID0gc2xpZGVzVG9TaG93O1xyXG4gICAgY29uc29sZS5sb2coXCJ0ZXN0dHR0XCIsIHVwZGF0ZWRTZXR0aW5ncylcclxuICAgIHNldFNsaWRlclNldHRpbmcodXBkYXRlZFNldHRpbmdzKTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtcmVhY2hcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8aDI+V2hhdCBkbyBwZW9wbGUgc2F5IGFib3V0IHVzPC9oMj5cclxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICB7ZmVlZGJhY2subWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiBibG9ja1wiPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25cIj57aXRlbS5sb2NhdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS5jb21tZW50fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3VyQ3VzdG9tZXJzO1xyXG5cclxuY29uc3QgZmVlZGJhY2sgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJSYWh1bCBLdW1hclwiLFxyXG4gICAgbG9jYXRpb246IFwiRGVsaGlcIixcclxuICAgIGNvbW1lbnQ6IFwiRXhjZWxsZW50IHNlcnZpY2UgbG92ZWQgdGhlIHZhbHVlcyB0aGV5IGJvdWdodCB0byB1cy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRGl2eWEgR295YWxcIixcclxuICAgIGxvY2F0aW9uOiBcIkd1cmdhb25cIixcclxuICAgIGNvbW1lbnQ6IFwiVGhhbmsgeW91IHNvIG11Y2ggZm9yIG1ha2luZyBvdXIgaG9tZSBiZWF1dGlmdWwuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkphdGluIE1hbGlrXCIsXHJcbiAgICBsb2NhdGlvbjogXCJHdXJnYW9uXCIsXHJcbiAgICBjb21tZW50OlxyXG4gICAgICBcIkkgYW0gbW9yZSB0aGFuIGhhcHB5IHdpdGggdGhlIHNlcnZpY2UgSSBoYXZlIHJlY2VpdmVkIGFuZCBJIHdvdWxkIGhhdmUgbm8gaGVzaXRhdGlvbiBpbiByZWNvbW1lbmRpbmcgUmlzZSBEZWNvci5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiS2lzaG9yZSBZZXJyYVwiLFxyXG4gICAgbG9jYXRpb246IFwiTm9pZGFcIixcclxuICAgIGNvbW1lbnQ6IFwiSSBhbSBpbXByZXNzZWQgYnkgdGhlaXIgZXhwZXJ0aXNlLCBjb21taXRtZW50IGFuZCBrbm93bGVkZ2UgaW4gZnVybml0dXJlcy5cIixcclxuICB9LFxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9