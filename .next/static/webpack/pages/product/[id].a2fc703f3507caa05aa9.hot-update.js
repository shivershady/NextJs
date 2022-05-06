webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

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
/* harmony import */ var _helper_handleProduct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helper/handleProduct */ "./src/helper/handleProduct.js");



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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      newProd = _useState3[0],
      setNewProd = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setNewProd(_objectSpread(_objectSpread({}, product), {}, {
      currentFilter: currentFilter
    }));
  }, [currentFilter]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_8__["getProductDetail"])({
      alias: alias
    }));
  }, []);

  var handleAddCart = function handleAddCart() {
    Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_11__["incrementProductToCart"])(newProd, quantity);
    alert('Thêm vào giỏ hàng thành công');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
      page_type: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CheckboxItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicHJvZHVjdFF1ZXJ5IiwicXVlcnkiLCJhbGlhcyIsInByb2R1Y3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdERldGFpbCIsImRhdGEiLCJ1c2VTdGF0ZSIsImN1cnJlbnRGaWx0ZXIiLCJzZXRDdXJyZW50RmlsdGVyIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsIm5ld1Byb2QiLCJzZXROZXdQcm9kIiwidXNlRWZmZWN0IiwiZ2V0UHJvZHVjdERldGFpbCIsImhhbmRsZUFkZENhcnQiLCJpbmNyZW1lbnRQcm9kdWN0VG9DYXJ0IiwiYWxlcnQiLCJmaWx0ZXJzIiwibWFwIiwiZmlsdGVyIiwiaW5kZXgiLCJuYW1lIiwiY2hpbGRzIiwidmFsdWUiLCJzZWxlY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsWUFBWSxHQUFHSixNQUFNLENBQUNLLEtBQTVCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRixZQUFZLENBQUNFLEtBQTNCO0FBRUEsTUFBTUMsT0FBTyxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLE9BQU4sQ0FBY0csYUFBZCxDQUE0QkMsSUFBNUIsQ0FBaUNBLElBQXJDO0FBQUEsR0FBTixDQUEzQjs7QUFQa0Isa0JB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LEVBQUMscVFBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNDSDs7R0FsRVF2QixLO1VBQ1VHLHFELEVBQ0VFLHVELEVBS0RLLHVEOzs7S0FQWFYsSztBQW9FTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmEyZmM3MDNmMzUwN2NhYTA1YWE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XHJcbmltcG9ydCBTbGlkZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TbGlkZVwiO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW1cIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Z2V0UHJvZHVjdERldGFpbH0gZnJvbSBcIi4uLy4uLy4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlsXCI7XHJcbmltcG9ydCBDaGVja2JveEl0ZW0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ2hlY2tib3hJdGVtXCI7XHJcbmltcG9ydCB7aW5jcmVtZW50UHJvZHVjdFRvQ2FydH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlci9oYW5kbGVQcm9kdWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdFF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgYWxpYXMgPSBwcm9kdWN0UXVlcnkuYWxpYXM7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2R1Y3QucHJvZHVjdERldGFpbC5kYXRhLmRhdGEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRGaWx0ZXIsIHNldEN1cnJlbnRGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmV3UHJvZCwgc2V0TmV3UHJvZF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXROZXdQcm9kKHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgY3VycmVudEZpbHRlcixcclxuICAgICAgICB9KVxyXG4gICAgfSwgW2N1cnJlbnRGaWx0ZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGdldFByb2R1Y3REZXRhaWwoe2FsaWFzfSkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZENhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaW5jcmVtZW50UHJvZHVjdFRvQ2FydChuZXdQcm9kLCBxdWFudGl0eSk7XHJcbiAgICAgICAgYWxlcnQoJ1Row6ptIHbDoG8gZ2nhu48gaMOgbmcgdGjDoG5oIGPDtG5nJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPE5hdkJhci8+XHJcbiAgICAgICAgICAgIDxTbGlkZSBwYWdlX3R5cGU9ezJ9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vLXdyYXAgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgbWQ6dy00LzUgdy0xMS8xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsIHByb2R1Y3Q9e3Byb2R1Y3R9IGhhbmRsZVF1YW50aXR5UHJvZHVjdD17KHF1YW50aXR5KSA9PiBzZXRRdWFudGl0eShxdWFudGl0eSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTEyIHctNjQgYWJzb2x1dGUgc206cmVsYXRpdmUgYmctZ3JheS04MDAgc2hhZG93IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBoaWRkZW4gc206ZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtMTIgbGlzdC1kaXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb2R1Y3Q/LmZpbHRlcnMgfHwgW10pLm1hcCgoZmlsdGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LWZ1bGwgaXRlbXMtY2VudGVyIG1iLTYgY3Vyc29yLXBvaW50ZXJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNTAwICBtbC0yXCI+e2ZpbHRlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGVjaW1hbCBtbC04IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZmlsdGVyLmNoaWxkcyB8fCBbXSkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hJdGVtIGhhbmRsZUZ1bmM9eyhzZWxlY3RlZCkgPT4gc2V0Q3VycmVudEZpbHRlcihzZWxlY3RlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXt2YWx1ZX0gY3VycmVudD17Y3VycmVudEZpbHRlcn0ga2V5PXtpbmRleH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRDYXJ0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgbXgtYXV0byBtYi00IGJnLXBpbmstNjAwIGhvdmVyOmJnLXBpbmstNzAwIGZvY3VzOnJpbmctcGluay01MDAgZm9jdXM6cmluZy1vZmZzZXQtcGluay0yMDAgdGV4dC13aGl0ZSB3LTIvMyB0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMjAwIHRleHQtY2VudGVyIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHNoYWRvdy1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTaWRlYmFyIGVuZHMgKi99XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=