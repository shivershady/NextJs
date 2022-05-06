webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./src/helper/addToCart.js":
/*!*********************************!*\
  !*** ./src/helper/addToCart.js ***!
  \*********************************/
/*! exports provided: addToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var addToCart = function addToCart(product, quantityProd) {
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

/***/ }),

/***/ "./src/pages/product/[id]/index.js":
/*!*****************************************!*\
  !*** ./src/pages/product/[id]/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ProductItem */ "./src/components/ProductItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/product */ "./src/actions/product.js");
/* harmony import */ var _components_ProductDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ProductDetail */ "./src/components/ProductDetail.js");
/* harmony import */ var _components_CheckboxItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/CheckboxItem */ "./src/components/CheckboxItem.js");
/* harmony import */ var _helper_addToCart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helper/addToCart */ "./src/helper/addToCart.js");



var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\product\\[id]\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function Index(props) {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var productQuery = router.query;
  var alias = productQuery.alias;
  var product = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.product.productDetail.data.data;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      currentFilter = _useState[0],
      setCurrentFilter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      quantity = _useState2[0],
      setQuantity = _useState2[1];

  var newProd = _objectSpread(_objectSpread({}, product), {}, {
    currentFilter: currentFilter
  });

  console.log(newProd);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_8__["getProductDetail"])({
      alias: alias
    }));
  }, []);

  var handleAddCart = function handleAddCart() {
    Object(_helper_addToCart__WEBPACK_IMPORTED_MODULE_11__["addToCart"])(newProd, quantity);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
      page_type: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-no-wrap gap-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "py-10 md:w-4/5 w-11/12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: product,
          handleQuantityProduct: function handleQuantityProduct(quantity) {
            return setQuantity(quantity);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-12 w-64 absolute sm:relative bg-gray-800 shadow flex-col justify-between hidden sm:flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "px-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "mt-12 list-disc",
            children: ((product === null || product === void 0 ? void 0 : product.filters) || []).map(function (filter, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "w-full items-center mb-6 cursor-pointer",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-sm text-gray-300 hover:text-gray-500  ml-2",
                  children: filter.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "list-decimal ml-8 text-white",
                  children: (filter.childs || []).map(function (value, index) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CheckboxItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
                      handleFunc: function handleFunc(selected) {
                        return setCurrentFilter(selected);
                      },
                      item: value,
                      current: currentFilter
                    }, index, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 37
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "py-2 px-4 mx-auto mb-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-2/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full",
          children: "Add to cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, this);
}

_s(Index, "wmD7x4ldBX4EQrn+5KQxyV+pOMI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlci9hZGRUb0NhcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0Ly9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHlQcm9kIiwiY2FydHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY2hlY2siLCJ0bXAiLCJtYXAiLCJjIiwiaWQiLCJhbGVydCIsInF1YW50aXR5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIkluZGV4IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicHJvZHVjdFF1ZXJ5IiwicXVlcnkiLCJhbGlhcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0RGV0YWlsIiwiZGF0YSIsInVzZVN0YXRlIiwiY3VycmVudEZpbHRlciIsInNldEN1cnJlbnRGaWx0ZXIiLCJzZXRRdWFudGl0eSIsIm5ld1Byb2QiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZ2V0UHJvZHVjdERldGFpbCIsImhhbmRsZUFkZENhcnQiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiaW5kZXgiLCJuYW1lIiwiY2hpbGRzIiwidmFsdWUiLCJzZWxlY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsT0FBRCxFQUFTQyxZQUFULEVBQTBCO0FBQy9DLE1BQUlDLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLElBQWdDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBaEMsR0FBMEUsRUFBdEY7QUFDQSxNQUFJRyxLQUFLLEdBQUcsS0FBWjtBQUNBLE1BQUlDLEdBQUcsR0FBR04sS0FBSCxhQUFHQSxLQUFI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QkFBUyxFQUFDLHFRQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQ0g7O0dBN0RRekIsSztVQUNVRyxxRCxFQUNFRSx1RCxFQUtESSx1RDs7O0tBUFhULEs7QUErRE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS45NTgyZWJkN2JlMjE4ZjE3NDMwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0LHF1YW50aXR5UHJvZCkgPT4ge1xyXG4gICAgbGV0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKTpbXTtcclxuICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgbGV0IHRtcCA9IGNhcnRzPy5tYXAoYyA9PiB7XHJcbiAgICAgICAgaWYoYz8uaWQgPT09IHByb2R1Y3QuaWQpe1xyXG4gICAgICAgICAgICBhbGVydCgnc+G6o24gcGjhuqltIMSRw6MgY8OzIHRyb25nIGdp4buPIGjDoG5nJyk7XHJcbiAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5jLCBxdWFudGl0eTogYy5xdWFudGl0eSArIHF1YW50aXR5UHJvZH07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRzJywgSlNPTi5zdHJpbmdpZnkoWy4uLmNhcnRzLCB7Li4ucHJvZHVjdCwgcXVhbnRpdHk6IHF1YW50aXR5UHJvZH1dKSlcclxuICAgICAgICBhbGVydCgndGjDqm0gc+G6o24gcGjhuqltIHbDoG8gZ2nhu48gaMOgbmcgdGjDoG5oIGPDtG5nJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeSh0bXApKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU2xpZGVcIjtcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2dldFByb2R1Y3REZXRhaWx9IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdERldGFpbFwiO1xyXG5pbXBvcnQgQ2hlY2tib3hJdGVtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NoZWNrYm94SXRlbVwiO1xyXG5pbXBvcnQge2FkZFRvQ2FydH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlci9hZGRUb0NhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0UXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBhbGlhcyA9IHByb2R1Y3RRdWVyeS5hbGlhcztcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdC5wcm9kdWN0RGV0YWlsLmRhdGEuZGF0YSk7XHJcbiAgICBjb25zdCBbY3VycmVudEZpbHRlciwgc2V0Q3VycmVudEZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG5ld1Byb2QgPSB7XHJcbiAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICBjdXJyZW50RmlsdGVyLFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobmV3UHJvZCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRQcm9kdWN0RGV0YWlsKHthbGlhc30pKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBZGRDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZFRvQ2FydChuZXdQcm9kLHF1YW50aXR5KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8TmF2QmFyLz5cclxuICAgICAgICAgICAgPFNsaWRlIHBhZ2VfdHlwZT17Mn0vPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm8td3JhcCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMCBtZDp3LTQvNSB3LTExLzEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWwgcHJvZHVjdD17cHJvZHVjdH0gaGFuZGxlUXVhbnRpdHlQcm9kdWN0PXsocXVhbnRpdHkpPT5zZXRRdWFudGl0eShxdWFudGl0eSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTEyIHctNjQgYWJzb2x1dGUgc206cmVsYXRpdmUgYmctZ3JheS04MDAgc2hhZG93IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBoaWRkZW4gc206ZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtMTIgbGlzdC1kaXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb2R1Y3Q/LmZpbHRlcnMgfHwgW10pLm1hcCgoZmlsdGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LWZ1bGwgaXRlbXMtY2VudGVyIG1iLTYgY3Vyc29yLXBvaW50ZXJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNTAwICBtbC0yXCI+e2ZpbHRlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGVjaW1hbCBtbC04IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZmlsdGVyLmNoaWxkcyB8fCBbXSkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hJdGVtIGhhbmRsZUZ1bmM9eyhzZWxlY3RlZCkgPT4gc2V0Q3VycmVudEZpbHRlcihzZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXt2YWx1ZX0gY3VycmVudD17Y3VycmVudEZpbHRlcn0ga2V5PXtpbmRleH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgbXgtYXV0byBtYi00IGJnLXBpbmstNjAwIGhvdmVyOmJnLXBpbmstNzAwIGZvY3VzOnJpbmctcGluay01MDAgZm9jdXM6cmluZy1vZmZzZXQtcGluay0yMDAgdGV4dC13aGl0ZSB3LTIvMyB0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMjAwIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHNoYWRvdy1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTaWRlYmFyIGVuZHMgKi99XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=