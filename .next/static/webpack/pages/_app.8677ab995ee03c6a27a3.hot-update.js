webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/actions/slide.js":
/*!******************************!*\
  !*** ./src/actions/slide.js ***!
  \******************************/
/*! exports provided: getSlide, getSlideSuccess, getSlideError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlide", function() { return getSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideSuccess", function() { return getSlideSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideError", function() { return getSlideError; });
/* harmony import */ var _contants_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/slide */ "./src/contants/slide.js");

var getSlide = function getSlide(offset, page) {
  return {
    type: _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE"],
    offset: offset,
    page: page
  };
};
var getSlideSuccess = function getSlideSuccess(data, total) {
  return {
    type: _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_SUCCESS"],
    data: data,
    total: total
  };
};
var getSlideError = function getSlideError(errMess) {
  return {
    type: _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_ERROR"],
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

/***/ "./src/contants/slide.js":
/*!*******************************!*\
  !*** ./src/contants/slide.js ***!
  \*******************************/
/*! exports provided: GET_SLIDE, GET_SLIDE_SUCCESS, GET_SLIDE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SLIDE", function() { return GET_SLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SLIDE_SUCCESS", function() { return GET_SLIDE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SLIDE_ERROR", function() { return GET_SLIDE_ERROR; });
var GET_SLIDE = "CATEGORY/GET_SLIDE";
var GET_SLIDE_SUCCESS = "CATEGORY/GET_SLIDE_SUCCESS";
var GET_SLIDE_ERROR = "CATEGORY/GET_SLIDE_ERROR";

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


var _marked = /*#__PURE__*/E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





function rootSaga() {
  return E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_product__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_slide__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_category__WEBPACK_IMPORTED_MODULE_3__["default"])()]);

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

/***/ "./src/sagas/slide.js":
/*!****************************!*\
  !*** ./src/sagas/slide.js ***!
  \****************************/
/*! exports provided: getSlide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlide", function() { return getSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategorySaga; });
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/slide */ "./src/actions/slide.js");
/* harmony import */ var _contants_slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contants/slide */ "./src/contants/slide.js");


var _marked = /*#__PURE__*/E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getSlide),
    _marked2 = /*#__PURE__*/E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(CategorySaga);





function getSlide(action) {
  var url, response;
  return E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getSlide$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "categories/get?id_website=4&active=1";
          _context.prev = 1;
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"], url);

        case 4:
          response = _context.sent;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_slide__WEBPACK_IMPORTED_MODULE_3__["getSlideSuccess"])(response));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_slide__WEBPACK_IMPORTED_MODULE_3__["getSlideError"])(_context.t0.message));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}
function CategorySaga() {
  return E_Nextjs_next_cy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function CategorySaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"];
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_contants_slide__WEBPACK_IMPORTED_MODULE_4__["GET_SLIDE"], getSlide);

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
_c = CategorySaga;

var _c;

