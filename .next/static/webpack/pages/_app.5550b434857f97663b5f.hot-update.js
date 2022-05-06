webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/actions/product.js":
/*!********************************!*\
  !*** ./src/actions/product.js ***!
  \********************************/
/*! exports provided: getProducts, getProductsSuccess, getProductsError, getSellingProducts, getSellingProductsSuccess, getSellingProductsError, getHotProducts, getHotProductsSuccess, getHotProductsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSuccess", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsError", function() { return getProductsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProducts", function() { return getSellingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProductsSuccess", function() { return getSellingProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProductsError", function() { return getSellingProductsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProducts", function() { return getHotProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProductsSuccess", function() { return getHotProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProductsError", function() { return getHotProductsError; });
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");

var getProducts = function getProducts(offset, page) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"],
    offset: offset,
    page: page
  };
};
var getProductsSuccess = function getProductsSuccess(data, total) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_SUCCESS"],
    data: data,
    total: total
  };
};
var getProductsError = function getProductsError(errMess) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_ERROR"],
    errMess: errMess
  };
}; //Selling===============================================================

var getSellingProducts = function getSellingProducts(offset, page) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS"],
    offset: offset,
    page: page
  };
};
var getSellingProductsSuccess = function getSellingProductsSuccess(data, total) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_SUCCESS"],
    data: data,
    total: total
  };
};
var getSellingProductsError = function getSellingProductsError(errMess) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_ERROR"],
    errMess: errMess
  };
}; //Hot===============================================================

var getHotProducts = function getHotProducts(offset, page) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS"],
    offset: offset,
    page: page
  };
};
var getHotProductsSuccess = function getHotProductsSuccess(data, total) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_SUCCESS"],
    data: data,
    total: total
  };
};
var getHotProductsError = function getHotProductsError(errMess) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_ERROR"],
    errMess: errMess
  };
}; //Detail ================================================================

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0cyIsIm9mZnNldCIsInBhZ2UiLCJ0eXBlIiwiVFlQRSIsImdldFByb2R1Y3RzU3VjY2VzcyIsImRhdGEiLCJ0b3RhbCIsImdldFByb2R1Y3RzRXJyb3IiLCJlcnJNZXNzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzU3VjY2VzcyIsImdldFNlbGxpbmdQcm9kdWN0c0Vycm9yIiwiZ2V0SG90UHJvZHVjdHMiLCJnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRIb3RQcm9kdWN0c0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRCxFQUFTQyxJQUFUO0FBQUEsU0FBbUI7QUFDNUNDLFFBQUksRUFBRUMsOERBRHNDO0FBRTVDSCxVQUFNLEVBQU5BLE1BRjRDO0FBRzVDQyxRQUFJLEVBQUpBO0FBSDRDLEdBQW5CO0FBQUEsQ0FBcEI7QUFLQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFNBQWtCO0FBQ2xESixRQUFJLEVBQUVDLHNFQUQ0QztBQUVsREUsUUFBSSxFQUFFQSxJQUY0QztBQUdsREMsU0FBSyxFQUFFQTtBQUgyQyxHQUFsQjtBQUFBLENBQTNCO0FBS0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxPQUFEO0FBQUEsU0FBYztBQUM1Q04sUUFBSSxFQUFFQyxvRUFEc0M7QUFFNUNLLFdBQU8sRUFBUEE7QUFGNEMsR0FBZDtBQUFBLENBQXpCLEMsQ0FLUDs7QUFFTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNULE1BQUQsRUFBU0MsSUFBVDtBQUFBLFNBQW1CO0FBQ25EQyxRQUFJLEVBQUVDLHNFQUQ2QztBQUVuREgsVUFBTSxFQUFOQSxNQUZtRDtBQUduREMsUUFBSSxFQUFKQTtBQUhtRCxHQUFuQjtBQUFBLENBQTNCO0FBS0EsSUFBTVMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDTCxJQUFELEVBQU9DLEtBQVA7QUFBQSxTQUFrQjtBQUN6REosUUFBSSxFQUFFQyw4RUFEbUQ7QUFFekRFLFFBQUksRUFBRUEsSUFGbUQ7QUFHekRDLFNBQUssRUFBRUE7QUFIa0QsR0FBbEI7QUFBQSxDQUFsQztBQUtBLElBQU1LLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0gsT0FBRDtBQUFBLFNBQWM7QUFDbkROLFFBQUksRUFBRUMsNEVBRDZDO0FBRW5ESyxXQUFPLEVBQVBBO0FBRm1ELEdBQWQ7QUFBQSxDQUFoQyxDLENBS1A7O0FBRU8sSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDWixNQUFELEVBQVNDLElBQVQ7QUFBQSxTQUFtQjtBQUMvQ0MsUUFBSSxFQUFFQyxrRUFEeUM7QUFFL0NILFVBQU0sRUFBTkEsTUFGK0M7QUFHL0NDLFFBQUksRUFBSkE7QUFIK0MsR0FBbkI7QUFBQSxDQUF2QjtBQUtBLElBQU1ZLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ1IsSUFBRCxFQUFPQyxLQUFQO0FBQUEsU0FBa0I7QUFDckRKLFFBQUksRUFBRUMsMEVBRCtDO0FBRXJERSxRQUFJLEVBQUVBLElBRitDO0FBR3JEQyxTQUFLLEVBQUVBO0FBSDhDLEdBQWxCO0FBQUEsQ0FBOUI7QUFLQSxJQUFNUSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNOLE9BQUQ7QUFBQSxTQUFjO0FBQy9DTixRQUFJLEVBQUVDLHdFQUR5QztBQUUvQ0ssV0FBTyxFQUFQQTtBQUYrQyxHQUFkO0FBQUEsQ0FBNUIsQyxDQUtQIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTU1MGI0MzQ4NTdmOTc2NjNiNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVFMsXHJcbiAgb2Zmc2V0LFxyXG4gIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy9TZWxsaW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VsbGluZ1Byb2R1Y3RzID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTLFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbiAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vSG90PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHMgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUUyxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vRGV0YWlsID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==