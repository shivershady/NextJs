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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0uanMiXSwibmFtZXMiOlsiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwibmV4dERldGFpbCIsInB1c2giLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJhbGlhcyIsInByb2Nlc3MiLCJ0aHVtYiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImFkZFRvQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxPQUFnQztBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUU1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNILE9BQUQsRUFBYTtBQUN4QkMsVUFBTSxDQUFDRyxJQUFQLENBQVk7QUFDUkMsY0FBUSxxQkFBY0wsT0FBTyxDQUFDTSxFQUF0QixDQURBO0FBRVJDLFdBQUssRUFBRTtBQUNIQyxhQUFLLEVBQUdSLE9BQU8sQ0FBQ1E7QUFEYjtBQUZDLEtBQVo7QUFNUCxHQVBEOztBQVNBLHNCQUNJO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBSUwsVUFBVSxDQUFDSCxPQUFELENBQWQ7QUFBQSxLQUFkO0FBQXVDLGFBQVMsRUFBQyxtREFBakQ7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRVMsd0JBQUEsR0FBb0IsV0FBcEIsSUFBZ0NULE9BQWhDLGFBQWdDQSxPQUFoQyx1QkFBZ0NBLE9BQU8sQ0FBRVUsS0FBVCxDQUFlLENBQWYsQ0FBaEMsQ0FBVjtBQUE2RCxTQUFHLEVBQUMsUUFBakU7QUFBMEUsZUFBUyxFQUFDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFDLGdDQUFmO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFDLCtCQUFiO0FBQUEsa0JBQ0tWLE9BREwsYUFDS0EsT0FETCx1QkFDS0EsT0FBTyxDQUFFVztBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFBLGtCQUNLWCxPQURMLGFBQ0tBLE9BREwsdUJBQ0tBLE9BQU8sQ0FBRVk7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFPSTtBQUFLLGlCQUFTLEVBQUMsb0NBQWY7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBLG9CQUNLQywrREFBVyxDQUFDYixPQUFELGFBQUNBLE9BQUQsdUJBQUNBLE9BQU8sQ0FBRWMsS0FBVjtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBUSxpQkFBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVM7QUFDdEJBLGlCQUFLLENBQUNDLGVBQU47QUFDQUMsK0VBQVMsQ0FBQ2pCLE9BQUQsRUFBUyxDQUFULENBQVQ7QUFDSCxXQUhEO0FBR0csY0FBSSxFQUFDLFFBSFI7QUFHaUIsbUJBQVMsRUFBQyx1RkFIM0I7QUFBQSxpQ0FJSTtBQUFLLGlCQUFLLEVBQUMsNEJBQVg7QUFBd0MsaUJBQUssRUFBRSxFQUEvQztBQUFtRCxrQkFBTSxFQUFFLEVBQTNEO0FBQStELHFCQUFTLEVBQUMsU0FBekU7QUFBbUYsZ0JBQUksRUFBQyxPQUF4RjtBQUFnRyxtQkFBTyxFQUFDLGVBQXhHO0FBQUEsbUNBQ0k7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkg7O0dBeENRRCxXO1VBRVVHLHFEOzs7S0FGVkgsVztBQTBDTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjEyNzQzOTVlZjJhMTdjNDI2MzkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXl9IGZyb20gXCIuLi9saWIvaGVscGVyXCI7XHJcbmltcG9ydCB7YWRkVG9DYXJ0fSBmcm9tIFwiLi4vaGVscGVyL2FkZFRvQ2FydFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEl0ZW0oe3Byb2R1Y3R9KSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgbmV4dERldGFpbCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWAsXHJcbiAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzIDogcHJvZHVjdC5hbGlhc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5uZXh0RGV0YWlsKHByb2R1Y3QpfSBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC0yeGwgIGJnLXdoaXRlIHctZnVsbCBtLWF1dG8gcC0yXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9jZXNzLmVudi5BUElfVVJMK1wiL3N0b3JhZ2UvXCIrcHJvZHVjdD8udGh1bWJbMF19IGFsdD1cImFkaWRhc1wiIGNsYXNzTmFtZT1cInctZnVsbCBwLTQgaC04MCBtLWF1dG9cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXBpbmstMjAwIG0tMyBwLTQgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtYm9sZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdD8ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MCB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Q/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TW9uZXkocHJvZHVjdD8ucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydChwcm9kdWN0LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIGJnLXBpbmstNTAwIGhvdmVyOmJnLXBpbmstNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gY2xhc3NOYW1lPVwibXgtYXV0b1wiIGZpbGw9XCJ3aGl0ZVwiIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2MDAgNzM2djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtNDE2aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGg0MTZ2LTQxNnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4djQxNmg0MTZxNDAgMCA2OCAyOHQyOCA2OHpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTsiXSwic291cmNlUm9vdCI6IiJ9