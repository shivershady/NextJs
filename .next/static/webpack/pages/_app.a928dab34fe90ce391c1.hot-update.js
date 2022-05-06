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
  var url, _response, response;

  return E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "api/orders/add-from-react&id_website=4";
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url);

        case 4:
          _response = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_order__WEBPACK_IMPORTED_MODULE_3__["postOrderSuccess"])(_response));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_order__WEBPACK_IMPORTED_MODULE_3__["postOrderError"])(_context.t0.message));

        case 13:
          _context.next = 15;
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

        case 15:
          response = _context.sent;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL29yZGVyLmpzIl0sIm5hbWVzIjpbInBvc3RPcmRlciIsIlNsaWRlU2FnYSIsImFjdGlvbiIsInVybCIsImNhbGwiLCJSZXF1ZXN0IiwicmVzcG9uc2UiLCJwdXQiLCJwb3N0T3JkZXJTdWNjZXNzIiwicG9zdE9yZGVyRXJyb3IiLCJtZXNzYWdlIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcmRlclZhbCIsImFsbCIsInRha2VMYXRlc3QiLCJQT1NUX09SREVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0hBV2lCQSxTO2dJQW9CUUMsUzs7QUEvQnpCO0FBRUE7QUFFQTtBQUtBO0FBRU8sU0FBVUQsU0FBVixDQUFvQkUsTUFBcEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQyxhQURIO0FBQUE7QUFBQTtBQUdrQixpQkFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUYsR0FBVixDQUFWOztBQUhsQjtBQUdPRyxtQkFIUDtBQUFBO0FBSUMsaUJBQU1DLDhEQUFHLENBQUNDLHVFQUFnQixDQUFDRixTQUFELENBQWpCLENBQVQ7O0FBSkQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUMsaUJBQU1DLDhEQUFHLENBQUNFLHFFQUFjLENBQUMsWUFBTUMsT0FBUCxDQUFmLENBQVQ7O0FBTkQ7QUFBQTtBQVFjLGlCQUFNTiwrREFBSSxDQUFDQyxzREFBRCxFQUFVRixHQUFWLEVBQWU7QUFDdENRLGtCQUFNLEVBQUUsTUFEOEI7QUFFdENDLG1CQUFPLEVBQUU7QUFDTCw4QkFBZ0Isa0JBRFg7QUFFTEMsb0JBQU0sRUFBRSxtQ0FGSDtBQUdMLGtDQUFvQjtBQUhmLGFBRjZCO0FBT3RDQyx1QkFBVyxFQUFFLGFBUHlCO0FBUXRDQyxnQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsUUFBZjtBQVJnQyxXQUFmLENBQVY7O0FBUmQ7QUFRR1osa0JBUkg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQlEsU0FBVUwsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ0xrQixzREFESztBQUFBO0FBRVAsaUJBQU1DLHFFQUFVLENBQUNDLDBEQUFELEVBQWFyQixTQUFiLENBQWhCOztBQUZPO0FBQUE7QUFBQTtBQUFBO0FBQ1g7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7S0FBVUMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE5MjhkYWIzNGZlOTBjZTM5MWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgcG9zdE9yZGVyU3VjY2VzcyxcclxuICAgIHBvc3RPcmRlckVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL29yZGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQT1NUX09SREVSfSBmcm9tIFwiLi4vY29udGFudHMvb3JkZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcG9zdE9yZGVyKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9vcmRlcnMvYWRkLWZyb20tcmVhY3QmaWRfd2Vic2l0ZT00YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHBvc3RPcmRlclN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHBvc3RPcmRlckVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0LXBsYWluLCAqLypcIixcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3JkZXJWYWwpLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTbGlkZVNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoUE9TVF9PUkRFUiwgcG9zdE9yZGVyKSxcclxuICAgIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=