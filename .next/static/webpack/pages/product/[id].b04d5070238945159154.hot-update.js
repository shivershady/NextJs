webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./src/components/ProductDetail.js":
/*!*****************************************!*\
  !*** ./src/components/ProductDetail.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/helper */ "./src/lib/helper.js");


var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\components\\ProductDetail.js",
    _s = $RefreshSig$();




function ProductDetail(_ref) {
  _s();

  var product = _ref.product,
      handleQuantityProduct = _ref.handleQuantityProduct;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      quantity = _useState[0],
      setQuantity = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    handleQuantityProduct(quantity);
  }, [quantity]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full bg-white shadow-lg rounded-lg overflow-hidden my-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "w-full h-96 object-cover",
      src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
      alt: "avatar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "py-4 px-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-2xl font-semibold text-gray-800",
        children: product === null || product === void 0 ? void 0 : product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "py-2 text-lg text-gray-700",
        children: product === null || product === void 0 ? void 0 : product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center mt-4 gap-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-red-500 font-bold",
          children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.price)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "line-through text-gray-500 font-bold",
          children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.old_price)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-4 flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-xl font-bold",
          children: "S\u1ED1 l\u01B0\u1EE3ng"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex gap-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
            },
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "w-8 text-center",
            value: quantity,
            onChange: function onChange(event) {
              return setQuantity(event.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return setQuantity(quantity + 1);
            },
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(ProductDetail, "3PUQ+Qlk8l5fMSm14xt0/bnXvRA=");

_c = ProductDetail;
/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);

var _c;

$RefreshReg$(_c, "ProductDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdERldGFpbC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlsIiwicHJvZHVjdCIsImhhbmRsZVF1YW50aXR5UHJvZHVjdCIsInVzZVN0YXRlIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsInVzZUVmZmVjdCIsInByb2Nlc3MiLCJ0aHVtYiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJvbGRfcHJpY2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBeUQ7QUFBQTs7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLHFCQUF3QixRQUF4QkEscUJBQXdCOztBQUFBLGtCQUNyQkMsc0RBQVEsQ0FBQyxDQUFELENBRGE7QUFBQSxNQUM5Q0MsUUFEOEM7QUFBQSxNQUNwQ0MsV0FEb0M7O0FBR3JEQyx5REFBUyxDQUFDLFlBQU07QUFDWkoseUJBQXFCLENBQUNFLFFBQUQsQ0FBckI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsUUFBRCxDQUZNLENBQVQ7QUFJQSxzQkFDSTtBQUFLLGFBQVMsRUFBQywyREFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQ0ssU0FBRyxFQUFFRyx3QkFBQSxHQUFzQixXQUF0QixJQUFvQ04sT0FBcEMsYUFBb0NBLE9BQXBDLHVCQUFvQ0EsT0FBTyxDQUFFTyxLQUFULENBQWUsQ0FBZixDQUFwQyxDQURWO0FBRUssU0FBRyxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxzQ0FBZDtBQUFBLGtCQUFzRFAsT0FBdEQsYUFBc0RBLE9BQXRELHVCQUFzREEsT0FBTyxDQUFFUTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQSxrQkFBMkNSLE9BQTNDLGFBQTJDQSxPQUEzQyx1QkFBMkNBLE9BQU8sQ0FBRVM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLHdCQUFiO0FBQUEsb0JBQ0tDLCtEQUFXLENBQUNWLE9BQUQsYUFBQ0EsT0FBRCx1QkFBQ0EsT0FBTyxDQUFFVyxLQUFWO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFHLG1CQUFTLEVBQUMsc0NBQWI7QUFBQSxvQkFBcURELCtEQUFXLENBQUNWLE9BQUQsYUFBQ0EsT0FBRCx1QkFBQ0EsT0FBTyxDQUFFWSxTQUFWO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFTSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0k7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1ULFFBQVEsR0FBRyxDQUFYLEdBQWVDLFdBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBMUIsR0FBMkNDLFdBQVcsQ0FBQyxDQUFELENBQTVEO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFHSTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBUyxFQUFDLGlCQUE3QjtBQUErQyxpQkFBSyxFQUFFRCxRQUF0RDtBQUFnRSxvQkFBUSxFQUFFLGtCQUFBVSxLQUFLO0FBQUEscUJBQUlULFdBQVcsQ0FBQ1MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBZjtBQUFBO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSTtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBTVgsV0FBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFqQjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJCSDs7R0FsQ1FKLGE7O0tBQUFBLGE7QUFvQ01BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS5iMDRkNTA3MDIzODk0NTE1OTE1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Zvcm1hdE1vbmV5fSBmcm9tIFwiLi4vbGliL2hlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdERldGFpbCh7cHJvZHVjdCwgaGFuZGxlUXVhbnRpdHlQcm9kdWN0fSkge1xyXG4gICAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZVF1YW50aXR5UHJvZHVjdChxdWFudGl0eSk7XHJcbiAgICB9LCBbcXVhbnRpdHldKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBteS00XCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtOTYgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9zdG9yYWdlL1wiICsgcHJvZHVjdD8udGh1bWJbMF19XHJcbiAgICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPntwcm9kdWN0Py5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS0yIHRleHQtbGcgdGV4dC1ncmF5LTcwMFwiPntwcm9kdWN0Py5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTQgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdWN0Py5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmUtdGhyb3VnaCB0ZXh0LWdyYXktNTAwIGZvbnQtYm9sZFwiPntmb3JtYXRNb25leShwcm9kdWN0Py5vbGRfcHJpY2UpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+U+G7kSBsxrDhu6NuZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHF1YW50aXR5ID4gMSA/IHNldFF1YW50aXR5KHF1YW50aXR5IC0gMSkgOiBzZXRRdWFudGl0eSgxKX0+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidy04IHRleHQtY2VudGVyXCIgdmFsdWU9e3F1YW50aXR5fSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0UXVhbnRpdHkoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFF1YW50aXR5KHF1YW50aXR5ICsgMSl9Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=