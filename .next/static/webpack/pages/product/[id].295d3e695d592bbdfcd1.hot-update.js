webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./src/components/ProductDetail.js":
/*!*****************************************!*\
  !*** ./src/components/ProductDetail.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/helper */ "./src/lib/helper.js");

var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\components\\ProductDetail.js";



function ProductDetail(_ref) {
  var product = _ref.product,
      handleQuantityProduct = _ref.handleQuantityProduct;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full bg-white shadow-lg rounded-lg overflow-hidden my-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "w-full h-full object-cover",
      src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
      alt: "avatar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "py-4 px-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-2xl font-semibold text-gray-800",
        children: product === null || product === void 0 ? void 0 : product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "py-2 text-lg text-gray-700",
        children: product === null || product === void 0 ? void 0 : product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center mt-4 gap-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-red-500 font-bold",
          children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.price)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "line-through text-gray-500 font-bold",
          children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.old_price)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-xl font-bold",
          children: "S\u1ED1 l\u01B0\u1EE3ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "-"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: product === null || product === void 0 ? void 0 : product.quantity
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "+"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = ProductDetail;
/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);

var _c;

$RefreshReg$(_c, "ProductDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdERldGFpbC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlsIiwicHJvZHVjdCIsImhhbmRsZVF1YW50aXR5UHJvZHVjdCIsInByb2Nlc3MiLCJ0aHVtYiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJvbGRfcHJpY2UiLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BQXlEO0FBQUEsTUFBakNDLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLE1BQXhCQyxxQkFBd0IsUUFBeEJBLHFCQUF3QjtBQUNyRCxzQkFDSTtBQUFLLGFBQVMsRUFBQywyREFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQ0ssU0FBRyxFQUFFQyx3QkFBQSxHQUFvQixXQUFwQixJQUFnQ0YsT0FBaEMsYUFBZ0NBLE9BQWhDLHVCQUFnQ0EsT0FBTyxDQUFFRyxLQUFULENBQWUsQ0FBZixDQUFoQyxDQURWO0FBRUssU0FBRyxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxzQ0FBZDtBQUFBLGtCQUFzREgsT0FBdEQsYUFBc0RBLE9BQXRELHVCQUFzREEsT0FBTyxDQUFFSTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQSxrQkFBMkNKLE9BQTNDLGFBQTJDQSxPQUEzQyx1QkFBMkNBLE9BQU8sQ0FBRUs7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLHdCQUFiO0FBQUEsb0JBQ0tDLCtEQUFXLENBQUNOLE9BQUQsYUFBQ0EsT0FBRCx1QkFBQ0EsT0FBTyxDQUFFTyxLQUFWO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFHLG1CQUFTLEVBQUMsc0NBQWI7QUFBQSxvQkFBcURELCtEQUFXLENBQUNOLE9BQUQsYUFBQ0EsT0FBRCx1QkFBQ0EsT0FBTyxDQUFFUSxTQUFWO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFTSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFLLEVBQUVSLE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFUztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Qkg7O0tBekJRVixhO0FBMkJNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tpZF0uMjk1ZDNlNjk1ZDU5MmJiZGZjZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi9saWIvaGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsKHtwcm9kdWN0LCBoYW5kbGVRdWFudGl0eVByb2R1Y3R9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBteS00XCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuQVBJX1VSTCtcIi9zdG9yYWdlL1wiK3Byb2R1Y3Q/LnRodW1iWzBdfVxyXG4gICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IHB4LTZcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj57cHJvZHVjdD8ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWxnIHRleHQtZ3JheS03MDBcIj57cHJvZHVjdD8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC00IGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TW9uZXkocHJvZHVjdD8ucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5lLXRocm91Z2ggdGV4dC1ncmF5LTUwMCBmb250LWJvbGRcIj57Zm9ybWF0TW9uZXkocHJvZHVjdD8ub2xkX3ByaWNlKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj5T4buRIGzGsOG7o25nPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Byb2R1Y3Q/LnF1YW50aXR5fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4rPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9