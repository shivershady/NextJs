webpackHotUpdate_N_E("pages/product/[id]",{

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
    quantity: quantity
  });

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_8__["getProductDetail"])({
      alias: alias
    }));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
      page_type: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
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
                  lineNumber: 45,
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
                      lineNumber: 49,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 37
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "py-2 px-4 mx-auto mb-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-2/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full",
          children: "Add to cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicHJvZHVjdFF1ZXJ5IiwicXVlcnkiLCJhbGlhcyIsInByb2R1Y3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdERldGFpbCIsImRhdGEiLCJ1c2VTdGF0ZSIsImN1cnJlbnRGaWx0ZXIiLCJzZXRDdXJyZW50RmlsdGVyIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsIm5ld1Byb2QiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0RGV0YWlsIiwiZmlsdGVycyIsIm1hcCIsImZpbHRlciIsImluZGV4IiwibmFtZSIsImNoaWxkcyIsInZhbHVlIiwic2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFlBQVksR0FBR0osTUFBTSxDQUFDSyxLQUE1QjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsWUFBWSxDQUFDRSxLQUEzQjtBQUVBLE1BQU1DLE9BQU8sR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixPQUFOLENBQWNHLGFBQWQsQ0FBNEJDLElBQTVCLENBQWlDQSxJQUFyQztBQUFBLEdBQU4sQ0FBM0I7O0FBUGtCLGtCQVF3QkMsc0RBQVEsQ0FBQyxFQUFELENBUmhDO0FBQUEsTUFRWEMsYUFSVztBQUFBLE1BUUlDLGdCQVJKOztBQUFBLG1CQVNjRixzREFBUSxDQUFDLEVBQUQsQ0FUdEI7QUFBQSxNQVNYRyxRQVRXO0FBQUEsTUFTREMsV0FUQzs7QUFVbEIsTUFBTUMsT0FBTyxtQ0FDTlYsT0FETTtBQUVUUSxZQUFRLEVBQVJBO0FBRlMsSUFBYjs7QUFLQUcseURBQVMsQ0FBQyxZQUFNO0FBQ1poQixZQUFRLENBQUNpQix5RUFBZ0IsQ0FBQztBQUFDYixXQUFLLEVBQUxBO0FBQUQsS0FBRCxDQUFqQixDQUFSO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUEsNEJBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMseURBQUQ7QUFBTyxlQUFTLEVBQUU7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBSUk7QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsd0JBQWY7QUFBQSwrQkFDSSxxRUFBQyxpRUFBRDtBQUFlLGlCQUFPLEVBQUVDLE9BQXhCO0FBQWlDLCtCQUFxQixFQUFFLCtCQUFDUSxRQUFEO0FBQUEsbUJBQVlDLFdBQVcsQ0FBQ0QsUUFBRCxDQUF2QjtBQUFBO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUNJLGlCQUFTLEVBQUMsNEZBRGQ7QUFBQSxnQ0FFSTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGlDQUNJO0FBQUkscUJBQVMsRUFBQyxpQkFBZDtBQUFBLHNCQUNLLENBQUMsQ0FBQVIsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVhLE9BQVQsS0FBb0IsRUFBckIsRUFBeUJDLEdBQXpCLENBQTZCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLGtDQUMxQjtBQUFJLHlCQUFTLEVBQUMseUNBQWQ7QUFBQSx3Q0FDSTtBQUNJLDJCQUFTLEVBQUMsaURBRGQ7QUFBQSw0QkFDaUVELE1BQU0sQ0FBQ0U7QUFEeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUdJO0FBQUksMkJBQVMsRUFBQyw4QkFBZDtBQUFBLDRCQUNLLENBQUNGLE1BQU0sQ0FBQ0csTUFBUCxJQUFpQixFQUFsQixFQUFzQkosR0FBdEIsQ0FBMEIsVUFBQ0ssS0FBRCxFQUFRSCxLQUFSO0FBQUEsd0NBQ3ZCLHFFQUFDLGlFQUFEO0FBQWMsZ0NBQVUsRUFBRSxvQkFBQ0ksUUFBRDtBQUFBLCtCQUFjYixnQkFBZ0IsQ0FBQ2EsUUFBRCxDQUE5QjtBQUFBLHVCQUExQjtBQUNjLDBCQUFJLEVBQUVELEtBRHBCO0FBQzJCLDZCQUFPLEVBQUViO0FBRHBDLHVCQUN3RFUsS0FEeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEdUI7QUFBQSxtQkFBMUI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKO0FBQUEsaUJBQTZEQSxLQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQwQjtBQUFBLGFBQTdCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFrQkk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUNRLG1CQUFTLEVBQUMscVFBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDs7R0F4RFF6QixLO1VBQ1VHLHFELEVBQ0VFLHVELEVBS0RLLHVEOzs7S0FQWFYsSztBQTBETUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjBjY2Q5YTYyNzJjNjkzMWIzY2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XHJcbmltcG9ydCBTbGlkZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TbGlkZVwiO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW1cIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Z2V0UHJvZHVjdERldGFpbH0gZnJvbSBcIi4uLy4uLy4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsXCI7XHJcbmltcG9ydCBDaGVja2JveEl0ZW0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ2hlY2tib3hJdGVtXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdFF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgYWxpYXMgPSBwcm9kdWN0UXVlcnkuYWxpYXM7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3QucHJvZHVjdERldGFpbC5kYXRhLmRhdGEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRGaWx0ZXIsIHNldEN1cnJlbnRGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBuZXdQcm9kID0ge1xyXG4gICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgcXVhbnRpdHlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGdldFByb2R1Y3REZXRhaWwoe2FsaWFzfSkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPE5hdkJhci8+XHJcbiAgICAgICAgICAgIDxTbGlkZSBwYWdlX3R5cGU9ezJ9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vLXdyYXAgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgbWQ6dy00LzUgdy0xMS8xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsIHByb2R1Y3Q9e3Byb2R1Y3R9IGhhbmRsZVF1YW50aXR5UHJvZHVjdD17KHF1YW50aXR5KT0+c2V0UXVhbnRpdHkocXVhbnRpdHkpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0xMiB3LTY0IGFic29sdXRlIHNtOnJlbGF0aXZlIGJnLWdyYXktODAwIHNoYWRvdyBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaGlkZGVuIHNtOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTEyIGxpc3QtZGlzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm9kdWN0Py5maWx0ZXJzIHx8IFtdKS5tYXAoKGZpbHRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidy1mdWxsIGl0ZW1zLWNlbnRlciBtYi02IGN1cnNvci1wb2ludGVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS0zMDAgaG92ZXI6dGV4dC1ncmF5LTUwMCAgbWwtMlwiPntmaWx0ZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRlY2ltYWwgbWwtOCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGZpbHRlci5jaGlsZHMgfHwgW10pLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94SXRlbSBoYW5kbGVGdW5jPXsoc2VsZWN0ZWQpID0+IHNldEN1cnJlbnRGaWx0ZXIoc2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17dmFsdWV9IGN1cnJlbnQ9e2N1cnJlbnRGaWx0ZXJ9IGtleT17aW5kZXh9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IG14LWF1dG8gbWItNCBiZy1waW5rLTYwMCBob3ZlcjpiZy1waW5rLTcwMCBmb2N1czpyaW5nLXBpbmstNTAwIGZvY3VzOnJpbmctb2Zmc2V0LXBpbmstMjAwIHRleHQtd2hpdGUgdy0yLzMgdHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTIwMCB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU2lkZWJhciBlbmRzICovfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9