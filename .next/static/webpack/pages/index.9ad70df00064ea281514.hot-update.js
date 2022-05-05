webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ProductItem.js":
/*!***************************************!*\
  !*** ./src/components/ProductItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\components\\ProductItem.js";


function ProductItem(_ref) {
  var product = _ref.product;
  console.log(product);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "shadow-lg rounded-2xl  bg-white w-full m-auto p-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "http://192.168.1.38:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
      alt: "adidas",
      className: "w-64 p-4 h-72 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-pink-200 m-3 p-4 rounded-lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-white text-xl font-bold ",
        children: product === null || product === void 0 ? void 0 : product.alias
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-50 text-xs",
        children: product === null || product === void 0 ? void 0 : product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-between ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-white",
          children: [product === null || product === void 0 ? void 0 : product.price, "vn\u0111"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "w-10 h-10 text-base font-medium rounded-full text-white bg-pink-500 hover:bg-pink-700",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            className: "mx-auto",
            fill: "white",
            viewBox: "0 0 1792 1792",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = ProductItem;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

var _c;

$RefreshReg$(_c, "ProductItem");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0uanMiXSwibmFtZXMiOlsiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJ0aHVtYiIsImFsaWFzIiwiZGVzY3JpcHRpb24iLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxXQUFULE9BQWdDO0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBQzVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLG1EQUFmO0FBQUEsNEJBQ0k7QUFBSyxTQUFHLEVBQUVHLHdCQUFBLEdBQW9CLFdBQXBCLElBQWdDSCxPQUFoQyxhQUFnQ0EsT0FBaEMsdUJBQWdDQSxPQUFPLENBQUVJLEtBQVQsQ0FBZSxDQUFmLENBQWhDLENBQVY7QUFBNkQsU0FBRyxFQUFDLFFBQWpFO0FBQTBFLGVBQVMsRUFBQztBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBLDhCQUNJO0FBQUcsaUJBQVMsRUFBQywrQkFBYjtBQUFBLGtCQUNLSixPQURMLGFBQ0tBLE9BREwsdUJBQ0tBLE9BQU8sQ0FBRUs7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFHLGlCQUFTLEVBQUMsc0JBQWI7QUFBQSxrQkFDS0wsT0FETCxhQUNLQSxPQURMLHVCQUNLQSxPQUFPLENBQUVNO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBT0k7QUFBSyxpQkFBUyxFQUFDLG9DQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQSxxQkFDS04sT0FETCxhQUNLQSxPQURMLHVCQUNLQSxPQUFPLENBQUVPLEtBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLHVGQUFoQztBQUFBLGlDQUNJO0FBQUssaUJBQUssRUFBQyw0QkFBWDtBQUF3QyxpQkFBSyxFQUFFLEVBQS9DO0FBQW1ELGtCQUFNLEVBQUUsRUFBM0Q7QUFBK0QscUJBQVMsRUFBQyxTQUF6RTtBQUFtRixnQkFBSSxFQUFDLE9BQXhGO0FBQWdHLG1CQUFPLEVBQUMsZUFBeEc7QUFBQSxtQ0FDSTtBQUFNLGVBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCSDs7S0ExQlFSLFc7QUE0Qk1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlhZDcwZGYwMDA2NGVhMjgxNTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEl0ZW0oe3Byb2R1Y3R9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC0yeGwgIGJnLXdoaXRlIHctZnVsbCBtLWF1dG8gcC0yXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9jZXNzLmVudi5BUElfVVJMK1wiL3N0b3JhZ2UvXCIrcHJvZHVjdD8udGh1bWJbMF19IGFsdD1cImFkaWRhc1wiIGNsYXNzTmFtZT1cInctNjQgcC00IGgtNzIgbS1hdXRvXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1waW5rLTIwMCBtLTMgcC00IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Q/LmFsaWFzfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdD8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Py5wcmljZX12bsSRXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgYmctcGluay01MDAgaG92ZXI6YmctcGluay03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBjbGFzc05hbWU9XCJteC1hdXRvXCIgZmlsbD1cIndoaXRlXCIgdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYwMCA3MzZ2MTkycTAgNDAtMjggNjh0LTY4IDI4aC00MTZ2NDE2cTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di00MTZoLTQxNnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDQxNnYtNDE2cTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh2NDE2aDQxNnE0MCAwIDY4IDI4dDI4IDY4elwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=