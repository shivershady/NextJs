webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./src/components/ProductItem.js":
/*!***************************************!*\
  !*** ./src/components/ProductItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/helper */ "./src/lib/helper.js");


var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\components\\ProductItem.js",
    _s = $RefreshSig$();





function ProductItem(_ref) {
  _s();

  var product = _ref.product;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var nextDetail = function nextDetail(product) {
    router.push({
      pathname: "/product/".concat(product.id),
      query: {
        alias: product.alias
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: function onClick() {
      return nextDetail(product);
    },
    className: "shadow-lg rounded-2xl  bg-white w-full m-auto p-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
      alt: "adidas",
      className: "w-full p-4 h-80 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-pink-200 m-3 p-4 rounded-lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-white text-xl font-bold ",
        children: product === null || product === void 0 ? void 0 : product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-50 text-xs",
        children: product === null || product === void 0 ? void 0 : product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-between ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-white",
          children: [Object(_lib_helper__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(product === null || product === void 0 ? void 0 : product.price), " vn\u0111"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick(event) {
            event.stopPropagation();
            alert("child");
          },
          type: "button",
          className: "w-10 h-10 text-base font-medium rounded-full text-white bg-pink-500 hover:bg-pink-700",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            className: "mx-auto",
            fill: "white",
            viewBox: "0 0 1792 1792",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s(ProductItem, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = ProductItem;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

var _c;

$RefreshReg$(_c, "ProductItem");

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

/***/ "./src/lib/helper.js":
/*!***************************!*\
  !*** ./src/lib/helper.js ***!
  \***************************/
/*! exports provided: calcDate, formatDate, formatMoney, keywords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDate", function() { return calcDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keywords", function() { return keywords; });
var calcDate = function calcDate(startTime, endTime) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var checkStart = Math.abs(new Date() - new Date(startTime));

  if (checkStart < 0) {
    var dd = String(new Date(startTime).getDate()).padStart(2, "0");
    var mm = monthNames[String(new Date(startTime).getMonth())];
    var yyyy = new Date(startTime).getFullYear();
    var hour = new Date(startTime).getHours();
    var minus = new Date(startTime).getMinutes();
    return "Early start <br/> at ".concat(hour, ":").concat(minus, " </br/> on ").concat(dd, ", ").concat(mm, " ").concat(yyyy);
  }

  var checkEnd = Math.abs(new Date() - new Date(endTime));

  if (checkEnd > 0) {
    var _dd = String(new Date(endTime).getDate()).padStart(2, "0");

    var _mm = monthNames[String(new Date(endTime).getMonth())];

    var _yyyy = new Date(endTime).getFullYear();

    var _hour = new Date(endTime).getHours();

    var _minus = new Date(endTime).getMinutes();

    return "Ended <br/> at ".concat(_hour, ":").concat(_minus, " </br/> on ").concat(_dd, ", ").concat(_mm, " ").concat(_yyyy);
  }
};
var formatDate = function formatDate(time) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var dd = String(new Date(time).getDate()).padStart(2, "0");
  var mm = monthNames[String(new Date(time).getMonth())];
  var yyyy = new Date(time).getFullYear();
  return "".concat(dd, ", ").concat(mm, " ").concat(yyyy);
};
var formatMoney = function formatMoney(money) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0
  }).format(parseFloat(money));
};
var keywords = function keywords(str) {
  return str.split(" ");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvaGVscGVyLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtIiwicHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsIm5leHREZXRhaWwiLCJwdXNoIiwicGF0aG5hbWUiLCJpZCIsInF1ZXJ5IiwiYWxpYXMiLCJwcm9jZXNzIiwidGh1bWIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmb3JtYXRNb25leSIsInByaWNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJhbGVydCIsImNhbGNEYXRlIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsIm1vbnRoTmFtZXMiLCJjaGVja1N0YXJ0IiwiTWF0aCIsImFicyIsIkRhdGUiLCJkZCIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51cyIsImdldE1pbnV0ZXMiLCJjaGVja0VuZCIsImZvcm1hdERhdGUiLCJ0aW1lIiwibW9uZXkiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImN1cnJlbmN5RGlzcGxheSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdCIsInBhcnNlRmxvYXQiLCJrZXl3b3JkcyIsInN0ciIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBRTVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0gsT0FBRCxFQUFhO0FBQ3hCQyxVQUFNLENBQUNHLElBQVAsQ0FBWTtBQUNSQyxjQUFR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QUFKYSxHQUEvQixFQUtKQyxNQUxJLENBS0dDLFVBQVUsQ0FBQ1IsS0FBRCxDQUxiLENBQVA7QUFNRCxDQVBNO0FBU0EsSUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFTO0FBQy9CLFNBQU9BLEdBQUcsQ0FBQ0MsS0FBSixDQUFVLEdBQVYsQ0FBUDtBQUNELENBRk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjNmNzMxYTk1MWI2NGQzMzNmZWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXl9IGZyb20gXCIuLi9saWIvaGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0SXRlbSh7cHJvZHVjdH0pIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBuZXh0RGV0YWlsID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YCxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgOiBwcm9kdWN0LmFsaWFzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCk9Pm5leHREZXRhaWwocHJvZHVjdCl9IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCAgYmctd2hpdGUgdy1mdWxsIG0tYXV0byBwLTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LkFQSV9VUkwrXCIvc3RvcmFnZS9cIitwcm9kdWN0Py50aHVtYlswXX0gYWx0PVwiYWRpZGFzXCIgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBoLTgwIG0tYXV0b1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcGluay0yMDAgbS0zIHAtNCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1ib2xkIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdD8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdWN0Py5wcmljZSl9IHZuxJFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQpPT57ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7YWxlcnQoXCJjaGlsZFwiKX19IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIGJnLXBpbmstNTAwIGhvdmVyOmJnLXBpbmstNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gY2xhc3NOYW1lPVwibXgtYXV0b1wiIGZpbGw9XCJ3aGl0ZVwiIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2MDAgNzM2djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtNDE2aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGg0MTZ2LTQxNnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4djQxNmg0MTZxNDAgMCA2OCAyOHQyOCA2OHpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTsiLCJleHBvcnQgY29uc3QgY2FsY0RhdGUgPSAoc3RhcnRUaW1lLCBlbmRUaW1lKSA9PiB7XHJcbiAgY29uc3QgbW9udGhOYW1lcyA9IFtcclxuICAgIFwiSmFuXCIsXHJcbiAgICBcIkZlYlwiLFxyXG4gICAgXCJNYXJcIixcclxuICAgIFwiQXByXCIsXHJcbiAgICBcIk1heVwiLFxyXG4gICAgXCJKdW5cIixcclxuICAgIFwiSnVsXCIsXHJcbiAgICBcIkF1Z1wiLFxyXG4gICAgXCJTZXBcIixcclxuICAgIFwiT2N0XCIsXHJcbiAgICBcIk5vdlwiLFxyXG4gICAgXCJEZWNcIixcclxuICBdO1xyXG4gIHZhciBjaGVja1N0YXJ0ID0gTWF0aC5hYnMobmV3IERhdGUoKSAtIG5ldyBEYXRlKHN0YXJ0VGltZSkpO1xyXG4gIGlmIChjaGVja1N0YXJ0IDwgMCkge1xyXG4gICAgY29uc3QgZGQgPSBTdHJpbmcobmV3IERhdGUoc3RhcnRUaW1lKS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgIGNvbnN0IG1tID0gbW9udGhOYW1lc1tTdHJpbmcobmV3IERhdGUoc3RhcnRUaW1lKS5nZXRNb250aCgpKV07XHJcbiAgICBjb25zdCB5eXl5ID0gbmV3IERhdGUoc3RhcnRUaW1lKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKHN0YXJ0VGltZSkuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IG1pbnVzID0gbmV3IERhdGUoc3RhcnRUaW1lKS5nZXRNaW51dGVzKCk7XHJcbiAgICByZXR1cm4gYEVhcmx5IHN0YXJ0IDxici8+IGF0ICR7aG91cn06JHttaW51c30gPC9ici8+IG9uICR7ZGR9LCAke21tfSAke3l5eXl9YDtcclxuICB9XHJcblxyXG4gIHZhciBjaGVja0VuZCA9IE1hdGguYWJzKG5ldyBEYXRlKCkgLSBuZXcgRGF0ZShlbmRUaW1lKSk7XHJcbiAgaWYgKGNoZWNrRW5kID4gMCkge1xyXG4gICAgY29uc3QgZGQgPSBTdHJpbmcobmV3IERhdGUoZW5kVGltZSkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICBjb25zdCBtbSA9IG1vbnRoTmFtZXNbU3RyaW5nKG5ldyBEYXRlKGVuZFRpbWUpLmdldE1vbnRoKCkpXTtcclxuICAgIGNvbnN0IHl5eXkgPSBuZXcgRGF0ZShlbmRUaW1lKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKGVuZFRpbWUpLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBtaW51cyA9IG5ldyBEYXRlKGVuZFRpbWUpLmdldE1pbnV0ZXMoKTtcclxuICAgIHJldHVybiBgRW5kZWQgPGJyLz4gYXQgJHtob3VyfToke21pbnVzfSA8L2JyLz4gb24gJHtkZH0sICR7bW19ICR7eXl5eX1gO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKHRpbWUpID0+IHtcclxuICBjb25zdCBtb250aE5hbWVzID0gW1xyXG4gICAgXCJKYW5cIixcclxuICAgIFwiRmViXCIsXHJcbiAgICBcIk1hclwiLFxyXG4gICAgXCJBcHJcIixcclxuICAgIFwiTWF5XCIsXHJcbiAgICBcIkp1blwiLFxyXG4gICAgXCJKdWxcIixcclxuICAgIFwiQXVnXCIsXHJcbiAgICBcIlNlcFwiLFxyXG4gICAgXCJPY3RcIixcclxuICAgIFwiTm92XCIsXHJcbiAgICBcIkRlY1wiLFxyXG4gIF07XHJcbiAgY29uc3QgZGQgPSBTdHJpbmcobmV3IERhdGUodGltZSkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgY29uc3QgbW0gPSBtb250aE5hbWVzW1N0cmluZyhuZXcgRGF0ZSh0aW1lKS5nZXRNb250aCgpKV07XHJcbiAgY29uc3QgeXl5eSA9IG5ldyBEYXRlKHRpbWUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgcmV0dXJuIGAke2RkfSwgJHttbX0gJHt5eXl5fWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0TW9uZXkgPSAobW9uZXkpID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwidmktVk5cIiwge1xyXG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgIGN1cnJlbmN5OiBcIlZORFwiLFxyXG4gICAgY3VycmVuY3lEaXNwbGF5OiBcInN5bWJvbFwiLFxyXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxyXG4gIH0pLmZvcm1hdChwYXJzZUZsb2F0KG1vbmV5KSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qga2V5d29yZHMgPSAoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIHN0ci5zcGxpdChcIiBcIik7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=