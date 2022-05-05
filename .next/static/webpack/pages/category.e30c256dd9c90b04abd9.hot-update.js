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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      status = _useState[0],
      setStatus = _useState[1];

  useEffect(function () {
    if (status === true) {
      var check = current.includes(item.id);
      check ? handleFunc(current.filter(function (lab) {
        return lab !== item.id;
      })) : handleFunc([].concat(Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(current), [item.id]));
    }
  }, [status]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3271222562",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return setStatus(!status);
      },
      className: "jsx-3271222562" + " " + "tick-box ".concat(status ? "active}" : null)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), " ", item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3271222562",
      children: ".tick-box.jsx-3271222562{height:20px;width:20px;border:1px solid #ebebeb;}.tick-box.active.jsx-3271222562{background:#0070f3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxOZXh0anNcXG5leHQtY3lcXHNyY1xcY29tcG9uZW50c1xcQ2hlY2tib3hJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCd0IsQUFHaUMsQUFLSyxZQUpOLE9BS2YsSUFKNkIseUJBQzdCIiwiZmlsZSI6IkU6XFxOZXh0anNcXG5leHQtY3lcXHNyY1xcY29tcG9uZW50c1xcQ2hlY2tib3hJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaGVja2JveEl0ZW0gPSAoe2l0ZW0sIGN1cnJlbnQsIGhhbmRsZUZ1bmN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHN0YXR1cyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IGN1cnJlbnQuaW5jbHVkZXMoaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGNoZWNrID8gaGFuZGxlRnVuYyhjdXJyZW50LmZpbHRlcihsYWIgPT4gbGFiICE9PSBpdGVtLmlkKSkgOiBoYW5kbGVGdW5jKFsuLi5jdXJyZW50LCBpdGVtLmlkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3N0YXR1c10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRpY2stYm94ICR7c3RhdHVzID8gYGFjdGl2ZX1gIDogbnVsbH1gfSBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXMoIXN0YXR1cyl9Lz4ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnRpY2stYm94e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpY2stYm94LmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNzBmMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveEl0ZW07Il19 */\n/*@ sourceURL=E:\\\\Nextjs\\\\next-cy\\\\src\\\\components\\\\CheckboxItem.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, _this);
};

_s(CheckboxItem, "iW7PMEIJc8b9DQPigLoTVxHyUqc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tib3hJdGVtLmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94SXRlbSIsIml0ZW0iLCJjdXJyZW50IiwiaGFuZGxlRnVuYyIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlRWZmZWN0IiwiY2hlY2siLCJpbmNsdWRlcyIsImlkIiwiZmlsdGVyIiwibGFiIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQztBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFBQSxrQkFFdEJDLHNEQUFRLENBQUMsS0FBRCxDQUZjO0FBQUEsTUFFM0NDLE1BRjJDO0FBQUEsTUFFbkNDLFNBRm1DOztBQUlsREMsV0FBUyxDQUFDLFlBQU07QUFDWixRQUFHRixNQUFNLEtBQUssSUFBZCxFQUFtQjtBQUNmLFVBQUlHLEtBQUssR0FBR04sT0FBTyxDQUFDTyxRQUFSLENBQWlCUixJQUFJLENBQUNTLEVBQXRCLENBQVo7QUFDQUYsV0FBSyxHQUFHTCxVQUFVLENBQUNELE9BQU8sQ0FBQ1MsTUFBUixDQUFlLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLEtBQUtYLElBQUksQ0FBQ1MsRUFBakI7QUFBQSxPQUFsQixDQUFELENBQWIsR0FBd0RQLFVBQVUscUlBQUtELE9BQUwsSUFBY0QsSUFBSSxDQUFDUyxFQUFuQixHQUF2RTtBQUNIO0FBQ0osR0FMUSxFQUtOLENBQUNMLE1BQUQsQ0FMTSxDQUFUO0FBUUEsc0JBRUk7QUFBQTtBQUFBLDRCQUNJO0FBQXlELGFBQU8sRUFBRTtBQUFBLGVBQU1DLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxPQUFsRTtBQUFBLDZEQUE0QkEsTUFBTSxlQUFlLElBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLE9BQ21HSixJQUFJLENBQUNZLElBRHhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBZ0JILENBNUJEOztHQUFNYixZOztLQUFBQSxZO0FBOEJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS5lMzBjMjU2ZGQ5YzkwYjA0YWJkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaGVja2JveEl0ZW0gPSAoe2l0ZW0sIGN1cnJlbnQsIGhhbmRsZUZ1bmN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHN0YXR1cyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IGN1cnJlbnQuaW5jbHVkZXMoaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGNoZWNrID8gaGFuZGxlRnVuYyhjdXJyZW50LmZpbHRlcihsYWIgPT4gbGFiICE9PSBpdGVtLmlkKSkgOiBoYW5kbGVGdW5jKFsuLi5jdXJyZW50LCBpdGVtLmlkXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3N0YXR1c10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRpY2stYm94ICR7c3RhdHVzID8gYGFjdGl2ZX1gIDogbnVsbH1gfSBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXMoIXN0YXR1cyl9Lz4ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnRpY2stYm94e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpY2stYm94LmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNzBmMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveEl0ZW07Il0sInNvdXJjZVJvb3QiOiIifQ==