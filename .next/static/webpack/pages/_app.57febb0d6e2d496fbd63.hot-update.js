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
          url = "api/orders/add-from-react?id_website=4";
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json, text-plain, */*",
              "X-Requested-With": "XMLHttpRequest"
            },
            credentials: "same-origin",
            body: JSON.stringify(action.payload)
          });

        case 4:
          response = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_order__WEBPACK_IMPORTED_MODULE_3__["postOrderSuccess"])(response));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_order__WEBPACK_IMPORTED_MODULE_3__["postOrderError"])(_context.t0.message));

        case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL29yZGVyLmpzIl0sIm5hbWVzIjpbInBvc3RPcmRlciIsIlNsaWRlU2FnYSIsImFjdGlvbiIsInVybCIsImNhbGwiLCJSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXlsb2FkIiwicmVzcG9uc2UiLCJwdXQiLCJwb3N0T3JkZXJTdWNjZXNzIiwicG9zdE9yZGVyRXJyb3IiLCJtZXNzYWdlIiwiYWxsIiwidGFrZUxhdGVzdCIsIlBPU1RfT1JERVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrSEFXaUJBLFM7Z0lBb0JRQyxTOztBQS9CekI7QUFFQTtBQUVBO0FBS0E7QUFFTyxTQUFVRCxTQUFWLENBQW9CRSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0MsYUFESDtBQUFBO0FBQUE7QUFHa0IsaUJBQU1DLCtEQUFJLENBQUNDLHNEQUFELEVBQVVGLEdBQVYsRUFBZTtBQUN0Q0csa0JBQU0sRUFBRSxNQUQ4QjtBQUV0Q0MsbUJBQU8sRUFBRTtBQUNMLDhCQUFnQixrQkFEWDtBQUVMQyxvQkFBTSxFQUFFLG1DQUZIO0FBR0wsa0NBQW9CO0FBSGYsYUFGNkI7QUFPdENDLHVCQUFXLEVBQUUsYUFQeUI7QUFRdENDLGdCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixNQUFNLENBQUNXLE9BQXRCO0FBUmdDLFdBQWYsQ0FBVjs7QUFIbEI7QUFHT0Msa0JBSFA7QUFBQTtBQWFDLGlCQUFNQyw4REFBRyxDQUFDQyx1RUFBZ0IsQ0FBQ0YsUUFBRCxDQUFqQixDQUFUOztBQWJEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVDLGlCQUFNQyw4REFBRyxDQUFDRSxxRUFBYyxDQUFDLFlBQU1DLE9BQVAsQ0FBZixDQUFUOztBQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JRLFNBQVVqQixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDTGtCLHNEQURLO0FBQUE7QUFFUCxpQkFBTUMscUVBQVUsQ0FBQ0MsMERBQUQsRUFBYXJCLFNBQWIsQ0FBaEI7O0FBRk87QUFBQTtBQUFBO0FBQUE7QUFDWDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtLQUFVQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTdmZWJiMGQ2ZTJkNDk2ZmJkNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBwb3N0T3JkZXJTdWNjZXNzLFxyXG4gICAgcG9zdE9yZGVyRXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvb3JkZXJcIjtcclxuXHJcbmltcG9ydCB7IFBPU1RfT1JERVJ9IGZyb20gXCIuLi9jb250YW50cy9vcmRlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBwb3N0T3JkZXIoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL29yZGVycy9hZGQtZnJvbS1yZWFjdD9pZF93ZWJzaXRlPTRgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQtcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dChwb3N0T3JkZXJTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChwb3N0T3JkZXJFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogU2xpZGVTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KFBPU1RfT1JERVIsIHBvc3RPcmRlciksXHJcbiAgICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9