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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaGFyZWQvSGVhZGVyL1ByaW1hcnlIZWFkZXIuanMiXSwibmFtZXMiOlsiUHJpbWFyeUhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY29tbW9uQXBpcyIsImdldFVzZXJTdGF0dXMiLCJoYW5kbGVNb3VzZUVudGVyIiwiZSIsIm5vZGUiLCJ0YXJnZXQiLCJsaU5vZGUiLCJwYXJlbnROb2RlIiwiSFRNTEVsZW1lbnQiLCJjaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZG9jdW1lbnQiLCJmb3JFYWNoIiwiaXNNb2JpbGVNZW51T3BlbiIsIm1lbnUiLCJtYXAiLCJpdGVtIiwiY2F0ZSIsInRpdGxlIiwiY2F0ZWdvcmllcyIsImxlbmd0aCIsIm1hcmdpbkxlZnQiLCJzZXRJc01vYmlsZU1lbnVPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQUosWUFBUSxDQUFDSyw4REFBVSxDQUFDQyxhQUFYLEVBQUQsQ0FBUjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBS0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDOUIsUUFBTUMsSUFBSSxHQUFHRCxDQUFDLENBQUNFLE1BQWY7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csVUFBcEI7O0FBRUEsUUFBSUgsSUFBSSxZQUFZSSxXQUFwQixF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QUFDRUMsU0FBSyxFQUFFLGtCQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBTFU7QUFIZCxDQWpDVyxFQStDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VDLE9BQUssRUFBRSxPQURUO0FBRUVELE1BQUksRUFBRSxPQUZSO0FBR0VFLFlBQVUsRUFBRSxDQUNWO0FBQ0VELFNBQUssRUFBRSxPQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBRFUsRUFLVjtBQUNFQyxTQUFLLEVBQUUsU0FEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQUxVLEVBU1Y7QUFDRUMsU0FBSyxFQUFFLGFBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FUVSxFQWFWO0FBQ0VDLFNBQUssRUFBRSxlQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBYlU7QUFIZCxDQXpEVyxFQStFWDtBQUNFQyxPQUFLLEVBQUUsVUFEVDtBQUVFRCxNQUFJLEVBQUUsVUFGUjtBQUdFRSxZQUFVLEVBQUUsQ0FDVjtBQUNFRCxTQUFLLEVBQUUsZUFEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQURVLEVBS1Y7QUFDRUMsU0FBSyxFQUFFLHFCQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBTFUsRUFTVjtBQUNFQyxTQUFLLEVBQUUsa0JBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FUVSxFQWFWO0FBQ0VDLFNBQUssRUFBRSxxQkFEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQWJVO0FBSGQsQ0EvRVcsRUFxR1g7QUFDRUMsT0FBSyxFQUFFLGlCQURUO0FBRUVELE1BQUksRUFBRSxpQkFGUjtBQUdFRSxZQUFVLEVBQUU7QUFIZCxDQXJHVyxDQUFiO0FBNEdlNUIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDVkZDg2NjYzMjgxYmY5Y2Y0YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbW1vbkFwaXMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUtdGh1bmsvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBNZEtleWJvYXJkQXJyb3dEb3duIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5jb25zdCBQcmltYXJ5SGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidGVzdHR0dHR0dHR0XCIpO1xyXG4gICAgZGlzcGF0Y2goY29tbW9uQXBpcy5nZXRVc2VyU3RhdHVzKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaU5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGxpTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpWzBdO1xyXG4gICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZS50YXJnZXQ7XHJcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBwcmltYXJ5LWhlYWRlciBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1pY29uLTJcIj5SPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgUmlzZSBEZWNvclxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi13cmFwICR7aXNNb2JpbGVNZW51T3BlbiA/IFwib3BlblwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJhclwiPlxyXG4gICAgICAgICAgICAgICAge21lbnUubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlRW50ZXIoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUxlYXZlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbm5lci1kcm9wZG93blwiKS5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGlubmVyLWRyb3Bkb3duLXBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9e2AvcHJvZHVjdHMvJHtpdGVtLmNhdGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1kS2V5Ym9hcmRBcnJvd0Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3ctZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbm5lci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jYXRlZ29yaWVzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGluay1pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0cy8ke2l0ZW0uY2F0ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXBhbm5lbFwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUVudGVyKGUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VMZWF2ZShlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGlubmVyLWRyb3Bkb3duLXBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBDb21wYW55IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZEtleWJvYXJkQXJyb3dEb3duIGNsYXNzTmFtZT1cImFycm93LWRyb3Bkb3duXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5uZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Db250YWN0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0LXVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoYW1idXJnZXIgJHtpc01vYmlsZU1lbnVPcGVuID8gXCJvcGVuXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtZW51ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJlZHJvb21cIixcclxuICAgIGNhdGU6IFwiYmVkcm9vbVwiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRG91YmxlIEJlZFwiLFxyXG4gICAgICAgIGNhdGU6IFwiZG91YmxlLWJlZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2luZ2xlIEJlZFwiLFxyXG4gICAgICAgIGNhdGU6IFwic2luZ2xlLWJlZFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxpdmluZ1wiLFxyXG4gICAgY2F0ZTogXCJsaXZpbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlN0b3JhZ2VcIixcclxuICAgICAgICBjYXRlOiBcInN0b3JhZ2VcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlRhYmxlc1wiLFxyXG4gICAgICAgIGNhdGU6IFwidGFibGVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJBbG1pcmFoc1wiLFxyXG4gICAgICAgIGNhdGU6IFwiYWxtaXJhaHNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJPZmZpY2VcIixcclxuICAgIGNhdGU6IFwib2ZmaWNlXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJPZmZpY2UgSW50ZXJpb3JcIixcclxuICAgICAgICBjYXRlOiBcIm9mZmljZS1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiT2ZmaWNlIEZ1cm5pdHVyZVwiLFxyXG4gICAgICAgIGNhdGU6IFwib2ZmaWNlLWZ1cm5pdHVyZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRpdGxlOiBcIkZsb29yXCIsXHJcbiAgLy8gICBjYXRlOiBcImZsb29yXCIsXHJcbiAgLy8gICBjYXRlZ29yaWVzOiBbXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB0aXRsZTogXCJNYXBwbGUgRmxvb3JpbmdcIixcclxuICAvLyAgICAgICBjYXRlOiBcIm1hcHBsZS1mbG9vcmluZ1wiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgXSxcclxuICAvLyB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdhdGVzXCIsXHJcbiAgICBjYXRlOiBcImdhdGVzXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEb29yc1wiLFxyXG4gICAgICAgIGNhdGU6IFwiZG9vcnNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIldpbmRvd3NcIixcclxuICAgICAgICBjYXRlOiBcIndpbmRvd3NcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkRvb3IgRnJhbWVzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJkb29yLWZyYW1lc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV2luZG93IEZyYW1lc1wiLFxyXG4gICAgICAgIGNhdGU6IFwid2luZG93LWZyYW1lc1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkludGVyaW9yXCIsXHJcbiAgICBjYXRlOiBcImludGVyaW9yXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJIb21lIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJob21lLWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJBcHBhcnRtZW50IEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJhcHBhcnRtZW50LWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJLaXRjaGVuIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJraXRjaGVuLWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDb21tZXJjaWFsIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJjb21tZXJjaWFsLWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTW9kdWxhciBLaXRjaGVuXCIsXHJcbiAgICBjYXRlOiBcIm1vZHVsYXIta2l0Y2hlblwiLFxyXG4gICAgY2F0ZWdvcmllczogW10sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=