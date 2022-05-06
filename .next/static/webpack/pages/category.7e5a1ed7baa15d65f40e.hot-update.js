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
/* harmony import */ var _helper_handleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/handleProduct */ "./src/helper/handleProduct.js");


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
            Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_4__["incrementProductToCart"])(product, 1);
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

/***/ }),

/***/ "./src/helper/handleProduct.js":
/*!*************************************!*\
  !*** ./src/helper/handleProduct.js ***!
  \*************************************/
/*! exports provided: incrementProductToCart, decrementProductToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementProductToCart", function() { return incrementProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementProductToCart", function() { return decrementProductToCart; });
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var incrementProductToCart = function incrementProductToCart(product, quantityProd) {
  var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
  var check = false;
  var tmp = carts === null || carts === void 0 ? void 0 : carts.map(function (c) {
    if ((c === null || c === void 0 ? void 0 : c.id) === product.id) {
      alert('sản phẩm đã có trong giỏ hàng');
      check = true;
      return _objectSpread(_objectSpread({}, c), {}, {
        quantity: c.quantity + quantityProd
      });
    } else {
      return c;
    }
  });

  if (check == false) {
    localStorage.setItem('carts', JSON.stringify([].concat(Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(carts), [_objectSpread(_objectSpread({}, product), {}, {
      quantity: quantityProd
    })])));
    alert('thêm sản phẩm vào giỏ hàng thành công');
  } else {
    localStorage.setItem('carts', JSON.stringify(tmp));
  }
};
var decrementProductToCart = function decrementProductToCart(product, quantityProd) {
  var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
  var check = false;
  var tmp = carts === null || carts === void 0 ? void 0 : carts.map(function (c) {
    if ((c === null || c === void 0 ? void 0 : c.id) === product.id) {
      alert('sản phẩm đã có trong giỏ hàng');
      check = true;
      return _objectSpread(_objectSpread({}, c), {}, {
        quantity: c.quantity + quantityProd
      });
    } else {
      return c;
    }
  });

  if (check == false) {
    localStorage.setItem('carts', JSON.stringify([].concat(Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(carts), [_objectSpread(_objectSpread({}, product), {}, {
      quantity: quantityProd
    })])));
    alert('thêm sản phẩm vào giỏ hàng thành công');
  } else {
    localStorage.setItem('carts', JSON.stringify(tmp));
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9oZWxwZXIvaGFuZGxlUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbSIsInByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuZXh0RGV0YWlsIiwicHVzaCIsInBhdGhuYW1lIiwiaWQiLCJxdWVyeSIsImFsaWFzIiwicHJvY2VzcyIsInRodW1iIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiaW5jcmVtZW50UHJvZHVjdFRvQ2FydCIsInF1YW50aXR5UHJvZCIsImNhcnRzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNoZWNrIiwidG1wIiwibWFwIiwiYyIsImFsZXJ0IiwicXVhbnRpdHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVjcmVtZW50UHJvZHVjdFRvQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxPQUFnQztBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUU1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNILE9BQUQsRUFBYTtBQUN4QkMsVUFBTSxDQUFDRyxJQUFQLENBQVk7QUFDUkMsY0FBUSxxQkFBY0wsT0FBTyxDQUFDTSxFQUF0QixDQURBO0FBRVJDLFdBQUssRUFBRTtBQUNIQyxhQUFLLEVBQUdSLE9BQU8sQ0FBQ1E7QUFEYjtBQUZDLEtBQVo7QUFNUCxHQVBEOztBQVNBLHNCQUNJO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBSUwsVUFBVSxDQUFDSCxPQUFELENBQWQ7QUFBQSxLQUFkO0FBQXVD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QUFiLENBQXFCLE9BQXJCLEVBQThCUixJQUFJLENBQUNTLFNBQUwscUlBQW1CWixLQUFuQixvQ0FBOEJuQixPQUE5QjtBQUF1QzZCLGNBQVEsRUFBRVg7QUFBakQsU0FBOUI7QUFDQVUsU0FBSyxDQUFDLHVDQUFELENBQUw7QUFDSCxHQUhELE1BR0s7QUFDRFIsZ0JBQVksQ0FBQ1UsT0FBYixDQUFxQixPQUFyQixFQUE4QlIsSUFBSSxDQUFDUyxTQUFMLENBQWVOLEdBQWYsQ0FBOUI7QUFDSDtBQUNKLENBbEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5LjdlNWExZWQ3YmFhMTVkNjVmNDBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXl9IGZyb20gXCIuLi9saWIvaGVscGVyXCI7XHJcbmltcG9ydCB7ZGVjcmVtZW50UHJvZHVjdFRvQ2FydCwgaW5jcmVtZW50UHJvZHVjdFRvQ2FydH0gZnJvbSBcIi4uL2hlbHBlci9oYW5kbGVQcm9kdWN0XCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0SXRlbSh7cHJvZHVjdH0pIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBuZXh0RGV0YWlsID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YCxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpYXMgOiBwcm9kdWN0LmFsaWFzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCk9Pm5leHREZXRhaWwocHJvZHVjdCl9IGNsYXNzTmFtZT1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCAgYmctd2hpdGUgdy1mdWxsIG0tYXV0byBwLTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LkFQSV9VUkwrXCIvc3RvcmFnZS9cIitwcm9kdWN0Py50aHVtYlswXX0gYWx0PVwiYWRpZGFzXCIgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBoLTgwIG0tYXV0b1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcGluay0yMDAgbS0zIHAtNCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1ib2xkIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Py5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdD8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdWN0Py5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50UHJvZHVjdFRvQ2FydChwcm9kdWN0LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIGJnLXBpbmstNTAwIGhvdmVyOmJnLXBpbmstNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gY2xhc3NOYW1lPVwibXgtYXV0b1wiIGZpbGw9XCJ3aGl0ZVwiIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2MDAgNzM2djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtNDE2aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGg0MTZ2LTQxNnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4djQxNmg0MTZxNDAgMCA2OCAyOHQyOCA2OHpcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTsiLCJleHBvcnQgY29uc3QgaW5jcmVtZW50UHJvZHVjdFRvQ2FydCA9IChwcm9kdWN0LCBxdWFudGl0eVByb2QpID0+IHtcclxuICAgIGxldCBjYXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSk6W107XHJcbiAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgIGxldCB0bXAgPSBjYXJ0cz8ubWFwKGMgPT4ge1xyXG4gICAgICAgIGlmKGM/LmlkID09PSBwcm9kdWN0LmlkKXtcclxuICAgICAgICAgICAgYWxlcnQoJ3PhuqNuIHBo4bqpbSDEkcOjIGPDsyB0cm9uZyBnaeG7jyBow6BuZycpO1xyXG4gICAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uYywgcXVhbnRpdHk6IGMucXVhbnRpdHkgKyBxdWFudGl0eVByb2R9O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChjaGVjayA9PSBmYWxzZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KFsuLi5jYXJ0cywgey4uLnByb2R1Y3QsIHF1YW50aXR5OiBxdWFudGl0eVByb2R9XSkpXHJcbiAgICAgICAgYWxlcnQoJ3Row6ptIHPhuqNuIHBo4bqpbSB2w6BvIGdp4buPIGjDoG5nIHRow6BuaCBjw7RuZycpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRzJywgSlNPTi5zdHJpbmdpZnkodG1wKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3JlbWVudFByb2R1Y3RUb0NhcnQgPSAocHJvZHVjdCwgcXVhbnRpdHlQcm9kKSA9PiB7XHJcbiAgICBsZXQgY2FydHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykpOltdO1xyXG4gICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICBsZXQgdG1wID0gY2FydHM/Lm1hcChjID0+IHtcclxuICAgICAgICBpZihjPy5pZCA9PT0gcHJvZHVjdC5pZCl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdz4bqjbiBwaOG6qW0gxJHDoyBjw7MgdHJvbmcgZ2nhu48gaMOgbmcnKTtcclxuICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLmMsIHF1YW50aXR5OiBjLnF1YW50aXR5ICsgcXVhbnRpdHlQcm9kfTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoY2hlY2sgPT0gZmFsc2UpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeShbLi4uY2FydHMsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogcXVhbnRpdHlQcm9kfV0pKVxyXG4gICAgICAgIGFsZXJ0KCd0aMOqbSBz4bqjbiBwaOG6qW0gdsOgbyBnaeG7jyBow6BuZyB0aMOgbmggY8O0bmcnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KHRtcCkpXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==