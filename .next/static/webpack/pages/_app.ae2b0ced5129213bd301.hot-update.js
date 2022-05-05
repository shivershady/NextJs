webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/article.js":
/*!*********************************!*\
  !*** ./src/reducers/article.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _contants_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contants/article */ "./src/contants/article.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var initialState = {
  article: {
    loading: false,
    data: [],
    errMess: null
  }
};

var articleReducer = function articleReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default()(action.payload.article));

    case _contants_article__WEBPACK_IMPORTED_MODULE_1__["GET_ARTICLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        article: _objectSpread(_objectSpread({}, state.article), {}, {
          loading: true
        })
      });

    case _contants_article__WEBPACK_IMPORTED_MODULE_1__["GET_ARTICLE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        article: _objectSpread(_objectSpread({}, state.article), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_article__WEBPACK_IMPORTED_MODULE_1__["GET_ARTICLE_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        article: _objectSpread(_objectSpread({}, state.article), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (articleReducer);

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





var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: _category__WEBPACK_IMPORTED_MODULE_2__["default"],
  slide: _slide__WEBPACK_IMPORTED_MODULE_3__["default"],
  article: _article__WEBPACK_IMPORTED_MODULE_4__["default"]
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJhcnRpY2xlIiwibG9hZGluZyIsImRhdGEiLCJlcnJNZXNzIiwiYXJ0aWNsZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY2xvbmVEZWVwIiwicGF5bG9hZCIsIlRZUEUiLCJ0b3RhbCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdCIsInByb2R1Y3RSZWR1Y2VyIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeVJlZHVjZXIiLCJzbGlkZSIsInNsaWRlUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ0xDLFdBQU8sRUFBRSxLQURKO0FBRUxDLFFBQUksRUFBRSxFQUZEO0FBR0xDLFdBQU8sRUFBRTtBQUhKO0FBRFEsQ0FBckI7O0FBUUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJOLFlBQXlCO0FBQUEsTUFBWE8sTUFBVzs7QUFDckQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MsMERBQUw7QUFDSSw2Q0FBWUgsS0FBWixHQUFzQkksdURBQVMsQ0FBQ0gsTUFBTSxDQUFDSSxPQUFQLENBQWVWLE9BQWhCLENBQS9COztBQUVKLFNBQUtXLDZEQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFUUwsZUFBTyxrQ0FDSkssS0FBSyxDQUFDTCxPQURGO0FBRVBDLGlCQUFPLEVBQUU7QUFGRjtBQUZmOztBQU9KLFNBQUtVLHFFQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSUwsZUFBTyxrQ0FDQUssS0FBSyxDQUFDTCxPQUROO0FBRUhDLGlCQUFPLEVBQUUsS0FGTjtBQUdIQyxjQUFJLEVBQUVJLE1BQU0sQ0FBQ0osSUFIVjtBQUlIVSxlQUFLLEVBQUVOLE1BQU0sQ0FBQ007QUFKWDtBQUZYOztBQVNKLFNBQUtELG1FQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSUwsZUFBTyxrQ0FDQUssS0FBSyxDQUFDTCxPQUROO0FBRUhDLGlCQUFPLEVBQUUsS0FGTjtBQUdIRSxpQkFBTyxFQUFFRyxNQUFNLENBQUNIO0FBSGI7QUFGWDs7QUFRSjtBQUNJLGFBQU9FLEtBQVA7QUFoQ1I7QUFrQ0gsQ0FuQ0Q7O0FBcUNlRCw2RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNUyxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbENDLFNBQU8sRUFBRUMsZ0RBRHlCO0FBRWxDQyxVQUFRLEVBQUVDLGlEQUZ3QjtBQUdsQ0MsT0FBSyxFQUFFQyw4Q0FIMkI7QUFJbENwQixTQUFPLEVBQUdJLGdEQUFjQTtBQUpVLENBQUQsQ0FBbkM7QUFPZVMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hZTJiMGNlZDUxMjkyMTNiZDMwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2gvY2xvbmVEZWVwXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBhcnRpY2xlOiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBhcnRpY2xlUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLmFydGljbGUpIH07XHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQVJUSUNMRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuYXJ0aWNsZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0FSVElDTEVfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgcHJvZHVjdFJlZHVjZXIgZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5pbXBvcnQgY2F0ZWdvcnlSZWR1Y2VyIGZyb20gXCIuL2NhdGVnb3J5XCI7XHJcbmltcG9ydCBzbGlkZVJlZHVjZXIgZnJvbSBcIi4vc2xpZGVcIjtcclxuaW1wb3J0IGFydGljbGVSZWR1Y2VyIGZyb20gXCIuL2FydGljbGVcIjtcclxuXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcHJvZHVjdDogcHJvZHVjdFJlZHVjZXIsXHJcbiAgY2F0ZWdvcnk6IGNhdGVnb3J5UmVkdWNlcixcclxuICBzbGlkZTogc2xpZGVSZWR1Y2VyLFxyXG4gIGFydGljbGUgOiBhcnRpY2xlUmVkdWNlclxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9