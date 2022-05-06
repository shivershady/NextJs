webpackHotUpdate_N_E("pages/category",{

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
/* harmony import */ var _helper_addToCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/addToCart */ "./src/helper/addToCart.js");


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
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-pink-200 m-3 p-4 rounded-lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-white text-xl font-bold ",
        children: product === null || product === void 0 ? void 0 : product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-50 text-xs",
        children: product === null || product === void 0 ? void 0 : product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-between ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-white",
          children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(product === null || product === void 0 ? void 0 : product.price)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick(event) {
            event.stopPropagation();
            Object(_helper_addToCart__WEBPACK_IMPORTED_MODULE_4__["addToCart"])(product, 1);
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
              lineNumber: 38,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0uanMiXSwibmFtZXMiOlsiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwibmV4dERldGFpbCIsInB1c2giLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJhbGlhcyIsInByb2Nlc3MiLCJ0aHVtYiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImFkZFRvQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxPQUFnQztBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUU1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNILE9BQUQsRUFBYTtBQUN4QkMsVUFBTSxDQUFDRyxJQUFQLENBQVk7QUFDUkMsY0FBUSxxQkFBY0wsT0FBTyxDQUFDTSxFQUF0QixDQURBO0FBRVJDLFdBQUssRUFBRTtBQUNIQyxhQUFLLEVBQUdSLE9BQU8sQ0FBQ1E7QUFEYjtBQUZDLEtBQVo7QUFNUCxHQVBEOztBQVNBLHNCQUNJO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBSUwsVUFBVSxDQUFDSCxPQUFELENBQWQ7QUFBQSxLQUFkO0FBQXVDLGFBQVMsRUFBQyxtREFBakQ7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRVMsd0JBQUEsR0FBb0IsV0FBcEIsSUFBZ0NULE9BQWhDLGFBQWdDQSxPQUFoQyx1QkFBZ0NBLE9BQU8sQ0FBRVUsS0FBVCxDQUFlLENBQWYsQ0FBaEMsQ0FBVjtBQUE2RCxTQUFHLEVBQUMsUUFBakU7QUFBMEUsZUFBUyxFQUFDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFDLGdDQUFmO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFDLCtCQUFiO0FBQUEsa0JBQ0tWLE9BREwsYUFDS0EsT0FETCx1QkFDS0EsT0FBTyxDQUFFVztBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFBLGtCQUNLWCxPQURMLGFBQ0tBLE9BREwsdUJBQ0tBLE9BQU8sQ0FBRVk7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFPSTtBQUFLLGlCQUFTLEVBQUMsb0NBQWY7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBLG9CQUNLQywrREFBVyxDQUFDYixPQUFELGFBQUNBLE9BQUQsdUJBQUNBLE9BQU8sQ0FBRWMsS0FBVjtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBUSxpQkFBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVM7QUFDdEJBLGlCQUFLLENBQUNDLGVBQU47QUFDQUMsK0VBQVMsQ0FBQ2pCLE9BQUQsRUFBUyxDQUFULENBQVQ7QUFDSCxXQUhEO0FBR0csY0FBSSxFQUFDLFFBSFI7QUFHaUIsbUJBQVMsRUFBQyx1RkFIM0I7QUFBQSxpQ0FJSTtBQUFLLGlCQUFLLEVBQUMsNEJBQVg7QUFBd0MsaUJBQUssRUFBRSxFQUEvQztBQUFtRCxrQkFBTSxFQUFFLEVBQTNEO0FBQStELHFCQUFTLEVBQUMsU0FBekU7QUFBbUYsZ0JBQUksRUFBQyxPQUF4RjtBQUFnRyxtQkFBTyxFQUFDLGVBQXhHO0FBQUEsbUNBQ0k7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkg7O0dBeENRRCxXO1VBRVVHLHFEOzs7S0FGVkgsVztBQTBDTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkuMTI3NDM5NWVmMmExN2M0MjYzOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBmb3JtYXRNb25leX0gZnJvbSBcIi4uL2xpYi9oZWxwZXJcIjtcclxuaW1wb3J0IHthZGRUb0NhcnR9IGZyb20gXCIuLi9oZWxwZXIvYWRkVG9DYXJ0XCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0SXRlbSh7cHJvZHVjdH0pIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBuZXh0RGV0YWlsID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YCxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgOiBwcm9kdWN0LmFsaWFzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCk9Pm5leHREZXRhaWwocHJvZHVjdCl9IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCAgYmctd2hpdGUgdy1mdWxsIG0tYXV0byBwLTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LkFQSV9VUkwrXCIvc3RvcmFnZS9cIitwcm9kdWN0Py50aHVtYlswXX0gYWx0PVwiYWRpZGFzXCIgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBoLTgwIG0tYXV0b1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcGluay0yMDAgbS0zIHAtNCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1ib2xkIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdD8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdWN0Py5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0KHByb2R1Y3QsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInctMTAgaC0xMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgYmctcGluay01MDAgaG92ZXI6YmctcGluay03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBjbGFzc05hbWU9XCJteC1hdXRvXCIgZmlsbD1cIndoaXRlXCIgdmlld0JveD1cIjAgMCAxNzkyIDE3OTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYwMCA3MzZ2MTkycTAgNDAtMjggNjh0LTY4IDI4aC00MTZ2NDE2cTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di00MTZoLTQxNnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDQxNnYtNDE2cTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh2NDE2aDQxNnE0MCAwIDY4IDI4dDI4IDY4elwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=