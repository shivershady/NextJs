webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./src/pages/product/[id]/index.js":
/*!*****************************************!*\
  !*** ./src/pages/product/[id]/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ProductItem */ "./src/components/ProductItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actions/product */ "./src/actions/product.js");


var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\product\\[id]\\index.js",
    _s = $RefreshSig$();









function Index(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var product = router.query;
  var alias = product.alias;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_7__["getProductDetail"])({
      alias: alias
    }));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      page_type: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-no-wrap",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mx-auto py-10 md:w-4/5 w-11/12 px-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full h-full rounded border-dashed border-2 border-gray-300",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "px-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "mt-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "icon icon-tabler icon-tabler-grid",
                  width: 18,
                  height: 18,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                    x: 4,
                    y: 4,
                    width: 6,
                    height: 6,
                    rx: 1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                    x: 14,
                    y: 4,
                    width: 6,
                    height: 6,
                    rx: 1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                    x: 4,
                    y: 14,
                    width: 6,
                    height: 6,
                    rx: 1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                    x: 14,
                    y: 14,
                    width: 6,
                    height: 6,
                    rx: 1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-sm  ml-2",
                  children: "Dashboard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs",
                children: "5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "icon icon-tabler icon-tabler-puzzle",
                  width: 18,
                  height: 18,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-sm  ml-2",
                  children: "Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs",
                children: "8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "icon icon-tabler icon-tabler-compass",
                  width: 18,
                  height: 18,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polyline", {
                    points: "8 16 10 10 16 8 14 14 8 16"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                    cx: 12,
                    cy: 12,
                    r: 9
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-sm  ml-2",
                  children: "Performance"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(Index, "bjZflwr9yuHJ0eAg20MSTkw3ecc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicHJvZHVjdCIsInF1ZXJ5IiwiYWxpYXMiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0RGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBdkI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0UsS0FBdEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pMLFlBQVEsQ0FBQ00seUVBQWdCLENBQUM7QUFBQ0YsV0FBSyxFQUFMQTtBQUFELEtBQUQsQ0FBakIsQ0FBUjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBLDRCQUNJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLHlEQUFEO0FBQU8sZUFBUyxFQUFFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUlJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLCtDQUFmO0FBQUEsK0JBRUk7QUFDSSxtQkFBUyxFQUFDLDhEQURkO0FBQUEsaUNBR0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtB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QTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyRUg7O0dBdEZRUixLO1VBQ1VHLHFELEVBQ0VFLHVEOzs7S0FGWkwsSztBQXdGTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjllODIzNTM3MjAxOGExOWZiNzA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2xpZGVcIjtcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Z2V0UHJvZHVjdERldGFpbH0gZnJvbSBcIi4uLy4uLy4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBhbGlhcyA9IHByb2R1Y3QuYWxpYXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRQcm9kdWN0RGV0YWlsKHthbGlhc30pKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxOYXZCYXIvPlxyXG4gICAgICAgICAgICA8U2xpZGUgcGFnZV90eXBlPXswfS8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1uby13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LTEwIG1kOnctNC81IHctMTEvMTIgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBSZW1vdmUgY2xhc3MgWyBib3JkZXItZGFzaGVkIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBdIHRvIHJlbW92ZSBkb3R0ZWQgYm9yZGVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkIGJvcmRlci1kYXNoZWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQbGFjZSB5b3VyIGNvbnRlbnQgaGVyZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTaWRlYmFyIHN0YXJ0cyAqL31cclxuICAgICAgICAgICAgICAgIHsvKiBSZW1vdmUgY2xhc3MgWyBoaWRkZW4gXSBhbmQgcmVwbGFjZSBbIHNtOmZsZXggXSB3aXRoIFsgZmxleCBdICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjQgYWJzb2x1dGUgc206cmVsYXRpdmUgYmctZ3JheS04MDAgc2hhZG93IG1kOmgtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaGlkZGVuIHNtOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIHRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWdyaWRcIiB3aWR0aD17MTh9IGhlaWdodD17MTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZVdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9ezR9IHk9ezR9IHdpZHRoPXs2fSBoZWlnaHQ9ezZ9IHJ4PXsxfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXsxNH0geT17NH0gd2lkdGg9ezZ9IGhlaWdodD17Nn0gcng9ezF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9ezR9IHk9ezE0fSB3aWR0aD17Nn0gaGVpZ2h0PXs2fSByeD17MX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17MTR9IHk9ezE0fSB3aWR0aD17Nn0gaGVpZ2h0PXs2fSByeD17MX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSAgbWwtMlwiPkRhc2hib2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTEgcHgtMyBiZy1ncmF5LTcwMCByb3VuZGVkIHRleHQtZ3JheS01MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC14c1wiPjVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLXB1enpsZVwiIHdpZHRoPXsxOH0gaGVpZ2h0PXsxOH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlV2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQgN2gzYTEgMSAwIDAgMCAxIC0xdi0xYTIgMiAwIDAgMSA0IDB2MWExIDEgMCAwIDAgMSAxaDNhMSAxIDAgMCAxIDEgMXYzYTEgMSAwIDAgMCAxIDFoMWEyIDIgMCAwIDEgMCA0aC0xYTEgMSAwIDAgMCAtMSAxdjNhMSAxIDAgMCAxIC0xIDFoLTNhMSAxIDAgMCAxIC0xIC0xdi0xYTIgMiAwIDAgMCAtNCAwdjFhMSAxIDAgMCAxIC0xIDFoLTNhMSAxIDAgMCAxIC0xIC0xdi0zYTEgMSAwIDAgMSAxIC0xaDFhMiAyIDAgMCAwIDAgLTRoLTFhMSAxIDAgMCAxIC0xIC0xdi0zYTEgMSAwIDAgMSAxIC0xXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSAgbWwtMlwiPlByb2R1Y3RzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMSBweC0zIGJnLWdyYXktNzAwIHJvdW5kZWQgdGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzXCI+OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItY29tcGFzc1wiIHdpZHRoPXsxOH0gaGVpZ2h0PXsxOH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlV2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjggMTYgMTAgMTAgMTYgOCAxNCAxNCA4IDE2XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17MTJ9IGN5PXsxMn0gcj17OX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSAgbWwtMlwiPlBlcmZvcm1hbmNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFNpZGViYXIgZW5kcyAqL31cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==