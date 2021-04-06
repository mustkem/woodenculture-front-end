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
                      lineNumber: 73,
                      columnNumber: 25
                    }, _this), item.categories.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdKeyboardArrowDown"], {
                      className: "arrow-dropdown",
                      style: {
                        marginLeft: 3
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 21
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
                          lineNumber: 95,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 29
                      }, _this)
                    }, item.title, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 27
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 21
                }, _this)]
              }, item.title, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
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
                    lineNumber: 125,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdKeyboardArrowDown"], {
                    className: "arrow-dropdown",
                    style: {
                      marginLeft: 3
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
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
                      lineNumber: 132,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/about-us",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "About Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaGFyZWQvSGVhZGVyL1ByaW1hcnlIZWFkZXIuanMiXSwibmFtZXMiOlsiUHJpbWFyeUhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY29tbW9uQXBpcyIsImdldFVzZXJTdGF0dXMiLCJoYW5kbGVNb3VzZUVudGVyIiwiZSIsIm5vZGUiLCJ0YXJnZXQiLCJsaU5vZGUiLCJwYXJlbnROb2RlIiwiSFRNTEVsZW1lbnQiLCJjaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZG9jdW1lbnQiLCJmb3JFYWNoIiwibWVudSIsIm1hcCIsIml0ZW0iLCJjYXRlIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUMxQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FKLFlBQVEsQ0FBQ0ssOERBQVUsQ0FBQ0MsYUFBWCxFQUFELENBQVI7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUOztBQUtBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCLFFBQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFmO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRixJQUFJLENBQUNHLFVBQXBCOztBQUVBLFFBQUlILElBQUksWUFBWUksV0FBcEIsRUFBaUM7QUFDL0IsVUFBTUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLGdC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RVg7QUFDRUMsT0FBSyxFQUFFLFVBRFQ7QUFFRUQsTUFBSSxFQUFFLFVBRlI7QUFHRUUsWUFBVSxFQUFFLENBQ1Y7QUFDRUQsU0FBSyxFQUFFLGVBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FEVSxFQUtWO0FBQ0VDLFNBQUssRUFBRSxxQkFEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQUxVLEVBU1Y7QUFDRUMsU0FBSyxFQUFFLGtCQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBVFUsRUFhVjtBQUNFQyxTQUFLLEVBQUUscUJBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FiVTtBQUhkLENBL0VXLEVBcUdYO0FBQ0VDLE9BQUssRUFBRSxpQkFEVDtBQUVFRCxNQUFJLEVBQUUsaUJBRlI7QUFHRUUsWUFBVSxFQUFFO0FBSGQsQ0FyR1csQ0FBYjtBQTRHZTNCLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhjMTE2YjkwMDRhYTMwNTJjMzI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21tb25BcGlzIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlLXRodW5rL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgTWRLZXlib2FyZEFycm93RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuY29uc3QgUHJpbWFyeUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRlc3R0dHR0dHR0dFwiKTtcclxuICAgIGRpc3BhdGNoKGNvbW1vbkFwaXMuZ2V0VXNlclN0YXR1cygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgbm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlOb2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSBsaU5vZGUucXVlcnlTZWxlY3RvckFsbChcIi5pbm5lci1kcm9wZG93blwiKVswXTtcclxuICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgbm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgcHJpbWFyeS1oZWFkZXIgY2xlYXJmaXhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ28taWNvbi0yXCI+Ujwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIFJpc2UgRGVjb3JcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1iYXJcIj5cclxuICAgICAgICAgICAgICB7bWVudS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUVudGVyKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VMZWF2ZShlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gaW5uZXItZHJvcGRvd24tcGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPXtgL3Byb2R1Y3RzLyR7aXRlbS5jYXRlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2F0ZWdvcmllcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWRLZXlib2FyZEFycm93RG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3ctZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbm5lci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2F0ZWdvcmllcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIikuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmstaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2R1Y3RzLyR7aXRlbS5jYXRlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXBhbm5lbFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1iYXJcIj5cclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VFbnRlcihlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlTGVhdmUoZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gaW5uZXItZHJvcGRvd24tcGFyZW50XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiBDb21wYW55IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TWRLZXlib2FyZEFycm93RG93biBjbGFzc05hbWU9XCJhcnJvdy1kcm9wZG93blwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDMgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubmVyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXQtdXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtZW51ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJlZHJvb21cIixcclxuICAgIGNhdGU6IFwiYmVkcm9vbVwiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRG91YmxlIEJlZFwiLFxyXG4gICAgICAgIGNhdGU6IFwiZG91YmxlLWJlZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU2luZ2xlIEJlZFwiLFxyXG4gICAgICAgIGNhdGU6IFwic2luZ2xlLWJlZFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxpdmluZ1wiLFxyXG4gICAgY2F0ZTogXCJsaXZpbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlN0b3JhZ2VcIixcclxuICAgICAgICBjYXRlOiBcInN0b3JhZ2VcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlRhYmxlc1wiLFxyXG4gICAgICAgIGNhdGU6IFwidGFibGVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJBbG1pcmFoc1wiLFxyXG4gICAgICAgIGNhdGU6IFwiYWxtaXJhaHNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJPZmZpY2VcIixcclxuICAgIGNhdGU6IFwib2ZmaWNlXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJPZmZpY2UgSW50ZXJpb3JcIixcclxuICAgICAgICBjYXRlOiBcIm9mZmljZS1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiT2ZmaWNlIEZ1cm5pdHVyZVwiLFxyXG4gICAgICAgIGNhdGU6IFwib2ZmaWNlLWZ1cm5pdHVyZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRpdGxlOiBcIkZsb29yXCIsXHJcbiAgLy8gICBjYXRlOiBcImZsb29yXCIsXHJcbiAgLy8gICBjYXRlZ29yaWVzOiBbXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB0aXRsZTogXCJNYXBwbGUgRmxvb3JpbmdcIixcclxuICAvLyAgICAgICBjYXRlOiBcIm1hcHBsZS1mbG9vcmluZ1wiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgXSxcclxuICAvLyB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdhdGVzXCIsXHJcbiAgICBjYXRlOiBcImdhdGVzXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEb29yc1wiLFxyXG4gICAgICAgIGNhdGU6IFwiZG9vcnNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIldpbmRvd3NcIixcclxuICAgICAgICBjYXRlOiBcIndpbmRvd3NcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkRvb3IgRnJhbWVzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJkb29yLWZyYW1lc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV2luZG93IEZyYW1lc1wiLFxyXG4gICAgICAgIGNhdGU6IFwid2luZG93LWZyYW1lc1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkludGVyaW9yXCIsXHJcbiAgICBjYXRlOiBcImludGVyaW9yXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJIb21lIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJob21lLWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJBcHBhcnRtZW50IEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJhcHBhcnRtZW50LWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJLaXRjaGVuIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJraXRjaGVuLWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDb21tZXJjaWFsIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJjb21tZXJjaWFsLWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTW9kdWxhciBLaXRjaGVuXCIsXHJcbiAgICBjYXRlOiBcIm1vZHVsYXIta2l0Y2hlblwiLFxyXG4gICAgY2F0ZWdvcmllczogW10sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=