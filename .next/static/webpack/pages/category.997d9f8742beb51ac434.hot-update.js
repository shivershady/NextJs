webpackHotUpdate_N_E("pages/category",{

/***/ "./src/components/CheckboxItem.js":
/*!****************************************!*\
  !*** ./src/components/CheckboxItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\components\\CheckboxItem.js",
    _this = undefined,
    _s = $RefreshSig$();




var CheckboxItem = function CheckboxItem(_ref) {
  _s();

  var item = _ref.item,
      current = _ref.current,
      handleFunc = _ref.handleFunc;
  console.log(current);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      status = _useState[0],
      setStatus = _useState[1];

  var tickHandle = function tickHandle(stt) {
    var check = current.includes(item.id);

    if (check) {
      var tmp = current.filter(function (lab) {
        return lab !== item.id;
      });
      handleFunc(tmp);
    } else {
      handleFunc([].concat(Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(current), [item.id]));
    }

    setStatus(stt);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3271222562" + " " + "flex gap-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return tickHandle(!status);
      },
      className: "jsx-3271222562" + " " + "tick-box ".concat(status ? 'active' : null)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), " ", item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3271222562",
      children: ".tick-box.jsx-3271222562{height:20px;width:20px;border:1px solid #ebebeb;}.tick-box.active.jsx-3271222562{background:#0070f3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxOZXh0anNcXG5leHQtY3lcXHNyY1xcY29tcG9uZW50c1xcQ2hlY2tib3hJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCd0IsQUFHaUMsQUFLSyxZQUpOLE9BS2YsSUFKNkIseUJBQzdCIiwiZmlsZSI6IkU6XFxOZXh0anNcXG5leHQtY3lcXHNyY1xcY29tcG9uZW50c1xcQ2hlY2tib3hJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaGVja2JveEl0ZW0gPSAoe2l0ZW0sIGN1cnJlbnQsIGhhbmRsZUZ1bmN9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50KTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdGlja0hhbmRsZSA9IChzdHQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNoZWNrID0gY3VycmVudC5pbmNsdWRlcyhpdGVtLmlkKTtcclxuICAgICAgICAgICAgaWYoY2hlY2spe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IGN1cnJlbnQuZmlsdGVyKGxhYiA9PiBsYWIgIT09IGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRnVuYyh0bXApXHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUZ1bmMoWy4uLmN1cnJlbnQsIGl0ZW0uaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTdGF0dXMoc3R0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0aWNrLWJveCAke3N0YXR1cyA/ICdhY3RpdmUnIDogbnVsbH1gfSBvbkNsaWNrPXsoKSA9PiB0aWNrSGFuZGxlKCFzdGF0dXMpfS8+IHtpdGVtLm5hbWV9XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAudGljay1ib3h7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGljay1ib3guYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA3MGYzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94SXRlbTsiXX0= */\n/*@ sourceURL=E:\\\\Nextjs\\\\next-cy\\\\src\\\\components\\\\CheckboxItem.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s(CheckboxItem, "2WbRiTAV0HpyuJgyVzzDJBs2628=");

_c = CheckboxItem;
/* harmony default export */ __webpack_exports__["default"] = (CheckboxItem);

var _c;

$RefreshReg$(_c, "CheckboxItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tib3hJdGVtLmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94SXRlbSIsIml0ZW0iLCJjdXJyZW50IiwiaGFuZGxlRnVuYyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInRpY2tIYW5kbGUiLCJzdHQiLCJjaGVjayIsImluY2x1ZGVzIiwiaWQiLCJ0bXAiLCJmaWx0ZXIiLCJsYWIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWlDO0FBQUE7O0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBQ2xEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjs7QUFEa0Qsa0JBRXRCSSxzREFBUSxDQUFDLEtBQUQsQ0FGYztBQUFBLE1BRTNDQyxNQUYyQztBQUFBLE1BRW5DQyxTQUZtQzs7QUFJbEQsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3BCLFFBQUlDLEtBQUssR0FBR1QsT0FBTyxDQUFDVSxRQUFSLENBQWlCWCxJQUFJLENBQUNZLEVBQXRCLENBQVo7O0FBQ0EsUUFBR0YsS0FBSCxFQUFTO0FBQ0wsVUFBSUcsR0FBRyxHQUFHWixPQUFPLENBQUNhLE1BQVIsQ0FBZSxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxLQUFLZixJQUFJLENBQUNZLEVBQWpCO0FBQUEsT0FBbEIsQ0FBVjtBQUNBVixnQkFBVSxDQUFDVyxHQUFELENBQVY7QUFDSCxLQUhELE1BR007QUFDRlgsZ0JBQVUscUlBQUtELE9BQUwsSUFBY0QsSUFBSSxDQUFDWSxFQUFuQixHQUFWO0FBQ0g7O0FBQ0RMLGFBQVMsQ0FBQ0UsR0FBRCxDQUFUO0FBQ1AsR0FURDs7QUFXQSxzQkFFSTtBQUFBLHdDQUFlLFlBQWY7QUFBQSw0QkFDSTtBQUF3RCxhQUFPLEVBQUU7QUFBQSxlQUFNRCxVQUFVLENBQUMsQ0FBQ0YsTUFBRixDQUFoQjtBQUFBLE9BQWpFO0FBQUEsNkRBQTRCQSxNQUFNLEdBQUcsUUFBSCxHQUFjLElBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLE9BQ21HTixJQUFJLENBQUNnQixJQUR4RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQWlCSCxDQWhDRDs7R0FBTWpCLFk7O0tBQUFBLFk7QUFrQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5Ljk5N2Q5Zjg3NDJiZWI1MWFjNDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoZWNrYm94SXRlbSA9ICh7aXRlbSwgY3VycmVudCwgaGFuZGxlRnVuY30pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0aWNrSGFuZGxlID0gKHN0dCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2hlY2sgPSBjdXJyZW50LmluY2x1ZGVzKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICBpZihjaGVjayl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG1wID0gY3VycmVudC5maWx0ZXIobGFiID0+IGxhYiAhPT0gaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVGdW5jKHRtcClcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRnVuYyhbLi4uY3VycmVudCwgaXRlbS5pZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFN0YXR1cyhzdHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRpY2stYm94ICR7c3RhdHVzID8gJ2FjdGl2ZScgOiBudWxsfWB9IG9uQ2xpY2s9eygpID0+IHRpY2tIYW5kbGUoIXN0YXR1cyl9Lz4ge2l0ZW0ubmFtZX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC50aWNrLWJveHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aWNrLWJveC5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDcwZjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hJdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=