$RefreshReg$(_c, "CategorySaga");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250YW50cy9zbGlkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc2FnYXMvc2xpZGUuanMiXSwibmFtZXMiOlsiZ2V0U2xpZGUiLCJvZmZzZXQiLCJwYWdlIiwidHlwZSIsIlRZUEUiLCJnZXRTbGlkZVN1Y2Nlc3MiLCJkYXRhIiwidG90YWwiLCJnZXRTbGlkZUVycm9yIiwiZXJyTWVzcyIsIkdFVF9TTElERSIsIkdFVF9TTElERV9TVUNDRVNTIiwiR0VUX1NMSURFX0VSUk9SIiwicm9vdFNhZ2EiLCJhbGwiLCJQcm9kdWN0U2FnYSIsIlNsaWRlU2FnYSIsIkNhdGVnb3J5U2FnYSIsImFjdGlvbiIsInVybCIsImNhbGwiLCJSZXF1ZXN0IiwicmVzcG9uc2UiLCJwdXQiLCJtZXNzYWdlIiwidGFrZUxhdGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE1BQUQsRUFBU0MsSUFBVDtBQUFBLFNBQW1CO0FBQ3ZDQyxRQUFJLEVBQUVDLHlEQURpQztBQUV2Q0gsVUFBTSxFQUFOQSxNQUZ1QztBQUd2Q0MsUUFBSSxFQUFKQTtBQUh1QyxHQUFuQjtBQUFBLENBQWpCO0FBS0EsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxTQUFrQjtBQUM3Q0osUUFBSSxFQUFFQyxpRUFEdUM7QUFFN0NFLFFBQUksRUFBRUEsSUFGdUM7QUFHN0NDLFNBQUssRUFBRUE7QUFIc0MsR0FBbEI7QUFBQSxDQUF4QjtBQUtBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRDtBQUFBLFNBQWM7QUFDdkNOLFFBQUksRUFBRUMsK0RBRGlDO0FBRXZDSyxXQUFPLEVBQVBBO0FBRnVDLEdBQWQ7QUFBQSxDQUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlA7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQyxTQUFTLEdBQUcsb0JBQWxCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsNEJBQTFCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLDBCQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrSENHa0JDLFE7O0FBTHpCO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBVUEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTUMsOERBQUcsQ0FBQyxDQUNSQyx3REFBVyxFQURILEVBRVJDLHNEQUFTLEVBRkQsRUFHUkMseURBQVksRUFISixDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytIQ01FakIsUTtnSUFVUWlCLFk7O0FBckJ6QjtBQUVBO0FBRUE7QUFLQTtBQUVPLFNBQVVqQixRQUFWLENBQW1Ca0IsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dDLGFBREg7QUFBQTtBQUFBO0FBR2tCLGlCQUFNQywrREFBSSxDQUFDQyxzREFBRCxFQUFVRixHQUFWLENBQVY7O0FBSGxCO0FBR09HLGtCQUhQO0FBQUE7QUFJQyxpQkFBTUMsOERBQUcsQ0FBQ2xCLHNFQUFlLENBQUNpQixRQUFELENBQWhCLENBQVQ7O0FBSkQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUMsaUJBQU1DLDhEQUFHLENBQUNmLG9FQUFhLENBQUMsWUFBTWdCLE9BQVAsQ0FBZCxDQUFUOztBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVVEsU0FBVVAsWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ0xILHNEQURLO0FBQUE7QUFFUCxpQkFBTVcscUVBQVUsQ0FBQ2YseURBQUQsRUFBWVYsUUFBWixDQUFoQjs7QUFGTztBQUFBO0FBQUE7QUFBQTtBQUNYOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0tBQVVpQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODY3N2FiOTk1ZWUwM2M2YTI3YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3NsaWRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2xpZGUgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfU0xJREUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNsaWRlU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX1NMSURFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNsaWRlRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX1NMSURFX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBHRVRfU0xJREUgPSBcIkNBVEVHT1JZL0dFVF9TTElERVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NMSURFX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL0dFVF9TTElERV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0xJREVfRVJST1IgPSBcIkNBVEVHT1JZL0dFVF9TTElERV9FUlJPUlwiOyIsImltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IFByb2R1Y3RTYWdhIGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuaW1wb3J0IENhdGVnb3J5U2FnYSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgU2xpZGVTYWdhIGZyb20gXCIuL3NsaWRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIFByb2R1Y3RTYWdhKCksXHJcbiAgICBTbGlkZVNhZ2EoKSxcclxuICAgIENhdGVnb3J5U2FnYSgpXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdldFNsaWRlU3VjY2VzcyxcclxuICAgIGdldFNsaWRlRXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvc2xpZGVcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9TTElERX0gZnJvbSBcIi4uL2NvbnRhbnRzL3NsaWRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldFNsaWRlKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGNhdGVnb3JpZXMvZ2V0P2lkX3dlYnNpdGU9NCZhY3RpdmU9MWA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRTbGlkZVN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFNsaWRlRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogQ2F0ZWdvcnlTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9TTElERSwgZ2V0U2xpZGUpLFxyXG4gICAgXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==