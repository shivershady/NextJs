webpackHotUpdate_N_E("pages/category",{

/***/ "./src/helper/handleProduct.js":
/*!*************************************!*\
  !*** ./src/helper/handleProduct.js ***!
  \*************************************/
/*! exports provided: addToCart, incrementProductToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementProductToCart", function() { return incrementProductToCart; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlci9oYW5kbGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbImFkZFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eVByb2QiLCJjYXJ0cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjaGVjayIsInRtcCIsIm1hcCIsImMiLCJpZCIsImFsZXJ0IiwicXVhbnRpdHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaW5jcmVtZW50UHJvZHVjdFRvQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBVUMsWUFBVixFQUEyQjtBQUNoRCxNQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUFnQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLENBQWhDLEdBQTBFLEVBQXRGO0FBQ0EsTUFBSUcsS0FBSyxHQUFHLEtBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxHQUFQLENBQVcsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RCLFFBQUcsQ0FBQUEsQ0FBQyxTQUFELElBQUFBLENBQUMsV0FBRCxZQUFBQSxDQUFDLENBQUVDLEVBQUgsTUFBVVgsT0FBTyxDQUFDVyxFQUFyQixFQUF3QjtBQUNwQkMsV0FBSyxDQUFDLCtCQUFELENBQUw7QUFDQUwsV0FBSyxHQUFHLElBQVI7QUFDQSw2Q0FBV0csQ0FBWDtBQUFjRyxnQkFBUSxFQUFFSCxDQUFDLENBQUNHLFFBQUYsR0FBYVo7QUFBckM7QUFDSCxLQUpELE1BSUs7QUFDRCxhQUFPUyxDQUFQO0FBQ0g7QUFDSixHQVJTLENBQVY7O0FBU0EsTUFBSUgsS0FBSyxJQUFJLEtBQWIsRUFBb0I7QUFDaEJKLGdCQUFZLENBQUNXLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJULElBQUksQ0FBQ1UsU0FBTCxxSUFBbUJiLEtBQW5CLG9DQUE4QkYsT0FBOUI7QUFBdUNhLGNBQVEsRUFBRVo7QUFBakQsU0FBOUI7QUFDQVcsU0FBSyxDQUFDLHVDQUFELENBQUw7QUFDSCxHQUhELE1BR0s7QUFDRFQsZ0JBQVksQ0FBQ1csT0FBYixDQUFxQixPQUFyQixFQUE4QlQsSUFBSSxDQUFDVSxTQUFMLENBQWVQLEdBQWYsQ0FBOUI7QUFDSDtBQUNKLENBbEJNO0FBb0JBLElBQU1RLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ2hCLE9BQUQsRUFBVUMsWUFBVixFQUEyQjtBQUM3RCxNQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUFnQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLENBQWhDLEdBQTBFLEVBQXRGO0FBQ0EsTUFBSUcsS0FBSyxHQUFHLEtBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxHQUFQLENBQVcsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RCLFFBQUcsQ0FBQUEsQ0FBQyxTQUFELElBQUFBLENBQUMsV0FBRCxZQUFBQSxDQUFDLENBQUVDLEVBQUgsTUFBVVgsT0FBTyxDQUFDVyxFQUFyQixFQUF3QjtBQUNwQkMsV0FBSyxDQUFDLCtCQUFELENBQUw7QUFDQUwsV0FBSyxHQUFHLElBQVI7QUFDQSw2Q0FBV0csQ0FBWDtBQUFjRyxnQkFBUSxFQUFFSCxDQUFDLENBQUNHLFFBQUYsR0FBYVo7QUFBckM7QUFDSCxLQUpELE1BSUs7QUFDRCxhQUFPUyxDQUFQO0FBQ0g7QUFDSixHQVJTLENBQVY7O0FBU0EsTUFBSUgsS0FBSyxJQUFJLEtBQWIsRUFBb0I7QUFDaEJKLGdCQUFZLENBQUNXLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJULElBQUksQ0FBQ1UsU0FBTCxxSUFBbUJiLEtBQW5CLG9DQUE4QkYsT0FBOUI7QUFBdUNhLGNBQVEsRUFBRVo7QUFBakQsU0FBOUI7QUFDQVcsU0FBSyxDQUFDLHVDQUFELENBQUw7QUFDSCxHQUhELE1BR0s7QUFDRFQsZ0JBQVksQ0FBQ1csT0FBYixDQUFxQixPQUFyQixFQUE4QlQsSUFBSSxDQUFDVSxTQUFMLENBQWVQLEdBQWYsQ0FBOUI7QUFDSDtBQUNKLENBbEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5LjliZGQwMDNjM2ExYWJkNWE0MjhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5UHJvZCkgPT4ge1xyXG4gICAgbGV0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKTpbXTtcclxuICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgbGV0IHRtcCA9IGNhcnRzPy5tYXAoYyA9PiB7XHJcbiAgICAgICAgaWYoYz8uaWQgPT09IHByb2R1Y3QuaWQpe1xyXG4gICAgICAgICAgICBhbGVydCgnc+G6o24gcGjhuqltIMSRw6MgY8OzIHRyb25nIGdp4buPIGjDoG5nJyk7XHJcbiAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5jLCBxdWFudGl0eTogYy5xdWFudGl0eSArIHF1YW50aXR5UHJvZH07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNoZWNrID09IGZhbHNlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRzJywgSlNPTi5zdHJpbmdpZnkoWy4uLmNhcnRzLCB7Li4ucHJvZHVjdCwgcXVhbnRpdHk6IHF1YW50aXR5UHJvZH1dKSlcclxuICAgICAgICBhbGVydCgndGjDqm0gc+G6o24gcGjhuqltIHbDoG8gZ2nhu48gaMOgbmcgdGjDoG5oIGPDtG5nJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeSh0bXApKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVtZW50UHJvZHVjdFRvQ2FydCA9IChwcm9kdWN0LCBxdWFudGl0eVByb2QpID0+IHtcclxuICAgIGxldCBjYXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSk6W107XHJcbiAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgIGxldCB0bXAgPSBjYXJ0cz8ubWFwKGMgPT4ge1xyXG4gICAgICAgIGlmKGM/LmlkID09PSBwcm9kdWN0LmlkKXtcclxuICAgICAgICAgICAgYWxlcnQoJ3PhuqNuIHBo4bqpbSDEkcOjIGPDsyB0cm9uZyBnaeG7jyBow6BuZycpO1xyXG4gICAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uYywgcXVhbnRpdHk6IGMucXVhbnRpdHkgKyBxdWFudGl0eVByb2R9O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChjaGVjayA9PSBmYWxzZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KFsuLi5jYXJ0cywgey4uLnByb2R1Y3QsIHF1YW50aXR5OiBxdWFudGl0eVByb2R9XSkpXHJcbiAgICAgICAgYWxlcnQoJ3Row6ptIHPhuqNuIHBo4bqpbSB2w6BvIGdp4buPIGjDoG5nIHRow6BuaCBjw7RuZycpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRzJywgSlNPTi5zdHJpbmdpZnkodG1wKSlcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9