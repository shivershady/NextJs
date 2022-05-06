webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contants/order.js":
/*!*******************************!*\
  !*** ./src/contants/order.js ***!
  \*******************************/
/*! exports provided: POST_ORDER, POST_ORDER_SUCCESS, POST_ORDER_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER", function() { return POST_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER_SUCCESS", function() { return POST_ORDER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER_ERROR", function() { return POST_ORDER_ERROR; });
var POST_ORDER = "CATEGORY/POST_ORDER";
var POST_ORDER_SUCCESS = "CATEGORY/POST_ORDER_SUCCESS";
var POST_ORDER_ERROR = "CATEGORY/POST_ORDER_ERROR";

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

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/reducers/product.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/reducers/category.js");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide */ "./src/reducers/slide.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article */ "./src/reducers/article.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order */ "./src/reducers/order.js");






var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: _category__WEBPACK_IMPORTED_MODULE_2__["default"],
  slide: _slide__WEBPACK_IMPORTED_MODULE_3__["default"],
  article: _article__WEBPACK_IMPORTED_MODULE_4__["default"],
  order: _order__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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

var slideReducer = function slideReducer() {
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

/* harmony default export */ __webpack_exports__["default"] = (slideReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhbnRzL29yZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1Y2Vycy9vcmRlci5qcyJdLCJuYW1lcyI6WyJQT1NUX09SREVSIiwiUE9TVF9PUkRFUl9TVUNDRVNTIiwiUE9TVF9PUkRFUl9FUlJPUiIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdCIsInByb2R1Y3RSZWR1Y2VyIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeVJlZHVjZXIiLCJzbGlkZSIsInNsaWRlUmVkdWNlciIsImFydGljbGUiLCJhcnRpY2xlUmVkdWNlciIsIm9yZGVyIiwib3JkZXJSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImRhdGEiLCJlcnJNZXNzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNsb25lRGVlcCIsInBheWxvYWQiLCJUWVBFIiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFVBQVUsR0FBRyxxQkFBbkI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyw2QkFBM0I7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRywyQkFBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUMsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxTQUFPLEVBQUVDLGdEQUR5QjtBQUVsQ0MsVUFBUSxFQUFFQyxpREFGd0I7QUFHbENDLE9BQUssRUFBRUMsOENBSDJCO0FBSWxDQyxTQUFPLEVBQUdDLGdEQUp3QjtBQUtsQ0MsT0FBSyxFQUFHQyw4Q0FBWUE7QUFMYyxDQUFELENBQW5DO0FBUWVYLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBRUEsSUFBTVksWUFBWSxHQUFHO0FBQ2pCRixPQUFLLEVBQUU7QUFDSEcsV0FBTyxFQUFFLEtBRE47QUFFSEMsUUFBSSxFQUFFLEVBRkg7QUFHSEMsV0FBTyxFQUFFO0FBSE47QUFEVSxDQUFyQjs7QUFRQSxJQUFNUixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFrQztBQUFBLE1BQWpDUyxLQUFpQyx1RUFBekJKLFlBQXlCO0FBQUEsTUFBWEssTUFBVzs7QUFDbkQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MsMERBQUw7QUFDSSw2Q0FBWUgsS0FBWixHQUFzQkksdURBQVMsQ0FBQ0gsTUFBTSxDQUFDSSxPQUFQLENBQWVYLEtBQWhCLENBQS9COztBQUVKLFNBQUtZLDBEQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSU4sYUFBSyxrQ0FDRU0sS0FBSyxDQUFDTixLQURSO0FBRURHLGlCQUFPLEVBQUU7QUFGUjtBQUZUOztBQU9KLFNBQUtTLGtFQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSU4sYUFBSyxrQ0FDRU0sS0FBSyxDQUFDTixLQURSO0FBRURHLGlCQUFPLEVBQUUsS0FGUjtBQUdEQyxjQUFJLEVBQUVHLE1BQU0sQ0FBQ0gsSUFIWjtBQUlEUyxlQUFLLEVBQUVOLE1BQU0sQ0FBQ007QUFKYjtBQUZUOztBQVNKLFNBQUtELGdFQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSU4sYUFBSyxrQ0FDRU0sS0FBSyxDQUFDTixLQURSO0FBRURHLGlCQUFPLEVBQUUsS0FGUjtBQUdERSxpQkFBTyxFQUFFRSxNQUFNLENBQUNGO0FBSGY7QUFGVDs7QUFRSjtBQUNJLGFBQU9DLEtBQVA7QUFoQ1I7QUFrQ0gsQ0FuQ0Q7O0FBcUNlVCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA5MmNiYTQ5Y2U3M2I2MjFlZTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUE9TVF9PUkRFUiA9IFwiQ0FURUdPUlkvUE9TVF9PUkRFUlwiO1xyXG5leHBvcnQgY29uc3QgUE9TVF9PUkRFUl9TVUNDRVNTID0gXCJDQVRFR09SWS9QT1NUX09SREVSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFBPU1RfT1JERVJfRVJST1IgPSBcIkNBVEVHT1JZL1BPU1RfT1JERVJfRVJST1JcIjsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBjYXRlZ29yeVJlZHVjZXIgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHNsaWRlUmVkdWNlciBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgYXJ0aWNsZVJlZHVjZXIgZnJvbSBcIi4vYXJ0aWNsZVwiO1xyXG5pbXBvcnQgb3JkZXJSZWR1Y2VyIGZyb20gXCIuL29yZGVyXCI7XHJcblxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHByb2R1Y3Q6IHByb2R1Y3RSZWR1Y2VyLFxyXG4gIGNhdGVnb3J5OiBjYXRlZ29yeVJlZHVjZXIsXHJcbiAgc2xpZGU6IHNsaWRlUmVkdWNlcixcclxuICBhcnRpY2xlIDogYXJ0aWNsZVJlZHVjZXIsXHJcbiAgb3JkZXIgOiBvcmRlclJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL29yZGVyXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG9yZGVyOiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBzbGlkZVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmNsb25lRGVlcChhY3Rpb24ucGF5bG9hZC5vcmRlcikgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLlBPU1RfT1JERVI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLlBPU1RfT1JERVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuUE9TVF9PUkRFUl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9