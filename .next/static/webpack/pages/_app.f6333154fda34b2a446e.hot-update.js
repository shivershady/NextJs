webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/actions/order.js":
/*!******************************!*\
  !*** ./src/actions/order.js ***!
  \******************************/
/*! exports provided: postOrder, postOrderSuccess, postOrderError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrder", function() { return postOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrderSuccess", function() { return postOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrderError", function() { return postOrderError; });
/* harmony import */ var _contants_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/order */ "./src/contants/order.js");

var postOrder = function postOrder(payload) {
  return {
    type: _contants_order__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER"],
    payload: payload
  };
};
var postOrderSuccess = function postOrderSuccess(data, total) {
  return {
    type: _contants_order__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER_SUCCESS"],
    data: data,
    total: total
  };
};
var postOrderError = function postOrderError(errMess) {
  return {
    type: _contants_order__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER_ERROR"],
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

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "./src/sagas/product.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./src/sagas/category.js");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide */ "./src/sagas/slide.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article */ "./src/sagas/article.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order */ "./src/sagas/order.js");


var _marked = /*#__PURE__*/E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);







function rootSaga() {
  return E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_product__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_slide__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_category__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_article__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_order__WEBPACK_IMPORTED_MODULE_6__["default"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

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

/***/ }),

/***/ "./src/sagas/order.js":
/*!****************************!*\
  !*** ./src/sagas/order.js ***!
  \****************************/
/*! exports provided: postOrder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrder", function() { return postOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideSaga; });
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/order */ "./src/actions/order.js");
/* harmony import */ var _contants_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contants/order */ "./src/contants/order.js");


var _marked = /*#__PURE__*/E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postOrder),
    _marked2 = /*#__PURE__*/E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(SlideSaga);





