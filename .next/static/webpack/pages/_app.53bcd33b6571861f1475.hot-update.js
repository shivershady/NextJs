webpackHotUpdate_N_E("pages/_app",{

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
  var url, response;
  return E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // const url = `api/banners/get?active=1&id_website=4&&page_type=${action.offset.page_type}`;
          // try {
          //     const response = yield call(Request, url);
          //     yield put(postOrderSuccess(response));
          // } catch (error) {
          //     yield put(postOrderError(error.message));
          // }
          url = "api/banners/get?active=1&id_website=4&&page_type=".concat(action.offset.page_type);
          _context.next = 3;
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

        case 3:
          response = _context.sent;

        case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL29yZGVyLmpzIl0sIm5hbWVzIjpbInBvc3RPcmRlciIsIlNsaWRlU2FnYSIsImFjdGlvbiIsInVybCIsIm9mZnNldCIsInBhZ2VfdHlwZSIsImNhbGwiLCJSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcmRlclZhbCIsInJlc3BvbnNlIiwiYWxsIiwidGFrZUxhdGVzdCIsIlBPU1RfT1JERVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrSEFXaUJBLFM7Z0lBcUJRQyxTOztBQWhDekI7QUFFQTtBQUVBO0FBS0E7QUFFTyxTQUFVRCxTQUFWLENBQW9CRSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNNQyxhQVJILDhEQVE2REQsTUFBTSxDQUFDRSxNQUFQLENBQWNDLFNBUjNFO0FBQUE7QUFTYyxpQkFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUosR0FBVixFQUFlO0FBQ3RDSyxrQkFBTSxFQUFFLE1BRDhCO0FBRXRDQyxtQkFBTyxFQUFFO0FBQ0wsOEJBQWdCLGtCQURYO0FBRUxDLG9CQUFNLEVBQUUsbUNBRkg7QUFHTCxrQ0FBb0I7QUFIZixhQUY2QjtBQU90Q0MsdUJBQVcsRUFBRSxhQVB5QjtBQVF0Q0MsZ0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLFFBQWY7QUFSZ0MsV0FBZixDQUFWOztBQVRkO0FBU0dDLGtCQVRIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUJRLFNBQVVmLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNMZ0Isc0RBREs7QUFBQTtBQUVQLGlCQUFNQyxxRUFBVSxDQUFDQywwREFBRCxFQUFhbkIsU0FBYixDQUFoQjs7QUFGTztBQUFBO0FBQUE7QUFBQTtBQUNYOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0tBQVVDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41M2JjZDMzYjY1NzE4NjFmMTQ3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHBvc3RPcmRlclN1Y2Nlc3MsXHJcbiAgICBwb3N0T3JkZXJFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9vcmRlclwiO1xyXG5cclxuaW1wb3J0IHsgUE9TVF9PUkRFUn0gZnJvbSBcIi4uL2NvbnRhbnRzL29yZGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHBvc3RPcmRlcihhY3Rpb24pIHtcclxuICAgIC8vIGNvbnN0IHVybCA9IGBhcGkvYmFubmVycy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00JiZwYWdlX3R5cGU9JHthY3Rpb24ub2Zmc2V0LnBhZ2VfdHlwZX1gO1xyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgIC8vICAgICB5aWVsZCBwdXQocG9zdE9yZGVyU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgICB5aWVsZCBwdXQocG9zdE9yZGVyRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgdXJsID0gYGFwaS9iYW5uZXJzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTQmJnBhZ2VfdHlwZT0ke2FjdGlvbi5vZmZzZXQucGFnZV90eXBlfWA7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC1wbGFpbiwgKi8qXCIsXHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9yZGVyVmFsKSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogU2xpZGVTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KFBPU1RfT1JERVIsIHBvc3RPcmRlciksXHJcbiAgICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9