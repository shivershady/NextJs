webpackHotUpdate_N_E("pages/category",{

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
      alert('sản phẩm đã có trong giỏ hàng , thêm thành công');
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
      alert('Thay đổi số lượng thành công');
      check = true;
      return _objectSpread(_objectSpread({}, c), {}, {
        quantity: c.quantity - quantityProd
      });
    } else {
      return c;
    }
  });

  if (check === false) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlci9oYW5kbGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbImluY3JlbWVudFByb2R1Y3RUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHlQcm9kIiwiY2FydHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY2hlY2siLCJ0bXAiLCJtYXAiLCJjIiwiaWQiLCJhbGVydCIsInF1YW50aXR5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRlY3JlbWVudFByb2R1Y3RUb0NhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLE9BQUQsRUFBVUMsWUFBVixFQUEyQjtBQUM3RCxNQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUFnQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLENBQWhDLEdBQTBFLEVBQXRGO0FBQ0EsTUFBSUcsS0FBSyxHQUFHLEtBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxHQUFQLENBQVcsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RCLFFBQUcsQ0FBQUEsQ0FBQyxTQUFELElBQUFBLENBQUMsV0FBRCxZQUFBQSxDQUFDLENBQUVDLEVBQUgsTUFBVVgsT0FBTyxDQUFDVyxFQUFyQixFQUF3QjtBQUNwQkMsV0FBSyxDQUFDLGlEQUFELENBQUw7QUFDQUwsV0FBSyxHQUFHLElBQVI7QUFDQSw2Q0FBV0csQ0FBWDtBQUFjRyxnQkFBUSxFQUFFSCxDQUFDLENBQUNHLFFBQUYsR0FBYVo7QUFBckM7QUFDSCxLQUpELE1BSUs7QUFDRCxhQUFPUyxDQUFQO0FBQ0g7QUFDSixHQVJTLENBQVY7O0FBU0EsTUFBSUgsS0FBSyxLQUFLLEtBQWQsRUFBcUI7QUFDakJKLGdCQUFZLENBQUNXLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJULElBQUksQ0FBQ1UsU0FBTCxxSUFBbUJiLEtBQW5CLG9DQUE4QkYsT0FBOUI7QUFBdUNhLGNBQVEsRUFBRVo7QUFBakQsU0FBOUI7QUFDQVcsU0FBSyxDQUFDLHVDQUFELENBQUw7QUFDSCxHQUhELE1BR0s7QUFDRFQsZ0JBQVksQ0FBQ1csT0FBYixDQUFxQixPQUFyQixFQUE4QlQsSUFBSSxDQUFDVSxTQUFMLENBQWVQLEdBQWYsQ0FBOUI7QUFDSDtBQUNKLENBbEJNO0FBb0JBLElBQU1RLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ2hCLE9BQUQsRUFBVUMsWUFBVixFQUEyQjtBQUM3RCxNQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUFnQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLENBQWhDLEdBQTBFLEVBQXRGO0FBQ0EsTUFBSUcsS0FBSyxHQUFHLEtBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxHQUFQLENBQVcsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RCLFFBQUcsQ0FBQUEsQ0FBQyxTQUFELElBQUFBLENBQUMsV0FBRCxZQUFBQSxDQUFDLENBQUVDLEVBQUgsTUFBVVgsT0FBTyxDQUFDVyxFQUFyQixFQUF3QjtBQUNwQkMsV0FBSyxDQUFDLDhCQUFELENBQUw7QUFDQUwsV0FBSyxHQUFHLElBQVI7QUFDQSw2Q0FBV0csQ0FBWDtBQUFjRyxnQkFBUSxFQUFFSCxDQUFDLENBQUNHLFFBQUYsR0FBYVo7QUFBckM7QUFDSCxLQUpELE1BSUs7QUFDRCxhQUFPUyxDQUFQO0FBQ0g7QUFDSixHQVJTLENBQVY7O0FBU0EsTUFBSUgsS0FBSyxLQUFLLEtBQWQsRUFBcUI7QUFDakJKLGdCQUFZLENBQUNXLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJULElBQUksQ0FBQ1UsU0FBTCxxSUFBbUJiLEtBQW5CLG9DQUE4QkYsT0FBOUI7QUFBdUNhLGNBQVEsRUFBRVo7QUFBakQsU0FBOUI7QUFDQVcsU0FBSyxDQUFDLHVDQUFELENBQUw7QUFDSCxHQUhELE1BR0s7QUFDRFQsZ0JBQVksQ0FBQ1csT0FBYixDQUFxQixPQUFyQixFQUE4QlQsSUFBSSxDQUFDVSxTQUFMLENBQWVQLEdBQWYsQ0FBOUI7QUFDSDtBQUNKLENBbEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5LmI0NDU1ZTFjYmJhMzE5NzEzYWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5jcmVtZW50UHJvZHVjdFRvQ2FydCA9IChwcm9kdWN0LCBxdWFudGl0eVByb2QpID0+IHtcclxuICAgIGxldCBjYXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSk6W107XHJcbiAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgIGxldCB0bXAgPSBjYXJ0cz8ubWFwKGMgPT4ge1xyXG4gICAgICAgIGlmKGM/LmlkID09PSBwcm9kdWN0LmlkKXtcclxuICAgICAgICAgICAgYWxlcnQoJ3PhuqNuIHBo4bqpbSDEkcOjIGPDsyB0cm9uZyBnaeG7jyBow6BuZyAsIHRow6ptIHRow6BuaCBjw7RuZycpO1xyXG4gICAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uYywgcXVhbnRpdHk6IGMucXVhbnRpdHkgKyBxdWFudGl0eVByb2R9O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeShbLi4uY2FydHMsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogcXVhbnRpdHlQcm9kfV0pKVxyXG4gICAgICAgIGFsZXJ0KCd0aMOqbSBz4bqjbiBwaOG6qW0gdsOgbyBnaeG7jyBow6BuZyB0aMOgbmggY8O0bmcnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KHRtcCkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZW1lbnRQcm9kdWN0VG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5UHJvZCkgPT4ge1xyXG4gICAgbGV0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKTpbXTtcclxuICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgbGV0IHRtcCA9IGNhcnRzPy5tYXAoYyA9PiB7XHJcbiAgICAgICAgaWYoYz8uaWQgPT09IHByb2R1Y3QuaWQpe1xyXG4gICAgICAgICAgICBhbGVydCgnVGhheSDEkeG7lWkgc+G7kSBsxrDhu6NuZyB0aMOgbmggY8O0bmcnKTtcclxuICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLmMsIHF1YW50aXR5OiBjLnF1YW50aXR5IC0gcXVhbnRpdHlQcm9kfTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRzJywgSlNPTi5zdHJpbmdpZnkoWy4uLmNhcnRzLCB7Li4ucHJvZHVjdCwgcXVhbnRpdHk6IHF1YW50aXR5UHJvZH1dKSlcclxuICAgICAgICBhbGVydCgndGjDqm0gc+G6o24gcGjhuqltIHbDoG8gZ2nhu48gaMOgbmcgdGjDoG5oIGPDtG5nJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeSh0bXApKVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=