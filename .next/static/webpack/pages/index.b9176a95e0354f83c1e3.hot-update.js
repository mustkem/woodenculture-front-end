webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Shared/Header/PrimaryHeader.js":
/*!***************************************************!*\
  !*** ./Components/Shared/Header/PrimaryHeader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_thunk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store-thunk/common */ "./store-thunk/common/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\woodenculture\\woodenculture-front-end\\Components\\Shared\\Header\\PrimaryHeader.js",
    _this = undefined,
    _s = $RefreshSig$();








var PrimaryHeader = function PrimaryHeader() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isMobileMenuOpen = _useState[0],
      setIsMobileMenuOpen = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(commonActions.getUserStatus());
  }, []);

  var handleMouseEnter = function handleMouseEnter(e) {
    var node = e.target;
    var liNode = node.parentNode;

    if (node instanceof HTMLElement) {
      var child = liNode.querySelectorAll(".inner-dropdown")[0];

      if (child) {
        child.style.display = "block";
      }
    }
  };

  var handleMouseLeave = function handleMouseLeave(e) {
    var node = e.target;

    if (node instanceof HTMLElement) {
      document.querySelectorAll(".inner-dropdown").forEach(function (node) {
        node.style.display = "none";
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        className: "header primary-header ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "logo",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLink, {
            to: "",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "logo-icon",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "logo-icon-2",
                children: "R"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), "Rise Decor"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav-wrap ".concat(isMobileMenuOpen ? "open" : ""),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav-section  ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "navigation-bar",
              children: menu.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  onMouseEnter: function onMouseEnter(e) {
                    handleMouseEnter(e);
                  },
                  onMouseLeave: function onMouseLeave(e) {
                    handleMouseLeave(e);
                  },
                  onClick: function onClick() {
                    document.querySelectorAll(".inner-dropdown").forEach(function (node) {
                      node.style.display = "none";
                    });
                  },
                  className: "nav-item inner-dropdown-parent",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLink, {
                    "class": "nav-link",
                    to: "/category/".concat(item.cate),
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 25
                    }, _this), item.categories.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdKeyboardArrowDown"], {
                      className: "arrow-dropdown",
                      style: {
                        marginLeft: 3
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "inner-dropdown",
                    children: item.categories.map(function (item) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLink, {
                          onClick: function onClick() {
                            document.querySelectorAll(".inner-dropdown").forEach(function (node) {
                              node.style.display = "none";
                            });
                          },
                          "class": "nav-link-inner",
                          to: "/category/".concat(item.cate),
                          children: item.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "right-pannel",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "navigation-bar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                onMouseEnter: function onMouseEnter(e) {
                  handleMouseEnter(e);
                },
                onMouseLeave: function onMouseLeave(e) {
                  handleMouseLeave(e);
                },
                onClick: function onClick() {
                  document.querySelectorAll(".inner-dropdown").forEach(function (node) {
                    node.style.display = "none";
                  });
                },
                className: "nav-item inner-dropdown-parent",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLink, {
                  className: "nav-link",
                  to: "/",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: " Company "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdKeyboardArrowDown"], {
                    className: "arrow-dropdown",
                    style: {
                      marginLeft: 3
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "inner-dropdown",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLink, {
                      to: "/contact-us",
                      children: "Contact Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLink, {
                      to: "/about-us",
                      children: "About Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          onClick: function onClick() {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          },
          className: "hamburger ".concat(isMobileMenuOpen ? "open" : ""),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};

_s(PrimaryHeader, "GplW26Q0hplzIDb8sYJ3a4RdxmE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = PrimaryHeader;
var menu = [{
  title: "Bedroom",
  cate: "bedroom",
  categories: [{
    title: "Double Bed",
    cate: "double-bed"
  }, {
    title: "Single Bed",
    cate: "single-bed"
  }]
}, {
  title: "Living",
  cate: "living",
  categories: [{
    title: "Cabinates",
    cate: "cabinates"
  }, {
    title: "Tv Tables",
    cate: "tv-tables"
  }, {
    title: "Dining Tables",
    cate: "dining-tables"
  }, {
    title: "Dining Storage",
    cate: "dining-storage"
  }]
}, {
  title: "Office",
  cate: "office",
  categories: [{
    title: "Office Interior",
    cate: "office-interior"
  }, {
    title: "Office Furniture",
    cate: "office-furniture"
  }]
}, // {
//   title: "Floor",
//   cate: "floor",
//   categories: [
//     {
//       title: "Mapple Flooring",
//       cate: "mapple-flooring",
//     },
//   ],
// },
{
  title: "Gate",
  cate: "gate",
  categories: [{
    title: "Doors",
    cate: "Doors"
  }, {
    title: "Door Frames",
    cate: "door-frames"
  }, {
    title: "Window Frames",
    cate: "window-frames"
  }, {
    title: "Door Frames",
    cate: "door-frames"
  }]
}, {
  title: "Interior",
  cate: "interior",
  categories: [{
    title: "Home Interior",
    cate: "home-nterior"
  }, {
    title: "Appartment Interior",
    cate: "appartment-interior"
  }, {
    title: "Kitchen Interior",
    cate: "kitchen-interior"
  }, {
    title: "Commercial Interior",
    cate: "commercial-interior"
  }]
}, {
  title: "Modular Kitchen",
  cate: "modular-kitchen",
  categories: []
}];
/* harmony default export */ __webpack_exports__["default"] = (PrimaryHeader);

var _c;

$RefreshReg$(_c, "PrimaryHeader");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaGFyZWQvSGVhZGVyL1ByaW1hcnlIZWFkZXIuanMiXSwibmFtZXMiOlsiUHJpbWFyeUhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImlzTW9iaWxlTWVudU9wZW4iLCJzZXRJc01vYmlsZU1lbnVPcGVuIiwidXNlRWZmZWN0IiwiY29tbW9uQWN0aW9ucyIsImdldFVzZXJTdGF0dXMiLCJoYW5kbGVNb3VzZUVudGVyIiwiZSIsIm5vZGUiLCJ0YXJnZXQiLCJsaU5vZGUiLCJwYXJlbnROb2RlIiwiSFRNTEVsZW1lbnQiLCJjaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZG9jdW1lbnQiLCJmb3JFYWNoIiwibWVudSIsIm1hcCIsIml0ZW0iLCJjYXRlIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUMxQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUQwQixrQkFHc0JDLHNEQUFRLENBQUMsS0FBRCxDQUg5QjtBQUFBLE1BR25CQyxnQkFIbUI7QUFBQSxNQUdEQyxtQkFIQzs7QUFLMUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkTCxZQUFRLENBQUNNLGFBQWEsQ0FBQ0MsYUFBZCxFQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCLFFBQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFmO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRixJQUFJLENB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RUQsU0FBSyxFQUFFLE9BRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FEVSxFQUtWO0FBQ0VDLFNBQUssRUFBRSxhQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBTFUsRUFTVjtBQUNFQyxTQUFLLEVBQUUsZUFEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQVRVLEVBYVY7QUFDRUMsU0FBSyxFQUFFLGFBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FiVTtBQUhkLENBOURXLEVBcUZYO0FBQ0VDLE9BQUssRUFBRSxVQURUO0FBRUVELE1BQUksRUFBRSxVQUZSO0FBR0VFLFlBQVUsRUFBRSxDQUNWO0FBQ0VELFNBQUssRUFBRSxlQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBRFUsRUFLVjtBQUNFQyxTQUFLLEVBQUUscUJBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FMVSxFQVNWO0FBQ0VDLFNBQUssRUFBRSxrQkFEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQVRVLEVBYVY7QUFDRUMsU0FBSyxFQUFFLHFCQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBYlU7QUFIZCxDQXJGVyxFQTJHWDtBQUNFQyxPQUFLLEVBQUUsaUJBRFQ7QUFFRUQsTUFBSSxFQUFFLGlCQUZSO0FBR0VFLFlBQVUsRUFBRTtBQUhkLENBM0dXLENBQWI7QUFrSGU1Qiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOTE3NmE5NWUwMzU0ZjgzYzFlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbW1vbkFwaXMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUtdGh1bmsvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBNZEtleWJvYXJkQXJyb3dEb3duIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5jb25zdCBQcmltYXJ5SGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY29tbW9uQWN0aW9ucy5nZXRVc2VyU3RhdHVzKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaU5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGxpTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpWzBdO1xyXG4gICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZS50YXJnZXQ7XHJcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBwcmltYXJ5LWhlYWRlciBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIlwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ28taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1pY29uLTJcIj5SPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICBSaXNlIERlY29yXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtd3JhcCAke2lzTW9iaWxlTWVudU9wZW4gPyBcIm9wZW5cIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXNlY3Rpb24gIGB9PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BuYXZpZ2F0aW9uLWJhcmB9PlxyXG4gICAgICAgICAgICAgICAge21lbnUubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlRW50ZXIoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUxlYXZlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbm5lci1kcm9wZG93blwiKS5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGlubmVyLWRyb3Bkb3duLXBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3M9XCJuYXYtbGlua1wiIHRvPXtgL2NhdGVnb3J5LyR7aXRlbS5jYXRlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNhdGVnb3JpZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZEtleWJvYXJkQXJyb3dEb3duIGNsYXNzTmFtZT1cImFycm93LWRyb3Bkb3duXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5uZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2F0ZWdvcmllcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbm5lci1kcm9wZG93blwiKS5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rLWlubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke2l0ZW0uY2F0ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtcGFubmVsXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlRW50ZXIoZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUxlYXZlKGUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbm5lci1kcm9wZG93blwiKS5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gaW5uZXItZHJvcGRvd24tcGFyZW50XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gQ29tcGFueSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1kS2V5Ym9hcmRBcnJvd0Rvd24gY2xhc3NOYW1lPVwiYXJyb3ctZHJvcGRvd25cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAzIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubmVyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9jb250YWN0LXVzXCI+Q29udGFjdCBVczwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXQtdXNcIj5BYm91dCBVczwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vYmlsZU1lbnVPcGVuKCFpc01vYmlsZU1lbnVPcGVuKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGFtYnVyZ2VyICR7aXNNb2JpbGVNZW51T3BlbiA/IFwib3BlblwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IG1lbnUgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmVkcm9vbVwiLFxyXG4gICAgY2F0ZTogXCJiZWRyb29tXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRG91YmxlIEJlZFwiLFxyXG4gICAgICAgIGNhdGU6IFwiZG91YmxlLWJlZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2luZ2xlIEJlZFwiLFxyXG4gICAgICAgIGNhdGU6IFwic2luZ2xlLWJlZFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxpdmluZ1wiLFxyXG4gICAgY2F0ZTogXCJsaXZpbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkNhYmluYXRlc1wiLFxyXG4gICAgICAgIGNhdGU6IFwiY2FiaW5hdGVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJUdiBUYWJsZXNcIixcclxuICAgICAgICBjYXRlOiBcInR2LXRhYmxlc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRGluaW5nIFRhYmxlc1wiLFxyXG4gICAgICAgIGNhdGU6IFwiZGluaW5nLXRhYmxlc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRGluaW5nIFN0b3JhZ2VcIixcclxuICAgICAgICBjYXRlOiBcImRpbmluZy1zdG9yYWdlXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiT2ZmaWNlXCIsXHJcbiAgICBjYXRlOiBcIm9mZmljZVwiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiT2ZmaWNlIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJvZmZpY2UtaW50ZXJpb3JcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk9mZmljZSBGdXJuaXR1cmVcIixcclxuICAgICAgICBjYXRlOiBcIm9mZmljZS1mdXJuaXR1cmVcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogXCJGbG9vclwiLFxyXG4gIC8vICAgY2F0ZTogXCJmbG9vclwiLFxyXG4gIC8vICAgY2F0ZWdvcmllczogW1xyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgdGl0bGU6IFwiTWFwcGxlIEZsb29yaW5nXCIsXHJcbiAgLy8gICAgICAgY2F0ZTogXCJtYXBwbGUtZmxvb3JpbmdcIixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIF0sXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJHYXRlXCIsXHJcbiAgICBjYXRlOiBcImdhdGVcIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkRvb3JzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJEb29yc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRG9vciBGcmFtZXNcIixcclxuICAgICAgICBjYXRlOiBcImRvb3ItZnJhbWVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJXaW5kb3cgRnJhbWVzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJ3aW5kb3ctZnJhbWVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEb29yIEZyYW1lc1wiLFxyXG4gICAgICAgIGNhdGU6IFwiZG9vci1mcmFtZXNcIixcclxuICAgICAgfSxcclxuXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSW50ZXJpb3JcIixcclxuICAgIGNhdGU6IFwiaW50ZXJpb3JcIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkhvbWUgSW50ZXJpb3JcIixcclxuICAgICAgICBjYXRlOiBcImhvbWUtbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQXBwYXJ0bWVudCBJbnRlcmlvclwiLFxyXG4gICAgICAgIGNhdGU6IFwiYXBwYXJ0bWVudC1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiS2l0Y2hlbiBJbnRlcmlvclwiLFxyXG4gICAgICAgIGNhdGU6IFwia2l0Y2hlbi1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29tbWVyY2lhbCBJbnRlcmlvclwiLFxyXG4gICAgICAgIGNhdGU6IFwiY29tbWVyY2lhbC1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vZHVsYXIgS2l0Y2hlblwiLFxyXG4gICAgY2F0ZTogXCJtb2R1bGFyLWtpdGNoZW5cIixcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5SGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9