function postOrder(action) {
  var response;
  return E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json, text-plain, */*",
              "X-Requested-With": "XMLHttpRequest"
            },
            credentials: "same-origin",
            body: JSON.stringify(orderVal)
          });

        case 2:
          response = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function SlideSaga() {
  return E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function SlideSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"];
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contants_order__WEBPACK_IMPORTED_MODULE_4__["POST_ORDER"], postOrder);

        case 3:
          _context2.t1 = _context2.sent;
          _context2.t2 = [_context2.t1];
          _context2.next = 7;
          return (0, _context2.t0)(_context2.t2);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
_c = SlideSaga;

var _c;

$RefreshReg$(_c, "SlideSaga");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL29yZGVyLmpzIl0sIm5hbWVzIjpbInBvc3RPcmRlciIsInBheWxvYWQiLCJ0eXBlIiwiVFlQRSIsInBvc3RPcmRlclN1Y2Nlc3MiLCJkYXRhIiwidG90YWwiLCJwb3N0T3JkZXJFcnJvciIsImVyck1lc3MiLCJyb290U2FnYSIsImFsbCIsIlByb2R1Y3RTYWdhIiwiU2xpZGVTYWdhIiwiQ2F0ZWdvcnlTYWdhIiwiQXJ0aWNsZVNhZ2EiLCJPcmRlclNhZ2EiLCJhY3Rpb24iLCJjYWxsIiwiUmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJjcmVkZW50aWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib3JkZXJWYWwiLCJyZXNwb25zZSIsInRha2VMYXRlc3QiLCJQT1NUX09SREVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsT0FBRDtBQUFBLFNBQWM7QUFDbkNDLFFBQUksRUFBRUMsMERBRDZCO0FBRW5DRixXQUFPLEVBQVBBO0FBRm1DLEdBQWQ7QUFBQSxDQUFsQjtBQUlBLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsU0FBa0I7QUFDOUNKLFFBQUksRUFBRUMsa0VBRHdDO0FBRTlDRSxRQUFJLEVBQUVBLElBRndDO0FBRzlDQyxTQUFLLEVBQUVBO0FBSHVDLEdBQWxCO0FBQUEsQ0FBekI7QUFLQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE9BQUQ7QUFBQSxTQUFjO0FBQ3hDTixRQUFJLEVBQUVDLGdFQURrQztBQUV4Q0ssV0FBTyxFQUFQQTtBQUZ3QyxHQUFkO0FBQUEsQ0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrSENKa0JDLFE7O0FBUHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVVBLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU1DLDhEQUFHLENBQUMsQ0FDUkMsd0RBQVcsRUFESCxFQUVSQyxzREFBUyxFQUZELEVBR1JDLHlEQUFZLEVBSEosRUFJUkMsd0RBQVcsRUFKSCxFQUtOQyxzREFBUyxFQUxILENBQUQsQ0FBVDs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0hDSUVmLFM7Z0lBb0JRWSxTOztBQS9CekI7QUFFQTtBQUVBO0FBS0E7QUFFTyxTQUFVWixTQUFWLENBQW9CZ0IsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRYyxpQkFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUMsR0FBVixFQUFlO0FBQ3RDQyxrQkFBTSxFQUFFLE1BRDhCO0FBRXRDQyxtQkFBTyxFQUFFO0FBQ0wsOEJBQWdCLGtCQURYO0FBRUxDLG9CQUFNLEVBQUUsbUNBRkg7QUFHTCxrQ0FBb0I7QUFIZixhQUY2QjtBQU90Q0MsdUJBQVcsRUFBRSxhQVB5QjtBQVF0Q0MsZ0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLFFBQWY7QUFSZ0MsV0FBZixDQUFWOztBQVJkO0FBUUdDLGtCQVJIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JRLFNBQVVoQixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDTEYsc0RBREs7QUFBQTtBQUVQLGlCQUFNbUIscUVBQVUsQ0FBQ0MsMERBQUQsRUFBYTlCLFNBQWIsQ0FBaEI7O0FBRk87QUFBQTtBQUFBO0FBQUE7QUFDWDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtLQUFVWSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjYzMzMxNTRmZGEzNGIyYTQ0NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL29yZGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdE9yZGVyID0gKHBheWxvYWQpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLlBPU1RfT1JERVIsXHJcbiAgICBwYXlsb2FkXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcG9zdE9yZGVyU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuUE9TVF9PUkRFUl9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBwb3N0T3JkZXJFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5QT1NUX09SREVSX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IFByb2R1Y3RTYWdhIGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuaW1wb3J0IENhdGVnb3J5U2FnYSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgU2xpZGVTYWdhIGZyb20gXCIuL3NsaWRlXCI7XHJcbmltcG9ydCBBcnRpY2xlU2FnYSBmcm9tIFwiLi9hcnRpY2xlXCI7XHJcbmltcG9ydCBPcmRlclNhZ2EgZnJvbSBcIi4vb3JkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgUHJvZHVjdFNhZ2EoKSxcclxuICAgIFNsaWRlU2FnYSgpLFxyXG4gICAgQ2F0ZWdvcnlTYWdhKCksXHJcbiAgICBBcnRpY2xlU2FnYSgpLFxyXG4gICAgICBPcmRlclNhZ2EoKVxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBwb3N0T3JkZXJTdWNjZXNzLFxyXG4gICAgcG9zdE9yZGVyRXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvb3JkZXJcIjtcclxuXHJcbmltcG9ydCB7IFBPU1RfT1JERVJ9IGZyb20gXCIuLi9jb250YW50cy9vcmRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBwb3N0T3JkZXIoYWN0aW9uKSB7XHJcbiAgICAvLyBjb25zdCB1cmwgPSBgYXBpL2Jhbm5lcnMvZ2V0P2FjdGl2ZT0xJmlkX3dlYnNpdGU9NCYmcGFnZV90eXBlPSR7YWN0aW9uLm9mZnNldC5wYWdlX3R5cGV9YDtcclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAvLyAgICAgeWllbGQgcHV0KHBvc3RPcmRlclN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgeWllbGQgcHV0KHBvc3RPcmRlckVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0LXBsYWluLCAqLypcIixcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3JkZXJWYWwpLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTbGlkZVNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoUE9TVF9PUkRFUiwgcG9zdE9yZGVyKSxcclxuICAgIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=