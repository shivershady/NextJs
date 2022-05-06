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


var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\components\\ProductDetail.js",
    _s = $RefreshSig$();




function ProductDetail(_ref) {
  _s();

  var product = _ref.product,
      handleQuantityProduct = _ref.handleQuantityProduct;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      quantity = _useState[0],
      setQuantity = _useState[1];

  handleQuantityProduct = function handleQuantityProduct(quantity) {
    return quantity;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full bg-white shadow-lg rounded-lg overflow-hidden my-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "w-full h-full object-cover",
      src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
      alt: "avatar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "py-4 px-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-2xl font-semibold text-gray-800",
        children: product === null || product === void 0 ? void 0 : product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "py-2 text-lg text-gray-700",
        children: product === null || product === void 0 ? void 0 : product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center mt-4 gap-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-red-500 font-bold",
          children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.price)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "line-through text-gray-500 font-bold",
          children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.old_price)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-xl font-bold",
          children: "S\u1ED1 l\u01B0\u1EE3ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return setQuantity(1);
          },
          children: "-"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: quantity,
          onChange: function onChange(event) {
            return setQuantity(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            setQuantity(quantity);
          },
          children: "+"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_s(ProductDetail, "Qe09P1MkhcuxrUT+4C5s8y/Npkg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdERldGFpbC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlsIiwicHJvZHVjdCIsImhhbmRsZVF1YW50aXR5UHJvZHVjdCIsInVzZVN0YXRlIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsInByb2Nlc3MiLCJ0aHVtYiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJvbGRfcHJpY2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBeUQ7QUFBQTs7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLHFCQUF3QixRQUF4QkEscUJBQXdCOztBQUFBLGtCQUNyQkMsc0RBQVEsQ0FBQyxDQUFELENBRGE7QUFBQSxNQUM5Q0MsUUFEOEM7QUFBQSxNQUNwQ0MsV0FEb0M7O0FBR3JESCx1QkFBcUIsR0FBRywrQkFBQ0UsUUFBRCxFQUFjO0FBQ2xDLFdBQU9BLFFBQVA7QUFDSCxHQUZEOztBQUdBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDJEQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFDSyxTQUFHLEVBQUVFLHdCQUFBLEdBQW9CLFdBQXBCLElBQWdDTCxPQUFoQyxhQUFnQ0EsT0FBaEMsdUJBQWdDQSxPQUFPLENBQUVNLEtBQVQsQ0FBZSxDQUFmLENBQWhDLENBRFY7QUFFSyxTQUFHLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLHNDQUFkO0FBQUEsa0JBQXNETixPQUF0RCxhQUFzREEsT0FBdEQsdUJBQXNEQSxPQUFPLENBQUVPO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUcsaUJBQVMsRUFBQyw0QkFBYjtBQUFBLGtCQUEyQ1AsT0FBM0MsYUFBMkNBLE9BQTNDLHVCQUEyQ0EsT0FBTyxDQUFFUTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsd0JBQWI7QUFBQSxvQkFDS0MsK0RBQVcsQ0FBQ1QsT0FBRCxhQUFDQSxPQUFELHVCQUFDQSxPQUFPLENBQUVVLEtBQVY7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUcsbUJBQVMsRUFBQyxzQ0FBYjtBQUFBLG9CQUFxREQsK0RBQVcsQ0FBQ1QsT0FBRCxhQUFDQSxPQUFELHVCQUFDQSxPQUFPLENBQUVXLFNBQVY7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQVNJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQUlQLFdBQVcsQ0FBQyxDQUFELENBQWY7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsZUFBSyxFQUFFRCxRQUExQjtBQUFvQyxrQkFBUSxFQUFFLGtCQUFBUyxLQUFLO0FBQUEsbUJBQUlSLFdBQVcsQ0FBQ1EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBZjtBQUFBO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSTtBQUFRLGlCQUFPLEVBQUUsbUJBQUk7QUFDakJWLHVCQUFXLENBQUNELFFBQUQsQ0FBWDtBQUNILFdBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7O0dBaENRSixhOztLQUFBQSxhO0FBa0NNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tpZF0uYWVkNTYyNDU1NWE0ZGJiYTE1ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi9saWIvaGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsKHtwcm9kdWN0LCBoYW5kbGVRdWFudGl0eVByb2R1Y3R9KSB7XHJcbiAgICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGhhbmRsZVF1YW50aXR5UHJvZHVjdCA9IChxdWFudGl0eSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBxdWFudGl0eVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gbXktNFwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LkFQSV9VUkwrXCIvc3RvcmFnZS9cIitwcm9kdWN0Py50aHVtYlswXX1cclxuICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBweC02XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+e3Byb2R1Y3Q/Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTIgdGV4dC1sZyB0ZXh0LWdyYXktNzAwXCI+e3Byb2R1Y3Q/LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdE1vbmV5KHByb2R1Y3Q/LnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluZS10aHJvdWdoIHRleHQtZ3JheS01MDAgZm9udC1ib2xkXCI+e2Zvcm1hdE1vbmV5KHByb2R1Y3Q/Lm9sZF9wcmljZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+U+G7kSBsxrDhu6NuZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldFF1YW50aXR5KDEpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3F1YW50aXR5fSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0UXVhbnRpdHkoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVhbnRpdHkocXVhbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==