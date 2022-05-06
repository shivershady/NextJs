webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/order.js":
/*!*******************************!*\
  !*** ./src/reducers/order.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _contants_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contants/order */ "./src/contants/order.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var initialState = {
  order: {
    loading: false,
    data: [],
    errMess: null
  }
};

var orderReducer = function orderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default()(action.payload.order));

    case _contants_order__WEBPACK_IMPORTED_MODULE_1__["POST_ORDER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        order: _objectSpread(_objectSpread({}, state.order), {}, {
          loading: true
        })
      });

    case _contants_order__WEBPACK_IMPORTED_MODULE_1__["POST_ORDER_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        order: _objectSpread(_objectSpread({}, state.order), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_order__WEBPACK_IMPORTED_MODULE_1__["POST_ORDER_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        order: _objectSpread(_objectSpread({}, state.order), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (orderReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL29yZGVyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm9yZGVyIiwibG9hZGluZyIsImRhdGEiLCJlcnJNZXNzIiwib3JkZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNsb25lRGVlcCIsInBheWxvYWQiLCJUWVBFIiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLE9BQUssRUFBRTtBQUNIQyxXQUFPLEVBQUUsS0FETjtBQUVIQyxRQUFJLEVBQUUsRUFGSDtBQUdIQyxXQUFPLEVBQUU7QUFITjtBQURVLENBQXJCOztBQVFBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6Qk4sWUFBeUI7QUFBQSxNQUFYTyxNQUFXOztBQUNuRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQywwREFBTDtBQUNJLDZDQUFZSCxLQUFaLEdBQXNCSSx1REFBUyxDQUFDSCxNQUFNLENBQUNJLE9BQVAsQ0FBZVYsS0FBaEIsQ0FBL0I7O0FBRUosU0FBS1csMERBQUw7QUFDSSw2Q0FDT04sS0FEUDtBQUVJTCxhQUFLLGtDQUNFSyxLQUFLLENBQUNMLEtBRFI7QUFFREMsaUJBQU8sRUFBRTtBQUZSO0FBRlQ7O0FBT0osU0FBS1Usa0VBQUw7QUFDSSw2Q0FDT04sS0FEUDtBQUVJTCxhQUFLLGtDQUNFSyxLQUFLLENBQUNMLEtBRFI7QUFFREMsaUJBQU8sRUFBRSxLQUZSO0FBR0RDLGNBQUksRUFBRUksTUFBTSxDQUFDSixJQUhaO0FBSURVLGVBQUssRUFBRU4sTUFBTSxDQUFDTTtBQUpiO0FBRlQ7O0FBU0osU0FBS0QsZ0VBQUw7QUFDSSw2Q0FDT04sS0FEUDtBQUVJTCxhQUFLLGtDQUNFSyxLQUFLLENBQUNMLEtBRFI7QUFFREMsaUJBQU8sRUFBRSxLQUZSO0FBR0RFLGlCQUFPLEVBQUVHLE1BQU0sQ0FBQ0g7QUFIZjtBQUZUOztBQVFKO0FBQ0ksYUFBT0UsS0FBUDtBQWhDUjtBQWtDSCxDQW5DRDs7QUFxQ2VELDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWJmYTViYjE3MWE1MzU0MjNlOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL29yZGVyXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG9yZGVyOiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBvcmRlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmNsb25lRGVlcChhY3Rpb24ucGF5bG9hZC5vcmRlcikgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLlBPU1RfT1JERVI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLlBPU1RfT1JERVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuUE9TVF9PUkRFUl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JkZXJSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9