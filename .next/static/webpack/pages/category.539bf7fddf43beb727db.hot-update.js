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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
        console.log('sadasdsadadsdasdasd');
        setStatus(!status);
      },
      className: "jsx-3271222562" + " " + "tick-box ".concat(status ? "active}" : null)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), " ", item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3271222562",
      children: ".tick-box.jsx-3271222562{height:20px;width:20px;border:1px solid #ebebeb;}.tick-box.active.jsx-3271222562{background:#0070f3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxOZXh0anNcXG5leHQtY3lcXHNyY1xcY29tcG9uZW50c1xcQ2hlY2tib3hJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCd0IsQUFHaUMsQUFLSyxZQUpOLE9BS2YsSUFKNkIseUJBQzdCIiwiZmlsZSI6IkU6XFxOZXh0anNcXG5leHQtY3lcXHNyY1xcY29tcG9uZW50c1xcQ2hlY2tib3hJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoZWNrYm94SXRlbSA9ICh7aXRlbSwgY3VycmVudCwgaGFuZGxlRnVuY30pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdHVzID09PSB0cnVlKXtcclxuICAgICAgICAgICAgbGV0IGNoZWNrID0gY3VycmVudC5pbmNsdWRlcyhpdGVtLmlkKTtcclxuICAgICAgICAgICAgY2hlY2sgPyBoYW5kbGVGdW5jKGN1cnJlbnQuZmlsdGVyKGxhYiA9PiBsYWIgIT09IGl0ZW0uaWQpKSA6IGhhbmRsZUZ1bmMoWy4uLmN1cnJlbnQsIGl0ZW0uaWRdKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc3RhdHVzXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGljay1ib3ggJHtzdGF0dXMgPyBgYWN0aXZlfWAgOiBudWxsfWB9IG9uQ2xpY2s9eygpID0+IHtjb25zb2xlLmxvZygnc2FkYXNkc2FkYWRzZGFzZGFzZCcpO3NldFN0YXR1cyghc3RhdHVzKX19Lz4ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnRpY2stYm94e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpY2stYm94LmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNzBmMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveEl0ZW07Il19 */\n/*@ sourceURL=E:\\\\Nextjs\\\\next-cy\\\\src\\\\components\\\\CheckboxItem.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tib3hJdGVtLmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94SXRlbSIsIml0ZW0iLCJjdXJyZW50IiwiaGFuZGxlRnVuYyIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlRWZmZWN0IiwiY2hlY2siLCJpbmNsdWRlcyIsImlkIiwiZmlsdGVyIiwibGFiIiwiY29uc29sZSIsImxvZyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBaUM7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsTUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQUEsa0JBRXRCQyxzREFBUSxDQUFDLEtBQUQsQ0FGYztBQUFBLE1BRTNDQyxNQUYyQztBQUFBLE1BRW5DQyxTQUZtQzs7QUFJbERDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdGLE1BQU0sS0FBSyxJQUFkLEVBQW1CO0FBQ2YsVUFBSUcsS0FBSyxHQUFHTixPQUFPLENBQUNPLFFBQVIsQ0FBaUJSLElBQUksQ0FBQ1MsRUFBdEIsQ0FBWjtBQUNBRixXQUFLLEdBQUdMLFVBQVUsQ0FBQ0QsT0FBTyxDQUFDUyxNQUFSLENBQWUsVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsS0FBS1gsSUFBSSxDQUFDUyxFQUFqQjtBQUFBLE9BQWxCLENBQUQsQ0FBYixHQUF3RFAsVUFBVSxxSUFBS0QsT0FBTCxJQUFjRCxJQUFJLENBQUNTLEVBQW5CLEdBQXZFO0FBQ0g7QUFDSixHQUxRLEVBS04sQ0FBQ0wsTUFBRCxDQUxNLENBQVQ7QUFRQSxzQkFFSTtBQUFBO0FBQUEsNEJBQ0k7QUFBeUQsYUFBTyxFQUFFLG1CQUFNO0FBQUNRLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQW1DUixpQkFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUFtQixPQUEvSDtBQUFBLDZEQUE0QkEsTUFBTSxlQUFlLElBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLE9BQ3dJSixJQUFJLENBQUNjLElBRDdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBZ0JILENBNUJEOztHQUFNZixZOztLQUFBQSxZO0FBOEJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS41MzliZjdmZGRmNDNiZWI3MjdkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoZWNrYm94SXRlbSA9ICh7aXRlbSwgY3VycmVudCwgaGFuZGxlRnVuY30pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdHVzID09PSB0cnVlKXtcclxuICAgICAgICAgICAgbGV0IGNoZWNrID0gY3VycmVudC5pbmNsdWRlcyhpdGVtLmlkKTtcclxuICAgICAgICAgICAgY2hlY2sgPyBoYW5kbGVGdW5jKGN1cnJlbnQuZmlsdGVyKGxhYiA9PiBsYWIgIT09IGl0ZW0uaWQpKSA6IGhhbmRsZUZ1bmMoWy4uLmN1cnJlbnQsIGl0ZW0uaWRdKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc3RhdHVzXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGljay1ib3ggJHtzdGF0dXMgPyBgYWN0aXZlfWAgOiBudWxsfWB9IG9uQ2xpY2s9eygpID0+IHtjb25zb2xlLmxvZygnc2FkYXNkc2FkYWRzZGFzZGFzZCcpO3NldFN0YXR1cyghc3RhdHVzKX19Lz4ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnRpY2stYm94e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpY2stYm94LmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNzBmMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveEl0ZW07Il0sInNvdXJjZVJvb3QiOiIifQ==