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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("testtttttttt");
    dispatch(_store_thunk_common__WEBPACK_IMPORTED_MODULE_5__["commonApis"].getUserStatus());
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
        className: "header primary-header clearfix",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "logo",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "logo-icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "logo-icon-2",
                  children: "R"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, _this), "Rise Decor"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "nav-wrap ".concat(isMobileMenuOpen ? "open" : ""),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nav-section",
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
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    "class": "nav-link",
                    href: "/products/".concat(item.cate),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: item.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 27
                      }, _this), item.categories.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdKeyboardArrowDown"], {
                        className: "arrow-dropdown",
                        style: {
                          marginLeft: 3
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "inner-dropdown",
                    children: item.categories.map(function (item) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                          onClick: function onClick() {
                            document.querySelectorAll(".inner-dropdown").forEach(function (node) {
                              node.style.display = "none";
                            });
                          },
                          "class": "nav-link-inner",
                          href: "/products/".concat(item.cate),
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: item.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 96,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                          columnNumber: 31
                        }, _this)
                      }, item.title, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 23
                  }, _this)]
                }, item.title, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
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
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  className: "nav-link",
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: " Company "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdKeyboardArrowDown"], {
                      className: "arrow-dropdown",
                      style: {
                        marginLeft: 3
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "inner-dropdown",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                      href: "/contact-us",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        children: "Contact Us"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                      href: "/about-us",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        children: "About Us"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(PrimaryHeader, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function () {
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
    title: "Storage",
    cate: "storage"
  }, {
    title: "Tables",
    cate: "tables"
  }, {
    title: "Almirahs",
    cate: "almirahs"
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
  title: "Gates",
  cate: "gates",
  categories: [{
    title: "Doors",
    cate: "doors"
  }, {
    title: "Windows",
    cate: "windows"
  }, {
    title: "Door Frames",
    cate: "door-frames"
  }, {
    title: "Window Frames",
    cate: "window-frames"
  }]
}, {
  title: "Interior",
  cate: "interior",
  categories: [{
    title: "Home Interior",
    cate: "home-interior"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaGFyZWQvSGVhZGVyL1ByaW1hcnlIZWFkZXIuanMiXSwibmFtZXMiOlsiUHJpbWFyeUhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY29tbW9uQXBpcyIsImdldFVzZXJTdGF0dXMiLCJoYW5kbGVNb3VzZUVudGVyIiwiZSIsIm5vZGUiLCJ0YXJnZXQiLCJsaU5vZGUiLCJwYXJlbnROb2RlIiwiSFRNTEVsZW1lbnQiLCJjaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZG9jdW1lbnQiLCJmb3JFYWNoIiwiaXNNb2JpbGVNZW51T3BlbiIsIm1lbnUiLCJtYXAiLCJpdGVtIiwiY2F0ZSIsInRpdGxlIiwiY2F0ZWdvcmllcyIsImxlbmd0aCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBSixZQUFRLENBQUNLLDhEQUFVLENBQUNDLGFBQVgsRUFBRCxDQUFSO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QixRQUFNQyxJQUFJLEdBQUdELENBQUMsQ0FBQ0UsTUFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxVQUFwQjs7QUFFQSxRQUFJSCxJQUFJLFlBQVlJLFdBQXBCLEVBQWlDO0FBQy9CLFVBQU1DLEtBQUss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U1Y7QUFDRUMsU0FBSyxFQUFFLGFBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FUVSxFQWFWO0FBQ0VDLFNBQUssRUFBRSxlQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBYlU7QUFIZCxDQXpEVyxFQStFWDtBQUNFQyxPQUFLLEVBQUUsVUFEVDtBQUVFRCxNQUFJLEVBQUUsVUFGUjtBQUdFRSxZQUFVLEVBQUUsQ0FDVjtBQUNFRCxTQUFLLEVBQUUsZUFEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQURVLEVBS1Y7QUFDRUMsU0FBSyxFQUFFLHFCQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBTFUsRUFTVjtBQUNFQyxTQUFLLEVBQUUsa0JBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FUVSxFQWFWO0FBQ0VDLFNBQUssRUFBRSxxQkFEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQWJVO0FBSGQsQ0EvRVcsRUFxR1g7QUFDRUMsT0FBSyxFQUFFLGlCQURUO0FBRUVELE1BQUksRUFBRSxpQkFGUjtBQUdFRSxZQUFVLEVBQUU7QUFIZCxDQXJHVyxDQUFiO0FBNEdlNUIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWYxOWNjNmZlMTJhOWNhM2UxYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbW1vbkFwaXMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUtdGh1bmsvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBNZEtleWJvYXJkQXJyb3dEb3duIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5jb25zdCBQcmltYXJ5SGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidGVzdHR0dHR0dHR0XCIpO1xyXG4gICAgZGlzcGF0Y2goY29tbW9uQXBpcy5nZXRVc2VyU3RhdHVzKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaU5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGxpTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpWzBdO1xyXG4gICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZS50YXJnZXQ7XHJcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBwcmltYXJ5LWhlYWRlciBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1pY29uLTJcIj5SPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgUmlzZSBEZWNvclxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi13cmFwICR7aXNNb2JpbGVNZW51T3BlbiA/IFwib3BlblwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJhclwiPlxyXG4gICAgICAgICAgICAgICAge21lbnUubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlRW50ZXIoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUxlYXZlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbm5lci1kcm9wZG93blwiKS5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGlubmVyLWRyb3Bkb3duLXBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9e2AvcHJvZHVjdHMvJHtpdGVtLmNhdGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1kS2V5Ym9hcmRBcnJvd0Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3ctZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbm5lci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jYXRlZ29yaWVzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGluay1pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0cy8ke2l0ZW0uY2F0ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXBhbm5lbFwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUVudGVyKGUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VMZWF2ZShlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGlubmVyLWRyb3Bkb3duLXBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBDb21wYW55IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZEtleWJvYXJkQXJyb3dEb3duIGNsYXNzTmFtZT1cImFycm93LWRyb3Bkb3duXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5uZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Db250YWN0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0LXVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1lbnUgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQmVkcm9vbVwiLFxyXG4gICAgY2F0ZTogXCJiZWRyb29tXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEb3VibGUgQmVkXCIsXHJcbiAgICAgICAgY2F0ZTogXCJkb3VibGUtYmVkXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJTaW5nbGUgQmVkXCIsXHJcbiAgICAgICAgY2F0ZTogXCJzaW5nbGUtYmVkXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGl2aW5nXCIsXHJcbiAgICBjYXRlOiBcImxpdmluZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU3RvcmFnZVwiLFxyXG4gICAgICAgIGNhdGU6IFwic3RvcmFnZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiVGFibGVzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJ0YWJsZXNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkFsbWlyYWhzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJhbG1pcmFoc1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk9mZmljZVwiLFxyXG4gICAgY2F0ZTogXCJvZmZpY2VcIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk9mZmljZSBJbnRlcmlvclwiLFxyXG4gICAgICAgIGNhdGU6IFwib2ZmaWNlLWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJPZmZpY2UgRnVybml0dXJlXCIsXHJcbiAgICAgICAgY2F0ZTogXCJvZmZpY2UtZnVybml0dXJlXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGl0bGU6IFwiRmxvb3JcIixcclxuICAvLyAgIGNhdGU6IFwiZmxvb3JcIixcclxuICAvLyAgIGNhdGVnb3JpZXM6IFtcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIHRpdGxlOiBcIk1hcHBsZSBGbG9vcmluZ1wiLFxyXG4gIC8vICAgICAgIGNhdGU6IFwibWFwcGxlLWZsb29yaW5nXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICBdLFxyXG4gIC8vIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiR2F0ZXNcIixcclxuICAgIGNhdGU6IFwiZ2F0ZXNcIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkRvb3JzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJkb29yc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV2luZG93c1wiLFxyXG4gICAgICAgIGNhdGU6IFwid2luZG93c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRG9vciBGcmFtZXNcIixcclxuICAgICAgICBjYXRlOiBcImRvb3ItZnJhbWVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJXaW5kb3cgRnJhbWVzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJ3aW5kb3ctZnJhbWVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSW50ZXJpb3JcIixcclxuICAgIGNhdGU6IFwiaW50ZXJpb3JcIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkhvbWUgSW50ZXJpb3JcIixcclxuICAgICAgICBjYXRlOiBcImhvbWUtaW50ZXJpb3JcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkFwcGFydG1lbnQgSW50ZXJpb3JcIixcclxuICAgICAgICBjYXRlOiBcImFwcGFydG1lbnQtaW50ZXJpb3JcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIktpdGNoZW4gSW50ZXJpb3JcIixcclxuICAgICAgICBjYXRlOiBcImtpdGNoZW4taW50ZXJpb3JcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbW1lcmNpYWwgSW50ZXJpb3JcIixcclxuICAgICAgICBjYXRlOiBcImNvbW1lcmNpYWwtaW50ZXJpb3JcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb2R1bGFyIEtpdGNoZW5cIixcclxuICAgIGNhdGU6IFwibW9kdWxhci1raXRjaGVuXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==