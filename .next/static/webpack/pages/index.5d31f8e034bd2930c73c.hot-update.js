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
        className: "header primary-header",
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          onClick: function onClick() {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          },
          className: "hamburger ".concat(isMobileMenuOpen ? "open" : ""),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaGFyZWQvSGVhZGVyL1ByaW1hcnlIZWFkZXIuanMiXSwibmFtZXMiOlsiUHJpbWFyeUhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImlzTW9iaWxlTWVudU9wZW4iLCJzZXRJc01vYmlsZU1lbnVPcGVuIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImNvbW1vbkFwaXMiLCJnZXRVc2VyU3RhdHVzIiwiaGFuZGxlTW91c2VFbnRlciIsImUiLCJub2RlIiwidGFyZ2V0IiwibGlOb2RlIiwicGFyZW50Tm9kZSIsIkhUTUxFbGVtZW50IiwiY2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3R5bGUiLCJkaXNwbGF5IiwiaGFuZGxlTW91c2VMZWF2ZSIsImRvY3VtZW50IiwiZm9yRWFjaCIsIm1lbnUiLCJtYXAiLCJpdGVtIiwiY2F0ZSIsInRpdGxlIiwiY2F0ZWdvcmllcyIsImxlbmd0aCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEMEIsa0JBRXNCQyxzREFBUSxDQUFDLEtBQUQsQ0FGOUI7QUFBQSxNQUVuQkMsZ0JBRm1CO0FBQUEsTUFFREMsbUJBRkM7O0FBRzFCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBUCxZQUFRLENBQUNRLDhEQUFVLENBQUNDLGFBQVgsRUFBRCxDQUFSO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDs7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QixRQUFNQyxJQUFJLEdBQUdE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MWY4ZTAzNGJkMjkzMGM3M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21tb25BcGlzIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlLXRodW5rL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgTWRLZXlib2FyZEFycm93RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuY29uc3QgUHJpbWFyeUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRlc3R0dHR0dHR0dFwiKTtcclxuICAgIGRpc3BhdGNoKGNvbW1vbkFwaXMuZ2V0VXNlclN0YXR1cygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgbm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlOb2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSBsaU5vZGUucXVlcnlTZWxlY3RvckFsbChcIi5pbm5lci1kcm9wZG93blwiKVswXTtcclxuICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgbm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgcHJpbWFyeS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ28taWNvbi0yXCI+Ujwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIFJpc2UgRGVjb3JcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtd3JhcCAke2lzTW9iaWxlTWVudU9wZW4gPyBcIm9wZW5cIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1iYXJcIj5cclxuICAgICAgICAgICAgICAgIHttZW51Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUVudGVyKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VMZWF2ZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBpbm5lci1kcm9wZG93bi1wYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPXtgL3Byb2R1Y3RzLyR7aXRlbS5jYXRlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2F0ZWdvcmllcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZEtleWJvYXJkQXJyb3dEb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93LWRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5uZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2F0ZWdvcmllcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS50aXRsZX0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmstaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZHVjdHMvJHtpdGVtLmNhdGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1wYW5uZWxcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VFbnRlcihlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlTGVhdmUoZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBpbm5lci1kcm9wZG93bi1wYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gQ29tcGFueSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWRLZXlib2FyZEFycm93RG93biBjbGFzc05hbWU9XCJhcnJvdy1kcm9wZG93blwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDMgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubmVyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3QtdXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dC11c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5BYm91dCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vYmlsZU1lbnVPcGVuKCFpc01vYmlsZU1lbnVPcGVuKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGFtYnVyZ2VyICR7aXNNb2JpbGVNZW51T3BlbiA/IFwib3BlblwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWVudSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJCZWRyb29tXCIsXHJcbiAgICBjYXRlOiBcImJlZHJvb21cIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkRvdWJsZSBCZWRcIixcclxuICAgICAgICBjYXRlOiBcImRvdWJsZS1iZWRcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlNpbmdsZSBCZWRcIixcclxuICAgICAgICBjYXRlOiBcInNpbmdsZS1iZWRcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMaXZpbmdcIixcclxuICAgIGNhdGU6IFwibGl2aW5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJTdG9yYWdlXCIsXHJcbiAgICAgICAgY2F0ZTogXCJzdG9yYWdlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJUYWJsZXNcIixcclxuICAgICAgICBjYXRlOiBcInRhYmxlc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQWxtaXJhaHNcIixcclxuICAgICAgICBjYXRlOiBcImFsbWlyYWhzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiT2ZmaWNlXCIsXHJcbiAgICBjYXRlOiBcIm9mZmljZVwiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiT2ZmaWNlIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJvZmZpY2UtaW50ZXJpb3JcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk9mZmljZSBGdXJuaXR1cmVcIixcclxuICAgICAgICBjYXRlOiBcIm9mZmljZS1mdXJuaXR1cmVcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0aXRsZTogXCJGbG9vclwiLFxyXG4gIC8vICAgY2F0ZTogXCJmbG9vclwiLFxyXG4gIC8vICAgY2F0ZWdvcmllczogW1xyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgdGl0bGU6IFwiTWFwcGxlIEZsb29yaW5nXCIsXHJcbiAgLy8gICAgICAgY2F0ZTogXCJtYXBwbGUtZmxvb3JpbmdcIixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIF0sXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJHYXRlc1wiLFxyXG4gICAgY2F0ZTogXCJnYXRlc1wiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRG9vcnNcIixcclxuICAgICAgICBjYXRlOiBcImRvb3JzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJXaW5kb3dzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJ3aW5kb3dzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEb29yIEZyYW1lc1wiLFxyXG4gICAgICAgIGNhdGU6IFwiZG9vci1mcmFtZXNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIldpbmRvdyBGcmFtZXNcIixcclxuICAgICAgICBjYXRlOiBcIndpbmRvdy1mcmFtZXNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJJbnRlcmlvclwiLFxyXG4gICAgY2F0ZTogXCJpbnRlcmlvclwiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSG9tZSBJbnRlcmlvclwiLFxyXG4gICAgICAgIGNhdGU6IFwiaG9tZS1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQXBwYXJ0bWVudCBJbnRlcmlvclwiLFxyXG4gICAgICAgIGNhdGU6IFwiYXBwYXJ0bWVudC1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiS2l0Y2hlbiBJbnRlcmlvclwiLFxyXG4gICAgICAgIGNhdGU6IFwia2l0Y2hlbi1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29tbWVyY2lhbCBJbnRlcmlvclwiLFxyXG4gICAgICAgIGNhdGU6IFwiY29tbWVyY2lhbC1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vZHVsYXIgS2l0Y2hlblwiLFxyXG4gICAgY2F0ZTogXCJtb2R1bGFyLWtpdGNoZW5cIixcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5SGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9