webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

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
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ProductItem */ "./src/components/ProductItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../actions/product */ "./src/actions/product.js");
/* harmony import */ var _components_ProductDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ProductDetail */ "./src/components/ProductDetail.js");
/* harmony import */ var _components_CheckboxItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/CheckboxItem */ "./src/components/CheckboxItem.js");
/* harmony import */ var _helper_handleProduct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helper/handleProduct */ "./src/helper/handleProduct.js");




var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\product\\[id]\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function Index(props) {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var productQuery = router.query;
  var alias = productQuery.alias;
  var product = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.product.productDetail.data.data;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      currentFilter = _useState[0],
      setCurrentFilter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      quantity = _useState2[0],
      setQuantity = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      newProd = _useState3[0],
      setNewProd = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setNewProd = (Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("setNewProd"), _objectSpread(_objectSpread({}, product), {}, {
      currentFilter: currentFilter
    }));
  }, [currentFilter]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_9__["getProductDetail"])({
      alias: alias
    }));
  }, []);

  var handleAddCart = function handleAddCart() {
    Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_12__["incrementProductToCart"])(newProd, quantity);
    alert('Thêm vào giỏ hàng thành công');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_5__["default"], {
      page_type: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-no-wrap gap-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "py-10 md:w-4/5 w-11/12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductDetail__WEBPACK_IMPORTED_MODULE_10__["default"], {
          product: product,
          handleQuantityProduct: function handleQuantityProduct(quantity) {
            return setQuantity(quantity);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
                  lineNumber: 55,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "list-decimal ml-8 text-white",
                  children: (filter.childs || []).map(function (value, index) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CheckboxItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      handleFunc: function handleFunc(selected) {
                        return setCurrentFilter(selected);
                      },
                      item: value,
                      current: currentFilter
                    }, index, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: function onClick() {
            return handleAddCart();
          },
          className: "py-2 px-4 mx-auto mb-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-2/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full",
          children: "Add to cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

_s(Index, "ZwiRED+Sj7/iL7YFf6wd4VdFy4Q=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0Ly9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb2R1Y3RRdWVyeSIsInF1ZXJ5IiwiYWxpYXMiLCJwcm9kdWN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3REZXRhaWwiLCJkYXRhIiwidXNlU3RhdGUiLCJjdXJyZW50RmlsdGVyIiwic2V0Q3VycmVudEZpbHRlciIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJuZXdQcm9kIiwic2V0TmV3UHJvZCIsInVzZUVmZmVjdCIsImdldFByb2R1Y3REZXRhaWwiLCJoYW5kbGVBZGRDYXJ0IiwiaW5jcmVtZW50UHJvZHVjdFRvQ2FydCIsImFsZXJ0IiwiZmlsdGVycyIsIm1hcCIsImZpbHRlciIsImluZGV4IiwibmFtZSIsImNoaWxkcyIsInZhbHVlIiwic2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxZQUFZLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBNUI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLFlBQVksQ0FBQ0UsS0FBM0I7QUFFQSxNQUFNQyxPQUFPLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsT0FBTixDQUFjRyxhQUFkLENBQTRCQyxJQUE1QixDQUFpQ0EsSUFBckM7QUFBQSxHQUFOLENBQTNCOztBQVBrQixrQkFRd0JDLHNEQUFRLENBQUMsRUFBRCxDQVJoQztBQUFBLE1BUVhDLGFBUlc7QUFBQSxNQVFJQyxnQkFSSjs7QUFBQSxtQkFTY0Ysc0RBQVEsQ0FBQyxFQUFELENBVHRCO0FBQUEsTUFTWEcsUUFUVztBQUFBLE1BU0RDLFdBVEM7O0FBQUEsbUJBVVlKLHNEQUFRLENBQUMsRUFBRCxDQVZwQjtBQUFBLE1BVVhLLE9BVlc7QUFBQSxNQVVGQyxVQVZFOztBQVlsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELGNBQVUseUtBQ0hYLE9BREc7QUFFTk0sbUJBQWEsRUFBYkE7QUFGTSxPQUFWO0FBSUgsR0FMUSxFQUtOLENBQUNBLGFBQUQsQ0FMTSxDQUFUO0FBT0FNLHlEQUFTLENBQUMsWUFBTTtBQUNaakIsWUFBUSxDQUFDa0IseUVBQWdCLENBQUM7QUFBQ2QsV0FBSyxFQUFMQTtBQUFELEtBQUQsQ0FBakIsQ0FBUjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTWUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCQyx5RkFBc0IsQ0FBQ0wsT0FBRCxFQUFTRixRQUFULENBQXRCO0FBQ0FRLFNBQUssQ0FBQyw4QkFBRCxDQUFMO0FBQ0gsR0FIRDs7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBLDRCQUNJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLHlEQUFEO0FBQU8sZUFBUyxFQUFFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUlJO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUEsK0JBQ0kscUVBQUMsa0VBQUQ7QUFBZSxpQkFBTyxFQUFFaEIsT0FBeEI7QUFBaUMsK0JBQXFCLEVBQUUsK0JBQUNRLFFBQUQ7QUFBQSxtQkFBWUMsV0FBVyxDQUFDRCxRQUFELENBQXZCO0FBQUE7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQ0ksaUJBQVMsRUFBQyw0RkFEZDtBQUFBLGdDQUVJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFDLGlCQUFkO0FBQUEsc0JBQ0ssQ0FBQyxDQUFBUixPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRWlCLE9BQVQsS0FBb0IsRUFBckIsRUFBeUJDLEdBQXpCLENBQTZCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLGtDQUMxQjtBQUFJLHlCQUFTLEVBQUMseUNBQWQ7QUFBQSx3Q0FDSTtBQUNJLDJCQUFTLEVBQUMsaURBRGQ7QUFBQSw0QkFDaUVELE1BQU0sQ0FBQ0U7QUFEeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUdJO0FBQUksMkJBQVMsRUFBQyw4QkFBZDtBQUFBLDRCQUNLLENBQUNGLE1BQU0sQ0FBQ0csTUFBUCxJQUFpQixFQUFsQixFQUFzQkosR0FBdEIsQ0FBMEIsVUFBQ0ssS0FBRCxFQUFRSCxLQUFSO0FBQUEsd0NBQ3ZCLHFFQUFDLGlFQUFEO0FBQWMsZ0NBQVUsRUFBRSxvQkFBQ0ksUUFBRDtBQUFBLCtCQUFjakIsZ0JBQWdCLENBQUNpQixRQUFELENBQTlCO0FBQUEsdUJBQTFCO0FBQ2MsMEJBQUksRUFBRUQsS0FEcEI7QUFDMkIsNkJBQU8sRUFBRWpCO0FBRHBDLHVCQUN3RGMsS0FEeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEdUI7QUFBQSxtQkFBMUI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKO0FBQUEsaUJBQTZEQSxLQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQwQjtBQUFBLGFBQTdCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFrQkk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUNRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTU4sYUFBYSxFQUFuQjtBQUFBLFdBRGpCO0FBRVEsbUJBQVMsRUFBQyxxUUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0NIOztHQWxFUXZCLEs7VUFDVUcscUQsRUFDRUUsdUQsRUFLREssdUQ7OztLQVBYVixLO0FBb0VNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tpZF0uOWQyOWE3MTk1OGM0OWQ5NDNkY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgcmVhZC1vbmx5XCIpO1xufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NsaWRlXCI7XHJcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtnZXRQcm9kdWN0RGV0YWlsfSBmcm9tIFwiLi4vLi4vLi4vYWN0aW9ucy9wcm9kdWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxcIjtcclxuaW1wb3J0IENoZWNrYm94SXRlbSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DaGVja2JveEl0ZW1cIjtcclxuaW1wb3J0IHsgaW5jcmVtZW50UHJvZHVjdFRvQ2FydH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlci9oYW5kbGVQcm9kdWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdFF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgYWxpYXMgPSBwcm9kdWN0UXVlcnkuYWxpYXM7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3QucHJvZHVjdERldGFpbC5kYXRhLmRhdGEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRGaWx0ZXIsIHNldEN1cnJlbnRGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3UHJvZCwgc2V0TmV3UHJvZF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXROZXdQcm9kID0ge1xyXG4gICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICBjdXJyZW50RmlsdGVyLFxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdXJyZW50RmlsdGVyXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRQcm9kdWN0RGV0YWlsKHthbGlhc30pKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBZGRDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGluY3JlbWVudFByb2R1Y3RUb0NhcnQobmV3UHJvZCxxdWFudGl0eSk7XHJcbiAgICAgICAgYWxlcnQoJ1Row6ptIHbDoG8gZ2nhu48gaMOgbmcgdGjDoG5oIGPDtG5nJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPE5hdkJhci8+XHJcbiAgICAgICAgICAgIDxTbGlkZSBwYWdlX3R5cGU9ezJ9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vLXdyYXAgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgbWQ6dy00LzUgdy0xMS8xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsIHByb2R1Y3Q9e3Byb2R1Y3R9IGhhbmRsZVF1YW50aXR5UHJvZHVjdD17KHF1YW50aXR5KT0+c2V0UXVhbnRpdHkocXVhbnRpdHkpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0xMiB3LTY0IGFic29sdXRlIHNtOnJlbGF0aXZlIGJnLWdyYXktODAwIHNoYWRvdyBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaGlkZGVuIHNtOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTEyIGxpc3QtZGlzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9kdWN0Py5maWx0ZXJzIHx8IFtdKS5tYXAoKGZpbHRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidy1mdWxsIGl0ZW1zLWNlbnRlciBtYi02IGN1cnNvci1wb2ludGVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1ncmF5LTUwMCAgbWwtMlwiPntmaWx0ZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRlY2ltYWwgbWwtOCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGZpbHRlci5jaGlsZHMgfHwgW10pLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94SXRlbSBoYW5kbGVGdW5jPXsoc2VsZWN0ZWQpID0+IHNldEN1cnJlbnRGaWx0ZXIoc2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17dmFsdWV9IGN1cnJlbnQ9e2N1cnJlbnRGaWx0ZXJ9IGtleT17aW5kZXh9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkQ2FydCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IG14LWF1dG8gbWItNCBiZy1waW5rLTYwMCBob3ZlcjpiZy1waW5rLTcwMCBmb2N1czpyaW5nLXBpbmstNTAwIGZvY3VzOnJpbmctb2Zmc2V0LXBpbmstMjAwIHRleHQtd2hpdGUgdy0yLzMgdHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTIwMCB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU2lkZWJhciBlbmRzICovfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9