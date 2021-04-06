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
/* harmony import */ var C_Users_Admin_Desktop_woodenculture_woodenculture_front_end_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_thunk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store-thunk/common */ "./store-thunk/common/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\woodenculture\\woodenculture-front-end\\Components\\Shared\\Header\\PrimaryHeader.js",
    _this = undefined,
    _s = $RefreshSig$();








var PrimaryHeader = function PrimaryHeader() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useState = useState(false),
      _useState2 = Object(C_Users_Admin_Desktop_woodenculture_woodenculture_front_end_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isMobileMenuOpen = _useState2[0],
      setIsMobileMenuOpen = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
                    }, _this), item.categories.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdKeyboardArrowDown"], {
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
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdKeyboardArrowDown"], {
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
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaGFyZWQvSGVhZGVyL1ByaW1hcnlIZWFkZXIuanMiXSwibmFtZXMiOlsiUHJpbWFyeUhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImlzTW9iaWxlTWVudU9wZW4iLCJzZXRJc01vYmlsZU1lbnVPcGVuIiwidXNlRWZmZWN0IiwiY29tbW9uQWN0aW9ucyIsImdldFVzZXJTdGF0dXMiLCJoYW5kbGVNb3VzZUVudGVyIiwiZSIsIm5vZGUiLCJ0YXJnZXQiLCJsaU5vZGUiLCJwYXJlbnROb2RlIiwiSFRNTEVsZW1lbnQiLCJjaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZG9jdW1lbnQiLCJmb3JFYWNoIiwibWVudSIsIm1hcCIsIml0ZW0iLCJjYXRlIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRDBCLGtCQUdzQkMsUUFBUSxDQUFDLEtBQUQsQ0FIOUI7QUFBQTtBQUFBLE1BR25CQyxnQkFIbUI7QUFBQSxNQUdEQyxtQkFIQzs7QUFLMUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkTCxZQUFRLENBQUNNLGFBQWEsQ0FBQ0MsYUFBZCxFQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCLFFBQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFmO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRixJ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Q1Y7QUFDRUQsU0FBSyxFQUFFLE9BRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FEVSxFQUtWO0FBQ0VDLFNBQUssRUFBRSxhQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBTFUsRUFTVjtBQUNFQyxTQUFLLEVBQUUsZUFEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQVRVLEVBYVY7QUFDRUMsU0FBSyxFQUFFLGFBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FiVTtBQUhkLENBOURXLEVBcUZYO0FBQ0VDLE9BQUssRUFBRSxVQURUO0FBRUVELE1BQUksRUFBRSxVQUZSO0FBR0VFLFlBQVUsRUFBRSxDQUNWO0FBQ0VELFNBQUssRUFBRSxlQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBRFUsRUFLVjtBQUNFQyxTQUFLLEVBQUUscUJBRFQ7QUFFRUQsUUFBSSxFQUFFO0FBRlIsR0FMVSxFQVNWO0FBQ0VDLFNBQUssRUFBRSxrQkFEVDtBQUVFRCxRQUFJLEVBQUU7QUFGUixHQVRVLEVBYVY7QUFDRUMsU0FBSyxFQUFFLHFCQURUO0FBRUVELFFBQUksRUFBRTtBQUZSLEdBYlU7QUFIZCxDQXJGVyxFQTJHWDtBQUNFQyxPQUFLLEVBQUUsaUJBRFQ7QUFFRUQsTUFBSSxFQUFFLGlCQUZSO0FBR0VFLFlBQVUsRUFBRTtBQUhkLENBM0dXLENBQWI7QUFrSGU1Qiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYTc5Nzg4OGE1YjIxOTNhMTY1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY29tbW9uQXBpcyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS10aHVuay9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IE1kS2V5Ym9hcmRBcnJvd0Rvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmNvbnN0IFByaW1hcnlIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbaXNNb2JpbGVNZW51T3Blbiwgc2V0SXNNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjb21tb25BY3Rpb25zLmdldFVzZXJTdGF0dXMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5vZGUgPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGxpTm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gbGlOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5uZXItZHJvcGRvd25cIilbMF07XHJcbiAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5vZGUgPSBlLnRhcmdldDtcclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbm5lci1kcm9wZG93blwiKS5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIHByaW1hcnktaGVhZGVyIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLWljb24tMlwiPlI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIFJpc2UgRGVjb3JcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi13cmFwICR7aXNNb2JpbGVNZW51T3BlbiA/IFwib3BlblwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtc2VjdGlvbiAgYH0+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YG5hdmlnYXRpb24tYmFyYH0+XHJcbiAgICAgICAgICAgICAgICB7bWVudS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VFbnRlcihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlTGVhdmUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW0gaW5uZXItZHJvcGRvd24tcGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzcz1cIm5hdi1saW5rXCIgdG89e2AvY2F0ZWdvcnkvJHtpdGVtLmNhdGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2F0ZWdvcmllcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1kS2V5Ym9hcmRBcnJvd0Rvd24gY2xhc3NOYW1lPVwiYXJyb3ctZHJvcGRvd25cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAzIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbm5lci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jYXRlZ29yaWVzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmstaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7aXRlbS5jYXRlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1wYW5uZWxcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VFbnRlcihlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlTGVhdmUoZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlubmVyLWRyb3Bkb3duXCIpLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBpbm5lci1kcm9wZG93bi1wYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiBDb21wYW55IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TWRLZXlib2FyZEFycm93RG93biBjbGFzc05hbWU9XCJhcnJvdy1kcm9wZG93blwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDMgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5uZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2NvbnRhY3QtdXNcIj5Db250YWN0IFVzPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9hYm91dC11c1wiPkFib3V0IFVzPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoYW1idXJnZXIgJHtpc01vYmlsZU1lbnVPcGVuID8gXCJvcGVuXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgbWVudSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJCZWRyb29tXCIsXHJcbiAgICBjYXRlOiBcImJlZHJvb21cIixcclxuICAgIGNhdGVnb3JpZXM6IFtcclxuXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEb3VibGUgQmVkXCIsXHJcbiAgICAgICAgY2F0ZTogXCJkb3VibGUtYmVkXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJTaW5nbGUgQmVkXCIsXHJcbiAgICAgICAgY2F0ZTogXCJzaW5nbGUtYmVkXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGl2aW5nXCIsXHJcbiAgICBjYXRlOiBcImxpdmluZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ2FiaW5hdGVzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJjYWJpbmF0ZXNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlR2IFRhYmxlc1wiLFxyXG4gICAgICAgIGNhdGU6IFwidHYtdGFibGVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEaW5pbmcgVGFibGVzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJkaW5pbmctdGFibGVzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEaW5pbmcgU3RvcmFnZVwiLFxyXG4gICAgICAgIGNhdGU6IFwiZGluaW5nLXN0b3JhZ2VcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJPZmZpY2VcIixcclxuICAgIGNhdGU6IFwib2ZmaWNlXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJPZmZpY2UgSW50ZXJpb3JcIixcclxuICAgICAgICBjYXRlOiBcIm9mZmljZS1pbnRlcmlvclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiT2ZmaWNlIEZ1cm5pdHVyZVwiLFxyXG4gICAgICAgIGNhdGU6IFwib2ZmaWNlLWZ1cm5pdHVyZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRpdGxlOiBcIkZsb29yXCIsXHJcbiAgLy8gICBjYXRlOiBcImZsb29yXCIsXHJcbiAgLy8gICBjYXRlZ29yaWVzOiBbXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB0aXRsZTogXCJNYXBwbGUgRmxvb3JpbmdcIixcclxuICAvLyAgICAgICBjYXRlOiBcIm1hcHBsZS1mbG9vcmluZ1wiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgXSxcclxuICAvLyB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdhdGVcIixcclxuICAgIGNhdGU6IFwiZ2F0ZVwiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRG9vcnNcIixcclxuICAgICAgICBjYXRlOiBcIkRvb3JzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJEb29yIEZyYW1lc1wiLFxyXG4gICAgICAgIGNhdGU6IFwiZG9vci1mcmFtZXNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIldpbmRvdyBGcmFtZXNcIixcclxuICAgICAgICBjYXRlOiBcIndpbmRvdy1mcmFtZXNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkRvb3IgRnJhbWVzXCIsXHJcbiAgICAgICAgY2F0ZTogXCJkb29yLWZyYW1lc1wiLFxyXG4gICAgICB9LFxyXG5cclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJJbnRlcmlvclwiLFxyXG4gICAgY2F0ZTogXCJpbnRlcmlvclwiLFxyXG4gICAgY2F0ZWdvcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSG9tZSBJbnRlcmlvclwiLFxyXG4gICAgICAgIGNhdGU6IFwiaG9tZS1udGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJBcHBhcnRtZW50IEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJhcHBhcnRtZW50LWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJLaXRjaGVuIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJraXRjaGVuLWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDb21tZXJjaWFsIEludGVyaW9yXCIsXHJcbiAgICAgICAgY2F0ZTogXCJjb21tZXJjaWFsLWludGVyaW9yXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTW9kdWxhciBLaXRjaGVuXCIsXHJcbiAgICBjYXRlOiBcIm1vZHVsYXIta2l0Y2hlblwiLFxyXG4gICAgY2F0ZWdvcmllczogW10sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=