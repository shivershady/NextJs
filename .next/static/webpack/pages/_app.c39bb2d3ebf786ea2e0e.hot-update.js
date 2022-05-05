webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/actions/article.js":
/*!********************************!*\
  !*** ./src/actions/article.js ***!
  \********************************/
/*! exports provided: getArticle, getArticleSuccess, getArticleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleSuccess", function() { return getArticleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleError", function() { return getArticleError; });
/* harmony import */ var _contants_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/article */ "./src/contants/article.js");

var getArticle = function getArticle(offset, page) {
  return {
    type: _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE"],
    offset: offset,
    page: page
  };
};
var getArticleSuccess = function getArticleSuccess(data, total) {
  return {
    type: _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_SUCCESS"],
    data: data,
    total: total
  };
};
var getArticleError = function getArticleError(errMess) {
  return {
    type: _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_ERROR"],
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

/***/ "./src/sagas/article.js":
/*!******************************!*\
  !*** ./src/sagas/article.js ***!
  \******************************/
/*! exports provided: getArticle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideSaga; });
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/article */ "./src/actions/article.js");
/* harmony import */ var _contants_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contants/article */ "./src/contants/article.js");


var _marked = /*#__PURE__*/E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getArticle),
    _marked2 = /*#__PURE__*/E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(SlideSaga);





function getArticle(action) {
  var url, response;
  return E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getArticle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "api/banners/get?active=1&id_website=4&&page_type=".concat(action.offset.page_type);
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url);

        case 4:
          response = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_article__WEBPACK_IMPORTED_MODULE_5__["getArticleSuccess"])(response));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_article__WEBPACK_IMPORTED_MODULE_5__["getArticleError"])(_context.t0.message));

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contants_article__WEBPACK_IMPORTED_MODULE_4__["GET_ARTICLE"], getArticle);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL2FydGljbGUuanMiXSwibmFtZXMiOlsiZ2V0QXJ0aWNsZSIsIm9mZnNldCIsInBhZ2UiLCJ0eXBlIiwiVFlQRSIsImdldEFydGljbGVTdWNjZXNzIiwiZGF0YSIsInRvdGFsIiwiZ2V0QXJ0aWNsZUVycm9yIiwiZXJyTWVzcyIsIlNsaWRlU2FnYSIsImFjdGlvbiIsInVybCIsInBhZ2VfdHlwZSIsImNhbGwiLCJSZXF1ZXN0IiwicmVzcG9uc2UiLCJwdXQiLCJtZXNzYWdlIiwiYWxsIiwidGFrZUxhdGVzdCIsIkdFVF9BUlRJQ0xFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFTQyxJQUFUO0FBQUEsU0FBbUI7QUFDekNDLFFBQUksRUFBRUMsNkRBRG1DO0FBRXpDSCxVQUFNLEVBQU5BLE1BRnlDO0FBR3pDQyxRQUFJLEVBQUpBO0FBSHlDLEdBQW5CO0FBQUEsQ0FBbkI7QUFLQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFNBQWtCO0FBQy9DSixRQUFJLEVBQUVDLHFFQUR5QztBQUUvQ0UsUUFBSSxFQUFFQSxJQUZ5QztBQUcvQ0MsU0FBSyxFQUFFQTtBQUh3QyxHQUFsQjtBQUFBLENBQTFCO0FBS0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFEO0FBQUEsU0FBYztBQUN6Q04sUUFBSSxFQUFFQyxtRUFEbUM7QUFFekNLLFdBQU8sRUFBUEE7QUFGeUMsR0FBZDtBQUFBLENBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrSENEVVQsVTtnSUFVUVUsUzs7QUFyQnpCO0FBRUE7QUFFQTtBQUtBO0FBRU8sU0FBVVYsVUFBVixDQUFxQlcsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dDLGFBREgsOERBQzZERCxNQUFNLENBQUNWLE1BQVAsQ0FBY1ksU0FEM0U7QUFBQTtBQUFBO0FBR2tCLGlCQUFNQywrREFBSSxDQUFDQyxzREFBRCxFQUFVSCxHQUFWLENBQVY7O0FBSGxCO0FBR09JLGtCQUhQO0FBQUE7QUFJQyxpQkFBTUMsOERBQUcsQ0FBQ1osMEVBQWlCLENBQUNXLFFBQUQsQ0FBbEIsQ0FBVDs7QUFKRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQyxpQkFBTUMsOERBQUcsQ0FBQ1Qsd0VBQWUsQ0FBQyxZQUFNVSxPQUFQLENBQWhCLENBQVQ7O0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVUSxTQUFVUixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDTFMsc0RBREs7QUFBQTtBQUVQLGlCQUFNQyxxRUFBVSxDQUFDQyw2REFBRCxFQUFjckIsVUFBZCxDQUFoQjs7QUFGTztBQUFBO0FBQUE7QUFBQTtBQUNYOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0tBQVVVLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMzliYjJkM2ViZjc4NmVhMmUwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvYXJ0aWNsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFydGljbGUgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQVJUSUNMRSxcclxuICAgIG9mZnNldCxcclxuICAgIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0QXJ0aWNsZVN1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9BUlRJQ0xFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQVJUSUNMRV9FUlJPUixcclxuICAgIGVyck1lc3MsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0QXJ0aWNsZVN1Y2Nlc3MsXHJcbiAgICBnZXRBcnRpY2xlRXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvYXJ0aWNsZVwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX0FSVElDTEV9IGZyb20gXCIuLi9jb250YW50cy9hcnRpY2xlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldEFydGljbGUoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL2Jhbm5lcnMvZ2V0P2FjdGl2ZT0xJmlkX3dlYnNpdGU9NCYmcGFnZV90eXBlPSR7YWN0aW9uLm9mZnNldC5wYWdlX3R5cGV9YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFydGljbGVTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRBcnRpY2xlRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogU2xpZGVTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9BUlRJQ0xFLCBnZXRBcnRpY2xlKSxcclxuICAgIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=