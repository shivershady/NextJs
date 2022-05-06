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
          url = "api/orders/add-from-react&id_website=4"; // try {
          //     const response = yield call(Request, url);
          //     yield put(postOrderSuccess(response));
          // } catch (error) {
          //     yield put(postOrderError(error.message));
          // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL29yZGVyLmpzIl0sIm5hbWVzIjpbInBvc3RPcmRlciIsIlNsaWRlU2FnYSIsImFjdGlvbiIsInVybCIsImNhbGwiLCJSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcmRlclZhbCIsInJlc3BvbnNlIiwiYWxsIiwidGFrZUxhdGVzdCIsIlBPU1RfT1JERVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrSEFXaUJBLFM7Z0lBb0JRQyxTOztBQS9CekI7QUFFQTtBQUVBO0FBS0E7QUFFTyxTQUFVRCxTQUFWLENBQW9CRSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0MsYUFESCw2Q0FFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUEc7QUFRYyxpQkFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUYsR0FBVixFQUFlO0FBQ3RDRyxrQkFBTSxFQUFFLE1BRDhCO0FBRXRDQyxtQkFBTyxFQUFFO0FBQ0wsOEJBQWdCLGtCQURYO0FBRUxDLG9CQUFNLEVBQUUsbUNBRkg7QUFHTCxrQ0FBb0I7QUFIZixhQUY2QjtBQU90Q0MsdUJBQVcsRUFBRSxhQVB5QjtBQVF0Q0MsZ0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLFFBQWY7QUFSZ0MsV0FBZixDQUFWOztBQVJkO0FBUUdDLGtCQVJIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JRLFNBQVViLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNMYyxzREFESztBQUFBO0FBRVAsaUJBQU1DLHFFQUFVLENBQUNDLDBEQUFELEVBQWFqQixTQUFiLENBQWhCOztBQUZPO0FBQUE7QUFBQTtBQUFBO0FBQ1g7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7S0FBVUMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRkYzNmNTYzNjM1MzU5ZDBiNDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgcG9zdE9yZGVyU3VjY2VzcyxcclxuICAgIHBvc3RPcmRlckVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL29yZGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQT1NUX09SREVSfSBmcm9tIFwiLi4vY29udGFudHMvb3JkZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcG9zdE9yZGVyKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9vcmRlcnMvYWRkLWZyb20tcmVhY3QmaWRfd2Vic2l0ZT00YDtcclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAvLyAgICAgeWllbGQgcHV0KHBvc3RPcmRlclN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgeWllbGQgcHV0KHBvc3RPcmRlckVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0LXBsYWluLCAqLypcIixcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3JkZXJWYWwpLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTbGlkZVNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoUE9TVF9PUkRFUiwgcG9zdE9yZGVyKSxcclxuICAgIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=