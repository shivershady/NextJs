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
    currentFilter: currentFilter,
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
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
      page_type: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
                  lineNumber: 46,
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
                      lineNumber: 50,
                      columnNumber: 45
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 37
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "py-2 px-4 mx-auto mb-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-2/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full",
          children: "Add to cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicHJvZHVjdFF1ZXJ5IiwicXVlcnkiLCJhbGlhcyIsInByb2R1Y3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdERldGFpbCIsImRhdGEiLCJ1c2VTdGF0ZSIsImN1cnJlbnRGaWx0ZXIiLCJzZXRDdXJyZW50RmlsdGVyIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsIm5ld1Byb2QiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0RGV0YWlsIiwiZmlsdGVycyIsIm1hcCIsImZpbHRlciIsImluZGV4IiwibmFtZSIsImNoaWxkcyIsInZhbHVlIiwic2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFlBQVksR0FBR0osTUFBTSxDQUFDSyxLQUE1QjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsWUFBWSxDQUFDRSxLQUEzQjtBQUVBLE1BQU1DLE9BQU8sR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixPQUFOLENBQWNHLGFBQWQsQ0FBNEJDLElBQTVCLENBQWlDQSxJQUFyQztBQUFBLEdBQU4sQ0FBM0I7O0FBUGtCLGtCQVF3QkMsc0RBQVEsQ0FBQyxFQUFELENBUmhDO0FBQUEsTUFRWEMsYUFSVztBQUFBLE1BUUlDLGdCQVJKOztBQUFBLG1CQVNjRixzREFBUSxDQUFDLEVBQUQsQ0FUdEI7QUFBQSxNQVNYRyxRQVRXO0FBQUEsTUFTREMsV0FUQzs7QUFVbEIsTUFBTUMsT0FBTyxtQ0FDTlYsT0FETTtBQUVUTSxpQkFBYSxFQUFiQSxhQUZTO0FBR1RFLFlBQVEsRUFBUkE7QUFIUyxJQUFiOztBQU1BRyx5REFBUyxDQUFDLFlBQU07QUFDWmhCLFlBQVEsQ0FBQ2lCLHlFQUFnQixDQUFDO0FBQUNiLFdBQUssRUFBTEE7QUFBRCxLQUFELENBQWpCLENBQVI7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQSw0QkFDSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyx5REFBRDtBQUFPLGVBQVMsRUFBRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFJSTtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLCtCQUNJLHFFQUFDLGlFQUFEO0FBQWUsaUJBQU8sRUFBRUMsT0FBeEI7QUFBaUMsK0JBQXFCLEVBQUUsK0JBQUNRLFFBQUQ7QUFBQSxtQkFBWUMsV0FBVyxDQUFDRCxRQUFELENBQXZCO0FBQUE7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQ0ksaUJBQVMsRUFBQyw0RkFEZDtBQUFBLGdDQUVJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFDLGlCQUFkO0FBQUEsc0JBQ0ssQ0FBQyxDQUFBUixPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRWEsT0FBVCxLQUFvQixFQUFyQixFQUF5QkMsR0FBekIsQ0FBNkIsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsa0NBQzFCO0FBQUkseUJBQVMsRUFBQyx5Q0FBZDtBQUFBLHdDQUNJO0FBQ0ksMkJBQVMsRUFBQyxpREFEZDtBQUFBLDRCQUNpRUQsTUFBTSxDQUFDRTtBQUR4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBR0k7QUFBSSwyQkFBUyxFQUFDLDhCQUFkO0FBQUEsNEJBQ0ssQ0FBQ0YsTUFBTSxDQUFDRyxNQUFQLElBQWlCLEVBQWxCLEVBQXNCSixHQUF0QixDQUEwQixVQUFDSyxLQUFELEVBQVFILEtBQVI7QUFBQSx3Q0FDdkIscUVBQUMsaUVBQUQ7QUFBYyxnQ0FBVSxFQUFFLG9CQUFDSSxRQUFEO0FBQUEsK0JBQWNiLGdCQUFnQixDQUFDYSxRQUFELENBQTlCO0FBQUEsdUJBQTFCO0FBQ2MsMEJBQUksRUFBRUQsS0FEcEI7QUFDMkIsNkJBQU8sRUFBRWI7QUFEcEMsdUJBQ3dEVSxLQUR4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUR1QjtBQUFBLG1CQUExQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEo7QUFBQSxpQkFBNkRBLEtBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRDBCO0FBQUEsYUFBN0I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQWtCSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQ1EsbUJBQVMsRUFBQyxxUUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIOztHQXpEUXpCLEs7VUFDVUcscUQsRUFDRUUsdUQsRUFLREssdUQ7OztLQVBYVixLO0FBMkRNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1tpZF0uZTMzNzQ5NjNiNzMyOGE0OWNjOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NsaWRlXCI7XHJcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbVwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtnZXRQcm9kdWN0RGV0YWlsfSBmcm9tIFwiLi4vLi4vLi4vYWN0aW9ucy9wcm9kdWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxcIjtcclxuaW1wb3J0IENoZWNrYm94SXRlbSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DaGVja2JveEl0ZW1cIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0UXVlcnkgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBhbGlhcyA9IHByb2R1Y3RRdWVyeS5hbGlhcztcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZHVjdC5wcm9kdWN0RGV0YWlsLmRhdGEuZGF0YSk7XHJcbiAgICBjb25zdCBbY3VycmVudEZpbHRlciwgc2V0Q3VycmVudEZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG5ld1Byb2QgPSB7XHJcbiAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICBjdXJyZW50RmlsdGVyLFxyXG4gICAgICAgIHF1YW50aXR5XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRQcm9kdWN0RGV0YWlsKHthbGlhc30pKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxOYXZCYXIvPlxyXG4gICAgICAgICAgICA8U2xpZGUgcGFnZV90eXBlPXsyfS8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1uby13cmFwIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEwIG1kOnctNC81IHctMTEvMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdERldGFpbCBwcm9kdWN0PXtwcm9kdWN0fSBoYW5kbGVRdWFudGl0eVByb2R1Y3Q9eyhxdWFudGl0eSk9PnNldFF1YW50aXR5KHF1YW50aXR5KX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMTIgdy02NCBhYnNvbHV0ZSBzbTpyZWxhdGl2ZSBiZy1ncmF5LTgwMCBzaGFkb3cgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGhpZGRlbiBzbTpmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0xMiBsaXN0LWRpc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdD8uZmlsdGVycyB8fCBbXSkubWFwKChmaWx0ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctZnVsbCBpdGVtcy1jZW50ZXIgbWItNiBjdXJzb3ItcG9pbnRlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS01MDAgIG1sLTJcIj57ZmlsdGVyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kZWNpbWFsIG1sLTggdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhmaWx0ZXIuY2hpbGRzIHx8IFtdKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveEl0ZW0gaGFuZGxlRnVuYz17KHNlbGVjdGVkKSA9PiBzZXRDdXJyZW50RmlsdGVyKHNlbGVjdGVkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e3ZhbHVlfSBjdXJyZW50PXtjdXJyZW50RmlsdGVyfSBrZXk9e2luZGV4fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBteC1hdXRvIG1iLTQgYmctcGluay02MDAgaG92ZXI6YmctcGluay03MDAgZm9jdXM6cmluZy1waW5rLTUwMCBmb2N1czpyaW5nLW9mZnNldC1waW5rLTIwMCB0ZXh0LXdoaXRlIHctMi8zIHRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0yMDAgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgc2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFNpZGViYXIgZW5kcyAqL31cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==