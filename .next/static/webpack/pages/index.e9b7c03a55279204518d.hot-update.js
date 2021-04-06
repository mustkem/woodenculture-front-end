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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({}, sliderSetting), {}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lL2NvbXBvbmVudHMvT3VyQ3VzdG9tZXJzL091ckN1c3RvbWVycy5qcyJdLCJuYW1lcyI6WyJPdXJDdXN0b21lcnMiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ1c2VTdGF0ZSIsInNsaWRlclNldHRpbmciLCJzZXRTbGlkZXJTZXR0aW5nIiwidXNlRWZmZWN0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZWRTZXR0aW5ncyIsImZlZWRiYWNrIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJsb2NhdGlvbiIsImNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFDdEIsTUFBSUMsUUFBUSxHQUFHO0FBQ2JDLFFBQUksRUFBRSxLQURPO0FBRWJDLFlBQVEsRUFBRSxJQUZHO0FBR2JDLFNBQUssRUFBRSxHQUhNO0FBSWJDLGdCQUFZLEVBQUUsQ0FKRDtBQUtiQyxrQkFBYyxFQUFFO0FBTEgsR0FBZjs7QUFEc0Isa0JBUW9CQyxzREFBUSxDQUFDTixRQUFELENBUjVCO0FBQUEsTUFRZk8sYUFSZTtBQUFBLE1BUUFDLGdCQVJBOztBQVV0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFVBQTNCO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JKLFdBQXRCO0FBQ0EsUUFBTU4sWUFBWSxHQUFHTSxXQUFXLEdBQUcsR0FBZCxHQUFvQixDQUFwQixHQUF3QixDQUE3Qzs7QUFDQSxRQUFNSyxlQUFlLHFCQUFRUixhQUFSLENBQXJCOztBQUNBUSxtQkFBZSxDQUFDWCxZQUFoQixHQUErQkEsWUFBL0I7QUFDQVMsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkMsZUFBdkI7QUFDQVAsb0JBQWdCLENBQUNPLGVBQUQsQ0FBaEI7QUFDRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGtEQUFELGtDQUFZUixhQUFaO0FBQUEsa0JBQ0dTLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUN0Qiw4QkFDRTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLEVBQWY7QUFBQSx3Q0FJRTtBQUFLLDJCQUFTLEVBQUMsTUFBZjtBQUFBLHlDQUNFO0FBQU0sNkJBQVMsRUFBQyxRQUFoQjtBQUFBLDhCQUEwQkEsSUFBSSxDQUFDQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQU9FO0FBQUssMkJBQVMsRUFBQyxVQUFmO0FBQUEsNEJBQTJCRCxJQUFJLENBQUNFO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBV0U7QUFBQSwwQkFBSUYsSUFBSSxDQUFDRztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWlCRCxTQWxCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBaERRdEIsWTs7S0FBQUEsWTtBQWtETUEsMkVBQWY7QUFFQSxJQUFNaUIsUUFBUSxHQUFHLENBQ2Y7QUFDRUcsTUFBSSxFQUFFLGFBRFI7QUFFRUMsVUFBUSxFQUFFLE9BRlo7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FEZSxFQU1mO0FBQ0VGLE1BQUksRUFBRSxhQURSO0FBRUVDLFVBQVEsRUFBRSxTQUZaO0FBR0VDLFNBQU8sRUFBRTtBQUhYLENBTmUsRUFXZjtBQUNFRixNQUFJLEVBQUUsYUFEUjtBQUVFQyxVQUFRLEVBQUUsU0FGWjtBQUdFQyxTQUFPLEVBQ0w7QUFKSixDQVhlLEVBaUJmO0FBQ0VGLE1BQUksRUFBRSxlQURSO0FBRUVDLFVBQVEsRUFBRSxPQUZaO0FBR0VDLFNBQU8sRUFBRTtBQUhYLENBakJlLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5YjdjMDNhNTUyNzkyMDQ1MThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcblxyXG5mdW5jdGlvbiBPdXJDdXN0b21lcnMoKSB7XHJcbiAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICB9O1xyXG4gIGNvbnN0IFtzbGlkZXJTZXR0aW5nLCBzZXRTbGlkZXJTZXR0aW5nXSA9IHVzZVN0YXRlKHNldHRpbmdzKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRlc3R0dFwiLCB3aW5kb3dXaWR0aClcclxuICAgIGNvbnN0IHNsaWRlc1RvU2hvdyA9IHdpbmRvd1dpZHRoID4gNzY3ID8gNCA6IDE7XHJcbiAgICBjb25zdCB1cGRhdGVkU2V0dGluZ3MgPSB7IC4uLnNsaWRlclNldHRpbmcgfTtcclxuICAgIHVwZGF0ZWRTZXR0aW5ncy5zbGlkZXNUb1Nob3cgPSBzbGlkZXNUb1Nob3c7XHJcbiAgICBjb25zb2xlLmxvZyhcInRlc3R0dHRcIiwgdXBkYXRlZFNldHRpbmdzKVxyXG4gICAgc2V0U2xpZGVyU2V0dGluZyh1cGRhdGVkU2V0dGluZ3MpO1xyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1yZWFjaFwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxoMj5XaGF0IGRvIHBlb3BsZSBzYXkgYWJvdXQgdXM8L2gyPlxyXG4gICAgICAgIDxTbGlkZXIgey4uLnNsaWRlclNldHRpbmd9PlxyXG4gICAgICAgICAge2ZlZWRiYWNrLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgYmxvY2tcIj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+e2l0ZW0ubG9jYXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uY29tbWVudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE91ckN1c3RvbWVycztcclxuXHJcbmNvbnN0IGZlZWRiYWNrID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiUmFodWwgS3VtYXJcIixcclxuICAgIGxvY2F0aW9uOiBcIkRlbGhpXCIsXHJcbiAgICBjb21tZW50OiBcIkV4Y2VsbGVudCBzZXJ2aWNlIGxvdmVkIHRoZSB2YWx1ZXMgdGhleSBib3VnaHQgdG8gdXMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRpdnlhIEdveWFsXCIsXHJcbiAgICBsb2NhdGlvbjogXCJHdXJnYW9uXCIsXHJcbiAgICBjb21tZW50OiBcIlRoYW5rIHlvdSBzbyBtdWNoIGZvciBtYWtpbmcgb3VyIGhvbWUgYmVhdXRpZnVsLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJKYXRpbiBNYWxpa1wiLFxyXG4gICAgbG9jYXRpb246IFwiR3VyZ2FvblwiLFxyXG4gICAgY29tbWVudDpcclxuICAgICAgXCJJIGFtIG1vcmUgdGhhbiBoYXBweSB3aXRoIHRoZSBzZXJ2aWNlIEkgaGF2ZSByZWNlaXZlZCBhbmQgSSB3b3VsZCBoYXZlIG5vIGhlc2l0YXRpb24gaW4gcmVjb21tZW5kaW5nIFJpc2UgRGVjb3IuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIktpc2hvcmUgWWVycmFcIixcclxuICAgIGxvY2F0aW9uOiBcIk5vaWRhXCIsXHJcbiAgICBjb21tZW50OiBcIkkgYW0gaW1wcmVzc2VkIGJ5IHRoZWlyIGV4cGVydGlzZSwgY29tbWl0bWVudCBhbmQga25vd2xlZGdlIGluIGZ1cm5pdHVyZXMuXCIsXHJcbiAgfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==