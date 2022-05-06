webpackHotUpdate_N_E("pages/order",{

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
      check = true;
      return _objectSpread(_objectSpread({}, c), {}, {
        quantity: c.quantity + quantityProd
      });
    } else {
      return c;
    }
  });

  if (check === false) {
    localStorage.setItem('carts', JSON.stringify([].concat(Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(carts), [_objectSpread(_objectSpread({}, product), {}, {
      quantity: quantityProd
    })])));
  } else {
    localStorage.setItem('carts', JSON.stringify(tmp));
  }
};
var decrementProductToCart = function decrementProductToCart(product, quantityProd) {
  var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
  var check = false;
  var tmp = carts === null || carts === void 0 ? void 0 : carts.map(function (c, i) {
    if ((c === null || c === void 0 ? void 0 : c.id) === product.id) {
      check = true;

      if (c.quantity > 1) {
        return _objectSpread(_objectSpread({}, c), {}, {
          quantity: c.quantity - quantityProd
        });
      } else {
        console.log(carts);
        var newCart = carts.splice(i, 1);
        console.log(newCart); // localStorage.setItem('carts', JSON.stringify(carts))

        return c;
      }
    } else {
      return c;
    }
  });

  if (check === false) {
    localStorage.setItem('carts', JSON.stringify([].concat(Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(carts), [_objectSpread(_objectSpread({}, product), {}, {
      quantity: quantityProd
    })])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlci9oYW5kbGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbImluY3JlbWVudFByb2R1Y3RUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHlQcm9kIiwiY2FydHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY2hlY2siLCJ0bXAiLCJtYXAiLCJjIiwiaWQiLCJxdWFudGl0eSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkZWNyZW1lbnRQcm9kdWN0VG9DYXJ0IiwiaSIsImNvbnNvbGUiLCJsb2ciLCJuZXdDYXJ0Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxPQUFELEVBQVVDLFlBQVYsRUFBMkI7QUFDN0QsTUFBSUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsSUFBZ0NDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWCxDQUFoQyxHQUE0RSxFQUF4RjtBQUNBLE1BQUlHLEtBQUssR0FBRyxLQUFaO0FBQ0EsTUFBSUMsR0FBRyxHQUFHTixLQUFILGFBQUdBLEtBQUgsdUJBQUdBLEtBQUssQ0FBRU8sR0FBUCxDQUFXLFVBQUFDLENBQUMsRUFBSTtBQUN0QixRQUFJLENBQUFBLENBQUMsU0FBRCxJQUFBQSxDQUFDLFdBQUQsWUFBQUEsQ0FBQyxDQUFFQyxFQUFILE1BQVVYLE9BQU8sQ0FBQ1csRUFBdEIsRUFBMEI7QUFDdEJKLFdBQUssR0FBRyxJQUFSO0FBQ0EsNkNBQVdHLENBQVg7QUFBY0UsZ0JBQVEsRUFBRUYsQ0FBQyxDQUFDRSxRQUFGLEdBQWFYO0FBQXJDO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsYUFBT1MsQ0FBUDtBQUNIO0FBQ0osR0FQUyxDQUFWOztBQVFBLE1BQUlILEtBQUssS0FBSyxLQUFkLEVBQXFCO0FBQ2pCSixnQkFBWSxDQUFDVSxPQUFiLENBQXFCLE9BQXJCLEVBQThCUixJQUFJLENBQUNTLFNBQUwscUlBQW1CWixLQUFuQixvQ0FBOEJGLE9BQTlCO0FBQXVDWSxjQUFRLEVBQUVYO0FBQWpELFNBQTlCO0FBQ0gsR0FGRCxNQUVPO0FBQ0hFLGdCQUFZLENBQUNVLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJSLElBQUksQ0FBQ1MsU0FBTCxDQUFlTixHQUFmLENBQTlCO0FBQ0g7QUFDSixDQWhCTTtBQWtCQSxJQUFNTyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNmLE9BQUQsRUFBVUMsWUFBVixFQUEyQjtBQUM3RCxNQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUFnQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLENBQWhDLEdBQTRFLEVBQXhGO0FBQ0EsTUFBSUcsS0FBSyxHQUFHLEtBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxHQUFQLENBQVcsVUFBQ0MsQ0FBRCxFQUFHTSxDQUFILEVBQVM7QUFDMUIsUUFBSSxDQUFBTixDQUFDLFNBQUQsSUFBQUEsQ0FBQyxXQUFELFlBQUFBLENBQUMsQ0FBRUMsRUFBSCxNQUFVWCxPQUFPLENBQUNXLEVBQXRCLEVBQTBCO0FBQ3RCSixXQUFLLEdBQUcsSUFBUjs7QUFDQSxVQUFHRyxDQUFDLENBQUNFLFFBQUYsR0FBYSxDQUFoQixFQUFrQjtBQUNkLCtDQUFXRixDQUFYO0FBQWNFLGtCQUFRLEVBQUVGLENBQUMsQ0FBQ0UsUUFBRixHQUFhWDtBQUFyQztBQUNILE9BRkQsTUFFSztBQUNEZ0IsZUFBTyxDQUFDQyxHQUFSLENBQVloQixLQUFaO0FBQ0EsWUFBTWlCLE9BQU8sR0FBR2pCLEtBQUssQ0FBQ2tCLE1BQU4sQ0FBYUosQ0FBYixFQUFnQixDQUFoQixDQUFoQjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBWixFQUhDLENBSUQ7O0FBQ0EsZUFBT1QsQ0FBUDtBQUNIO0FBQ0osS0FYRCxNQVdPO0FBQ0gsYUFBT0EsQ0FBUDtBQUNIO0FBQ0osR0FmUyxDQUFWOztBQWdCQSxNQUFJSCxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNqQkosZ0JBQVksQ0FBQ1UsT0FBYixDQUFxQixPQUFyQixFQUE4QlIsSUFBSSxDQUFDUyxTQUFMLHFJQUFtQlosS0FBbkIsb0NBQThCRixPQUE5QjtBQUF1Q1ksY0FBUSxFQUFFWDtBQUFqRCxTQUE5QjtBQUNILEdBRkQsTUFFTztBQUNIRSxnQkFBWSxDQUFDVSxPQUFiLENBQXFCLE9BQXJCLEVBQThCUixJQUFJLENBQUNTLFNBQUwsQ0FBZU4sR0FBZixDQUE5QjtBQUNIO0FBQ0osQ0F4Qk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXIuYzYwNmU2MDU2YzAxMzQ2Y2U1ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbmNyZW1lbnRQcm9kdWN0VG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5UHJvZCkgPT4ge1xyXG4gICAgbGV0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSA6IFtdO1xyXG4gICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICBsZXQgdG1wID0gY2FydHM/Lm1hcChjID0+IHtcclxuICAgICAgICBpZiAoYz8uaWQgPT09IHByb2R1Y3QuaWQpIHtcclxuICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLmMsIHF1YW50aXR5OiBjLnF1YW50aXR5ICsgcXVhbnRpdHlQcm9kfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeShbLi4uY2FydHMsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogcXVhbnRpdHlQcm9kfV0pKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeSh0bXApKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVjcmVtZW50UHJvZHVjdFRvQ2FydCA9IChwcm9kdWN0LCBxdWFudGl0eVByb2QpID0+IHtcclxuICAgIGxldCBjYXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSkgOiBbXTtcclxuICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgbGV0IHRtcCA9IGNhcnRzPy5tYXAoKGMsaSkgPT4ge1xyXG4gICAgICAgIGlmIChjPy5pZCA9PT0gcHJvZHVjdC5pZCkge1xyXG4gICAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKGMucXVhbnRpdHkgPiAxKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uYywgcXVhbnRpdHk6IGMucXVhbnRpdHkgLSBxdWFudGl0eVByb2R9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FydHMpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDYXJ0ID0gY2FydHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Q2FydCk7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeShjYXJ0cykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNoZWNrID09PSBmYWxzZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KFsuLi5jYXJ0cywgey4uLnByb2R1Y3QsIHF1YW50aXR5OiBxdWFudGl0eVByb2R9XSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KHRtcCkpXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==