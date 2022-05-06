webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/actions/product.js":
/*!********************************!*\
  !*** ./src/actions/product.js ***!
  \********************************/
/*! exports provided: getProducts, getProductsSuccess, getProductsError, getSellingProducts, getSellingProductsSuccess, getSellingProductsError, getHotProducts, getHotProductsSuccess, getHotProductsError, getProductDetail, getProductDetailSuccess, getProductDetailError */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetail", function() { return getProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailSuccess", function() { return getProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailError", function() { return getProductDetailError; });
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

var getProductDetail = function getProductDetail(payload) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_DETAIL"],
    payload: payload
  };
};
var getProductDetailSuccess = function getProductDetailSuccess(data, total) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_DETAIL_SUCCESS"],
    data: data,
    total: total
  };
};
var getProductDetailError = function getProductDetailError(errMess) {
  return {
    type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_DETAIL_ERROR"],
    errMess: errMess
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0cyIsIm9mZnNldCIsInBhZ2UiLCJ0eXBlIiwiVFlQRSIsImdldFByb2R1Y3RzU3VjY2VzcyIsImRhdGEiLCJ0b3RhbCIsImdldFByb2R1Y3RzRXJyb3IiLCJlcnJNZXNzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzU3VjY2VzcyIsImdldFNlbGxpbmdQcm9kdWN0c0Vycm9yIiwiZ2V0SG90UHJvZHVjdHMiLCJnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRIb3RQcm9kdWN0c0Vycm9yIiwiZ2V0UHJvZHVjdERldGFpbCIsInBheWxvYWQiLCJnZXRQcm9kdWN0RGV0YWlsU3VjY2VzcyIsImdldFByb2R1Y3REZXRhaWxFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE1BQUQsRUFBU0MsSUFBVDtBQUFBLFNBQW1CO0FBQzVDQyxRQUFJLEVBQUVDLDhEQURzQztBQUU1Q0gsVUFBTSxFQUFOQSxNQUY0QztBQUc1Q0MsUUFBSSxFQUFKQTtBQUg0QyxHQUFuQjtBQUFBLENBQXBCO0FBS0EsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxTQUFrQjtBQUNsREosUUFBSSxFQUFFQyxzRUFENEM7QUFFbERFLFFBQUksRUFBRUEsSUFGNEM7QUFHbERDLFNBQUssRUFBRUE7QUFIMkMsR0FBbEI7QUFBQSxDQUEzQjtBQUtBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsT0FBRDtBQUFBLFNBQWM7QUFDNUNOLFFBQUksRUFBRUMsb0VBRHNDO0FBRTVDSyxXQUFPLEVBQVBBO0FBRjRDLEdBQWQ7QUFBQSxDQUF6QixDLENBS1A7O0FBRU8sSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDVCxNQUFELEVBQVNDLElBQVQ7QUFBQSxTQUFtQjtBQUNuREMsUUFBSSxFQUFFQyxzRUFENkM7QUFFbkRILFVBQU0sRUFBTkEsTUFGbUQ7QUFHbkRDLFFBQUksRUFBSkE7QUFIbUQsR0FBbkI7QUFBQSxDQUEzQjtBQUtBLElBQU1TLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQ0wsSUFBRCxFQUFPQyxLQUFQO0FBQUEsU0FBa0I7QUFDekRKLFFBQUksRUFBRUMsOEVBRG1EO0FBRXpERSxRQUFJLEVBQUVBLElBRm1EO0FBR3pEQyxTQUFLLEVBQUVBO0FBSGtELEdBQWxCO0FBQUEsQ0FBbEM7QUFLQSxJQUFNSyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNILE9BQUQ7QUFBQSxTQUFjO0FBQ25ETixRQUFJLEVBQUVDLDRFQUQ2QztBQUVuREssV0FBTyxFQUFQQTtBQUZtRCxHQUFkO0FBQUEsQ0FBaEMsQyxDQUtQOztBQUVPLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ1osTUFBRCxFQUFTQyxJQUFUO0FBQUEsU0FBbUI7QUFDL0NDLFFBQUksRUFBRUMsa0VBRHlDO0FBRS9DSCxVQUFNLEVBQU5BLE1BRitDO0FBRy9DQyxRQUFJLEVBQUpBO0FBSCtDLEdBQW5CO0FBQUEsQ0FBdkI7QUFLQSxJQUFNWSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNSLElBQUQsRUFBT0MsS0FBUDtBQUFBLFNBQWtCO0FBQ3JESixRQUFJLEVBQUVDLDBFQUQrQztBQUVyREUsUUFBSSxFQUFFQSxJQUYrQztBQUdyREMsU0FBSyxFQUFFQTtBQUg4QyxHQUFsQjtBQUFBLENBQTlCO0FBS0EsSUFBTVEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDTixPQUFEO0FBQUEsU0FBYztBQUMvQ04sUUFBSSxFQUFFQyx3RUFEeUM7QUFFL0NLLFdBQU8sRUFBUEE7QUFGK0MsR0FBZDtBQUFBLENBQTVCLEMsQ0FLUDs7QUFDTyxJQUFNTyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLE9BQUQ7QUFBQSxTQUFjO0FBQzVDZCxRQUFJLEVBQUVDLG9FQURzQztBQUU1Q2EsV0FBTyxFQUFQQTtBQUY0QyxHQUFkO0FBQUEsQ0FBekI7QUFJQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNaLElBQUQsRUFBT0MsS0FBUDtBQUFBLFNBQWtCO0FBQ3ZESixRQUFJLEVBQUVDLDRFQURpRDtBQUV2REUsUUFBSSxFQUFFQSxJQUZpRDtBQUd2REMsU0FBSyxFQUFFQTtBQUhnRCxHQUFsQjtBQUFBLENBQWhDO0FBS0EsSUFBTVkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDVixPQUFEO0FBQUEsU0FBYztBQUNqRE4sUUFBSSxFQUFFQywwRUFEMkM7QUFFakRLLFdBQU8sRUFBUEE7QUFGaUQsR0FBZDtBQUFBLENBQTlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmZkNTM1NjY3YjNkOGU2MGI5YjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVFMsXHJcbiAgb2Zmc2V0LFxyXG4gIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy9TZWxsaW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VsbGluZ1Byb2R1Y3RzID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTLFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbiAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vSG90PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHMgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUUyxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vRGV0YWlsID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3REZXRhaWwgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUX0RFVEFJTCxcclxuICBwYXlsb2FkXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdERldGFpbFN1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG4gIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RGV0YWlsRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUX0RFVEFJTF9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==